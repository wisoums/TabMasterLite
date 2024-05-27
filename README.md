# TabMaster Lite

**TabMaster Lite** is a Chrome extension designed to help users manage and optimize their browser tabs and sessions efficiently. This extension offers features for saving and restoring browser sessions, categorizing them for better organization, and deleting unused sessions to keep the extension clutter-free.

## Features

- **Save Session**: Save all currently open tabs as a session with a custom name.
- **Categorize Sessions**: Organize saved sessions into predefined categories like Personal, Work, or create a custom category.
- **Restore Session**: Restore any saved session to reopen all tabs within that session.
- **Delete Session**: Delete unused sessions to prevent overload and keep the extension organized.

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/wisoums/TabMasterLite.git
    ```

2. Navigate to the Chrome Extensions page (`chrome://extensions/`) and enable "Developer mode".

3. Click on "Load unpacked" and select the project directory (`TabMasterLite`).

## Usage

1. Click on the TabMaster Lite icon in the Chrome toolbar to open the extension popup.
2. To save a session:
    - Enter a session name.
    - Select a category or create a custom category.
    - Click "Save Session".
3. To restore a session:
    - Select a session from the dropdown list.
    - Click "Restore Session".
4. To delete a session:
    - Select a session from the dropdown list.
    - Click "Delete Session".

## Programming Languages & Technologies Used

- **HTML**: For structuring the popup user interface.
- **CSS**: For styling the popup user interface.
- **JavaScript**: For the extension's functionality, both in the popup and the background scripts.
- **Chrome Extensions API**: For interacting with the browser and managing tabs and storage.

## Contributing

Contributions are welcome! If you have suggestions for new features or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
