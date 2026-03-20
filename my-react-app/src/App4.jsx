// Build a simple quiz with 5 hardcoded questions.
//  Show one question at a time. User picks an answer, sees if they got it right, then moves to the next question. Show final score at the end.

// Requirements
// A Question component that receives question, options, and onAnswer as props
// Track current question index and score in useState
// When an answer is clicked, show green (correct) or red (wrong) feedback before moving on
// When all questions are done, show a results screen with the score and a "Play Again" button that resets state
// No API needed — hardcode your 5 questions as a JS array
// components
// props
// useState
// conditional rendering
// event handling
// Starter hint
// Your state will be: currentIndex, score, selectedAnswer (null until clicked), isFinished. 
// When an answer is clicked, set selectedAnswer, wait 1 second with setTimeout, then advance the index.

import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Budapest"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: [4, 2, -2],
    answer: 4,
  },
];

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setIndex] = useState(0);

  return (
    <div>
      <h1>Quiz App</h1>

      {!isStarted && (
        <button onClick={() => setIsStarted(true)}>
          Start Quiz
        </button>
      )}

      {isStarted && (
        <h2>{questions[currentIndex].question}</h2>
      )}
    </div>
  );
}

export default App;