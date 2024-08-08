/* eslint-disable react/prop-types */
import "../Styles/Card.css";

const Card = ({ onClick, id }) => {
  return (
    <button id={id} className="card" onClick={onClick}>
      123
    </button>
  );
};

export default Card;
