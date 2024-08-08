/* eslint-disable react/prop-types */
import "../Styles/Card.css";

const Card = ({ onClick }) => {
  return (
    <button className="card" onClick={onClick}>
      123
    </button>
  );
};

export default Card;
