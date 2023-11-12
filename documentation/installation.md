# Hosting PosePals Locally & Building From Source

## Prerequisites
Before you begin, ensure you have the following installed:
- Android Studio (latest version)
- Git
- Java Development Kit (JDK)
- Python (with pip for installing dependencies)
- C++ compiler and development tools

## Cloning the Repository
1. Open your terminal.
2. Clone the PosePals repository by running:
´´´
git clone https://github.com/your-repo/PosePals.git
´´´
3. Navigate to the cloned directory:
´´´
cd PosePals
´´´
## Setting Up the Environment
1. Install the required Python libraries:
´´´
pip install -r requirements.txt
´´´
2. Set up the Java and C++ environments in Android Studio.

## Building the Project with Android Studio
1. Open Android Studio.
2. Choose 'Open an Existing Project' and navigate to your `app` directory.
3. Let Android Studio index and set up the project. This may take a few minutes.
4. Once setup is complete, go to `Build > Make Project` to compile the code.

## Running the Application
1. Connect an Android device to your computer or set up an emulator in Android Studio.
2. Ensure the device is in developer mode with USB debugging enabled.
3. In Android Studio, select your device from the dropdown in the toolbar.
4. Click on the 'Run' icon (green triangle) to build, install, and run the app on your device.

## Setting Up the Backend (Optional)
If the app requires a backend server:
1. Navigate to the server directory within the PosePals project.
2. Run the server using the appropriate command (varies based on how the backend is set up).
3. Ensure the app is configured to communicate with your local server (modify the app's network configuration if needed).

## Troubleshooting
- If you encounter build errors, check that all prerequisites are properly installed and that the SDK and build tools versions match those specified in the project.
- For device connectivity issues, verify USB debugging is enabled and the device is authorized on your computer.

## Contributing
We encourage contributions! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request.

---

**Note**: This guide assumes a basic familiarity with Android development and toolchains. For more detailed instructions, refer to the official Android Studio and Java Native Interface documentation.

---