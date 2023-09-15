# VS Code Toggle Test .only Extension

## Overview

The **VS Code Toggle Test .only Extension** is a powerful tool for developers who work with JavaScript testing frameworks like Jest, Vitest, Mocha, and Jasmine. It simplifies the process of toggling the `.only` modifier on the current test block in your test files. This extension streamlines your workflow by allowing you to quickly switch between focusing on a single test or running all tests without the need to manually edit your code.

## Features

- Toggle the `.only` modifier on the current test block with a single command.
- Disable all other test blocks that have `.only` to ensure only one test is focused at a time.
- Easily switch between running all tests and running only the focused test.
- Supports popular testing frameworks: Jest, Vitest, Mocha, and Jasmine.
- Customizable keyboard shortcuts for quick access.
- **Customization**: Modify the `focusModifier` (default: '.only') and `testIdentifiers` (default: ['it', 'test', 'describe']) to match your testing framework's syntax.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the square icon in the left sidebar or pressing `Ctrl+Shift+X`.
3. Search for "Toggle Test .only" in the Extensions view search bar.
4. Click the "Install" button next to the extension authored by [Your Name].

## Usage

1. Open a JavaScript test file (e.g., a test file for Jest, Vitest, Mocha, or Jasmine).
2. Place the cursor inside a test block you want to focus on (e.g., an `it`, `test`, or `describe` block).
3. Use one of the following methods to toggle the `.only` modifier:

   - **Command Palette:**

     - Open the command palette by pressing `Ctrl+Shift+P`.
     - Type "Toggle Only" and select the command.

   - **Keyboard Shortcut:**
     - Assign a custom keyboard shortcut to the "Toggle Test .only" command for quick access. To do this:
       - Open the Keyboard Shortcuts settings by pressing `Ctrl+K Ctrl+S`.
       - Search for "Toggle Only" in the search bar.
       - Right-click on the command and choose "Add Keybinding" to set your preferred shortcut.

4. The extension will toggle the `.only` modifier on the current test block, disabling all other test blocks that have `.only`, ensuring only one test is focused at a time. This allows you to run focused tests or revert to running all tests.

## Configuration

This extension provides a few configuration options to customize its behavior. You can access these settings by navigating to your VS Code settings (File > Preferences > Settings) and searching for "Toggle Test .only."

- **`toggleTestOnly.focusModifier`**: Customize the modifier used to focus tests (e.g., change it from `.only` if your framework uses a different modifier).

- **`toggleTestOnly.testIdentifiers`**: Customize the test block identifiers (e.g., change them to match your framework's syntax if needed). The default identifiers are ['it', 'test', 'describe'].

## License

This extension is licensed under the [MIT License](LICENSE).

## Feedback and Contributions

We welcome your feedback and contributions! If you encounter any issues, have suggestions, or want to contribute to the development of this extension, please visit the [GitHub repository](https://github.com/omercohen990/toggle-test-only) and create an issue or pull request.

## About the Author

This extension is developed and maintained by omercohen990. Feel free to reach out to me with any questions or concerns.

Happy testing!
