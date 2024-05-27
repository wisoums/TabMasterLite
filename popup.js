document.addEventListener('DOMContentLoaded', () => {
    loadSessionList();

    document.getElementById('category').addEventListener('change', () => {
        const categorySelect = document.getElementById('category');
        const customCategoryInput = document.getElementById('customCategory');
        if (categorySelect.value === 'Custom') {
            customCategoryInput.style.display = 'block';
        } else {
            customCategoryInput.style.display = 'none';
        }
    });

    document.getElementById('saveSession').addEventListener('click', () => {
        const sessionName = document.getElementById('sessionName').value;
        const categorySelect = document.getElementById('category').value;
        const customCategory = document.getElementById('customCategory').value;
        const category = categorySelect === 'Custom' ? customCategory : categorySelect;

        if (sessionName && category) {
            chrome.runtime.sendMessage({ action: 'saveSession', sessionName, category });
            document.getElementById('sessionName').value = ''; // Clear the input field
            document.getElementById('customCategory').value = ''; // Clear custom category field
            loadSessionList(); // Refresh the session list
        } else {
            alert('Please enter a session name and select a category.');
        }
    });

    document.getElementById('restoreSession').addEventListener('click', () => {
        const sessionName = document.getElementById('sessionList').value;
        if (sessionName) {
            chrome.runtime.sendMessage({ action: 'restoreSession', sessionName });
        }
    });

    document.getElementById('deleteSession').addEventListener('click', () => {
        const sessionName = document.getElementById('sessionList').value;
        if (sessionName) {
            chrome.runtime.sendMessage({ action: 'deleteSession', sessionName }, loadSessionList);
        }
    });
});

function loadSessionList() {
    chrome.storage.local.get('sessions', (data) => {
        const sessions = data.sessions || {};
        const sessionList = document.getElementById('sessionList');
        sessionList.innerHTML = ''; // Clear existing options
        for (const category in sessions) {
            for (const name in sessions[category]) {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = `${name} (${category})`;
                sessionList.appendChild(option);
            }
        }
    });
}
