chrome.runtime.onInstalled.addListener(() => {
    console.log("TabMaster Lite installed!");
});

function saveSession(sessionName, category) {
    chrome.tabs.query({}, (tabs) => {
        const session = tabs.map((tab) => ({
            title: tab.title,
            url: tab.url,
            favIconUrl: tab.favIconUrl,
        }));
        chrome.storage.local.get('sessions', (data) => {
            const sessions = data.sessions || {};
            if (!sessions[category]) {
                sessions[category] = {};
            }
            sessions[category][sessionName] = session;
            chrome.storage.local.set({ sessions }, () => {
                console.log(`Session '${sessionName}' saved under category '${category}'.`);
            });
        });
    });
}

function restoreSession(sessionName) {
    chrome.storage.local.get('sessions', (data) => {
        const sessions = data.sessions || {};
        for (const category in sessions) {
            if (sessions[category][sessionName]) {
                const session = sessions[category][sessionName];
                session.forEach((tab) => {
                    chrome.tabs.create({ url: tab.url });
                });
                break;
            }
        }
    });
}

function deleteSession(sessionName) {
    chrome.storage.local.get('sessions', (data) => {
        const sessions = data.sessions || {};
        for (const category in sessions) {
            if (sessions[category][sessionName]) {
                delete sessions[category][sessionName];
                if (Object.keys(sessions[category]).length === 0) {
                    delete sessions[category];
                }
                chrome.storage.local.set({ sessions }, () => {
                    console.log(`Session '${sessionName}' deleted.`);
                });
                break;
            }
        }
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'saveSession') {
        saveSession(request.sessionName, request.category);
    } else if (request.action === 'restoreSession') {
        restoreSession(request.sessionName);
    } else if (request.action === 'deleteSession') {
        deleteSession(request.sessionName);
    }
});

