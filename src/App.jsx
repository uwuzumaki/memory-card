import { useState } from "react";
import "./Styles/App.css";
import Card from "./Components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const [pickedCards, setPickedCards] = useState([]);

  const onClick = (e) => {
    // array.some((v) => pickedCards.includes(v)) checks if either array contains value from other array
    if (pickedCards.includes(e.target.id)) {
      setPickedCards([]);
      setScore(0);
    } else {
      setPickedCards((cards) => [...cards, e.target.id]);
      setScore((score) => score + 1);
      if (score >= highScore) setHighScore((score) => score + 1);
    }
    console.log(pickedCards);
  };

  return (
    <>
      <div>
        <h1>Memory Card Game</h1>
      </div>
      <hr />
      <section className="scoreboard">
        <div>Current Score: {score} </div>
        <div>High Score: {highScore}</div>
      </section>
      <div className="table">
        <Card onClick={onClick} id={1} />
        <Card onClick={onClick} id={2} />
        <Card onClick={onClick} id={3} />
        <Card onClick={onClick} id={4} />
        <Card onClick={onClick} id={5} />
        <Card onClick={onClick} id={6} />
        <Card onClick={onClick} id={7} />
        <Card onClick={onClick} id={8} />
        <Card onClick={onClick} id={9} />
        <Card onClick={onClick} id={10} />
        <Card onClick={onClick} id={11} />
        <Card onClick={onClick} id={12} />
        <Card onClick={onClick} id={13} />
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
