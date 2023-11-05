import React from "react";
import "../sass/card.scss";

const CardFront = (props) => {
  return (
    <div
      className="card--Front"
      style={{ backgroundImage: "url(/images/bg-card-front.png" }}
    >
      <p>data</p>
    </div>
  );
};

export default CardFront;
