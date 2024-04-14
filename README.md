# React Quiz Application

This React Quiz Application allows users to take quizzes fetched from an API, track their progress, and see their final scores. It's built using React and utilizes React hooks like `useReducer` for state management.

## Features

- Fetches quiz questions from an external API (Open Trivia Database).
- Displays a loading spinner while fetching questions.
- Handles errors gracefully if there's an issue with fetching questions.
- Allows users to answer questions and tracks their progress.
- Provides a progress bar to indicate the user's progress through the quiz.
- Upon completion, displays the final score and offers the option to play again.

## Components

- **Main**: The main component responsible for rendering the quiz interface and managing the quiz state.
- **Home**: Initial screen to start the quiz, allowing users to begin the quiz by selecting a category and difficulty level.
- **Error**: Component to display if there's an error fetching questions.
- **Loader**: Component to display a loading spinner while fetching questions.
- **ProgressBar**: Component to display the progress of the quiz.
- **Question**: Component to display individual quiz questions and handle user responses.
- **FinishedScreen**: Component to display the final score and provide an option to play again.

## Usage

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Access the application in your browser at `http://localhost:3000`.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Hooks: `useReducer` hook for managing complex state logic.
- HTML/CSS: Markup and styling for the user interface.
- Open Trivia Database API: External API used for fetching quiz questions.

## What I Learned

```javascript
// Utilized `useReducer`  hook for managing complex state logic in React, providing a more organized and efficient way to handle state changes within the application.
```

## How to Contribute

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.
