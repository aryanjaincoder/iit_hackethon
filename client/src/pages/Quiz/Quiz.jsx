import React, { useState, useEffect } from "react";
import "./Quiz.css";
import CodeEditor from "../../components/codeEditor/CodeEditor";


// Pyramid Structure Questions
const problems = [
  { id: 1, title: "Sum of Two Numbers", description: "Write a function that returns sum of two numbers.", inputExample: "5 7", outputExample: "12", testCases: [{ input: "3 8", expectedOutput: "11" }], difficulty: "Easy" },
  { id: 2, title: "Even or Odd", description: "Determine if a number is even or odd.", inputExample: "4", outputExample: "Even", testCases: [{ input: "7", expectedOutput: "Odd" }], difficulty: "Easy" },
  { id: 3, title: "Factorial", description: "Calculate the factorial of a number.", inputExample: "5", outputExample: "120", testCases: [{ input: "6", expectedOutput: "720" }], difficulty: "Medium" },
  { id: 4, title: "Prime Number", description: "Check if a number is prime.", inputExample: "13", outputExample: "Yes", testCases: [{ input: "10", expectedOutput: "No" }], difficulty: "Medium" },
  { id: 5, title: "Fibonacci Series", description: "Print the first N Fibonacci numbers.", inputExample: "6", outputExample: "0 1 1 2 3 5", testCases: [{ input: "7", expectedOutput: "0 1 1 2 3 5 8" }], difficulty: "Hard" },
];

export default function Quiz() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(100);
  const [timer, setTimer] = useState(60);
  const [isLocked, setIsLocked] = useState(true); // Key-Lock feature

  const currentProblem = problems[currentProblemIndex];

  // Timer Function
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setIsLocked(true); // Lock the next problem if time runs out
    }
  }, [timer]);

  // Handle Correct Answer
  const handleCorrectAnswer = () => {
    setScore(score + 10);
    setCoins(coins + 50);
    setIsLocked(false); // Unlock next question
    setTimer(60); // Reset timer for next question
  };

  // Go to Next Problem
  const handleNextProblem = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
      setIsLocked(true); // Lock the next question until it's solved
    }
  };

  return (
    <div className="quiz-container">
      {/* Pyramid View */}
      <aside className="pyramid">
        {problems.map((problem, index) => (
          <div key={problem.id} className={`pyramid-level ${index === currentProblemIndex ? "active" : ""}`}>
            {problem.title}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="quiz-content">
        <header className="quiz-header">
          <div className="score-box">Score: {score} 🏆</div>
          <div className="coin-box">Coins: {coins} 💰</div>
          <div className="timer-box">⏳ {timer}s</div>
        </header>

        <h2>{currentProblem.title}</h2>
        <p>{currentProblem.description}</p>
        <h4>Example Input:</h4>
        <pre>{currentProblem.inputExample}</pre>
        <h4>Expected Output:</h4>
        <pre>{currentProblem.outputExample}</pre>

        <CodeEditor problem={currentProblem} updateScore={handleCorrectAnswer} />

        <button className="next-btn" onClick={handleNextProblem} disabled={isLocked}>
          Next Question ➡️
        </button>
      </main>
    </div>
  );
}
