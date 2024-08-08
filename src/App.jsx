import { useState } from "react";
import "./Styles/App.css";
import Card from "./Components/Card";

function App() {
  const [score, setScore] = useState(0);

  const onClick = () => {
    setScore((score) => score + 1);
  };

  return (
    <>
      <div>
        <h1>Memory Card Game</h1>
      </div>
      <hr />
      <section className="scoreboard">
        <div>Current Score: {score} </div>
        <div>High Score: {score}</div>
      </section>
      <div className="table">
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
        <Card onClick={onClick} />
      </div>
      <p className="read-the-docs">
        <button onClick={() => setScore((score) => score + 1)}>
          score is {score}
        </button>
      </p>
    </>
  );
}

export default App;
