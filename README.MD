Interactive Git Tutorial
Overview

The Interactive Git Tutorial is a web application designed to help users learn Git commands in an interactive way. The platform allows users to practice basic to advanced Git commands in a controlled environment, providing instant feedback and guiding them through various levels of difficulty. This tool is perfect for beginners who want to get hands-on experience with Git without the risk of making mistakes in a real repository.
Features

    Interactive Command Input: Users can input Git commands and receive immediate feedback.
    Level-Based Learning: The tutorial is structured in levels, each focusing on specific Git commands and concepts.
    Real-Time Feedback: After executing a command, users get instant feedback, showing the output or any errors.
    Progression System: Users progress through levels by successfully completing tasks, which helps reinforce their learning.

Technology Stack

    Backend:
        Python
        Flask (for handling API requests)
        Flask-Cors (for handling Cross-Origin Resource Sharing)

    Frontend:
        React.js
        CSS (for styling)

Project Structure

arduino

interactive-git-tutorial/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── git_commands.py
│   │   ├── routes.py
│   ├── config.py
│   ├── requirements.txt
│   └── run.py
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── CommandInput.js
│   │   │   ├── Feedback.js
│   │   │   ├── Level.js
│   │   └── App.js
│   ├── index.js
│   └── styles.css
└── README.md

Setup Instructions
1. Clone the Repository

bash

git clone https://github.com/Apatoma/interactive-git-tutorial.git
cd interactive-git-tutorial

2. Backend Setup

    Install Dependencies:

    bash

pip install -r backend/requirements.txt

Start the Server:

bash

    python backend/run.py

3. Frontend Setup

    Install Dependencies:

    bash

cd frontend
npm install

Start the Development Server:

bash

    npm start

4. Access the Application

    Open your browser and navigate to http://localhost:3000 to interact with the application.

Usage

    Enter Git Commands: Use the input field to enter Git commands you want to practice.
    Receive Feedback: The application will display the output of the command or any errors that occurred.
    Progress Through Levels: Complete the tasks outlined in each level to move to the next one.
    Learn by Doing: Use the application to familiarize yourself with common Git operations in a safe environment.

Future Enhancements

    Advanced Levels: Introduce more complex levels covering advanced Git topics such as rebasing, cherry-picking, and stashing.
    Command Hints: Provide optional hints or suggestions for users who are stuck on a level.
    Persistent Progress: Implement user accounts to save progress across sessions.
    Interactive Demos: Include visual demos to accompany the textual instructions and command execution.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes or improvements.
License

This project is licensed under the MIT License. See the LICENSE file for more details.