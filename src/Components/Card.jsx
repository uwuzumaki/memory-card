/* eslint-disable react/prop-types */
import "../Styles/Card.css";
import { capitalize } from "lodash";

// Card for displaying all Pokémon
const Card = ({ onClick, id, poke }) => {
  return (
    <button id={id} className="card" onClick={onClick}>
      {capitalize(poke.name)}{" "}
      <img id={poke.id} src={poke.sprites.front_default} />
    </button>
  );
};

export default Card;
