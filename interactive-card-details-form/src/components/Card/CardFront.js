import React from "react";
import "../sass/card.scss";

const CardFront = (props) => {
  return (
    <div
      className="card__Front"
      style={{ backgroundImage: "url(/images/bg-card-front.png" }}
    >
      <img
        src="./images/card-logo.svg"
        alt="logo"
        className="card__Front--logo"
      />
      <div className="card__Front--data">
        <p className="card__Front--number">{props.number}</p>
        <div className="card__Front--details">
          <p className="card__Front--name">{props.name}</p>
          <div className="card__Front--date">
            <p className="card__Front--MM">{props.MM}</p>
            <p>/</p>
            <p className="card__Front--YY">{props.YY}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
