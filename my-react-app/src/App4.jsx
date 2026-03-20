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
  const [score, setScore] = useState(0);
  const [currentAnswer, setAnswer] = useState(null);

  function handleAnswer(option) {
    setAnswer(option);

    const correctAnswer = questions[currentIndex].answer;

    if (option === correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setIndex((prev) => prev + 1);
      setAnswer(null);
    }, 1000);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Quiz App</h1>

      {!isStarted && (
        <button onClick={() => setIsStarted(true)}>
          Start Quiz
        </button>
      )}

      {isStarted && currentIndex < questions.length && (
        <div>
          <h2>{questions[currentIndex].question}</h2>

          <ul style={{ listStyle: "none" }}>
            {questions[currentIndex].options.map((option, index) => {
              let bgColor = "";

              if (currentAnswer) {
                if (option === questions[currentIndex].answer) {
                  bgColor = "lightgreen";
                } else if (option === currentAnswer) {
                  bgColor = "salmon";
                }
              }

              return (
                <li key={index} style={{ margin: "10px" }}>
                  <button
                    onClick={() => handleAnswer(option)}
                    style={{ backgroundColor: bgColor, padding: "10px" }}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {isStarted && currentIndex >= questions.length && (
        <div>
          <h2>Quiz Finished 🎉</h2>
          <p>Your Score: {score}</p>

          <button
            onClick={() => {
              setIndex(0);
              setScore(0);
              setIsStarted(false);
              setAnswer(null);
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;