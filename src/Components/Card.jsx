/* eslint-disable react/prop-types */
import "../Styles/Card.css";

const Card = ({ onClick, id }) => {
  return (
    <button id={id} className="card" onClick={onClick}>
      {id}
    </button>
  );
};

export default Card;
