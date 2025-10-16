import { useState } from 'react'
import './scss/styles.scss';

export default function App() {
  const [rollResult, setRollResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [isRolling, setIsRolling] = useState(false);

  function getDiceFace(value) {
    switch (value) {
      case 1:
        return "⚀";
      case 2:
        return "⚁";
      case 3:
        return "⚂";
      case 4:
        return "⚃";
      case 5:
        return "⚄";
      case 6:
        return "⚅";
      default:
        return "";
    }
  }

  function rollDice() {
    setIsRolling(true);
    setTimeout(() => {
      const newRoll = Math.floor(Math.random() * 6) + 1;
      setRollResult(newRoll);
      setHistory(prev => [...prev, newRoll]);
      setIsRolling(false);
    }, 1000);
  }

  return (
    <div className="app container mt-5">
      <h1>🎲 React Dice Roller</h1>

      <div className={`dice ${isRolling ? "roll-animation" : ""} fs-1`} >
        {rollResult ? getDiceFace(rollResult) : "🎯"}
      </div>

      <button
        onClick={rollDice}
        disabled={isRolling}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          fontSize: "1.2rem",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      >
        {isRolling ? "Rolling..." : "Roll Dice"}
      </button>

      <h2>History</h2>
      <div className="bg-light">
        <ul className="history">
        {history.map((num, index) => (
          <li key={index}><span className='fs-1'>{getDiceFace(num)}</span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
