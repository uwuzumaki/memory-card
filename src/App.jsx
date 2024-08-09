import { useState } from "react";
import "./Styles/App.css";
import { shuffle } from "lodash";
import Card from "./Components/Card";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pickedCards, setPickedCards] = useState([]);
  const [array, setArray] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);

  const onClick = (e) => {
    if (pickedCards.includes(e.target.id)) {
      setPickedCards([]);
      setScore(0);
      setArray(shuffle(array));
      console.log(array);
    } else {
      setPickedCards((cards) => [...cards, e.target.id]);
      setScore((score) => score + 1);
      if (score >= highScore) setHighScore((score) => score + 1);
      setArray(shuffle(array));
      console.log(array);
    }
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
        {array.map((num) => (
          <Card onClick={onClick} key={num} id={num} />
        ))}
      </div>
    </>
  );
}

export default App;
