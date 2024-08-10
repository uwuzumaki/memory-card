import { useEffect, useState } from "react";
import "./Styles/App.css";
import { shuffle } from "lodash";
import Card from "./Components/Card";
import pokemon from "./Components/Helper";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pickedCards, setPickedCards] = useState([]);
  const [array, setArray] = useState([]);

  useEffect(() => {
    pokemon(setArray);
  }, []);

  const onClick = (e) => {
    if (pickedCards.includes(e.target.id)) {
      setPickedCards([]);
      setScore(0);
      setArray(shuffle(array));
    } else {
      setPickedCards((cards) => [...cards, e.target.id]);
      setScore((score) => score + 1);
      if (score >= highScore) setHighScore((score) => score + 1);
      setArray(shuffle(array));
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
        {array.map((poke) => (
          <Card
            onClick={onClick}
            id={"p" + poke.id}
            key={poke.id}
            poke={poke}
          />
        ))}
      </div>
    </>
  );
}

export default App;
