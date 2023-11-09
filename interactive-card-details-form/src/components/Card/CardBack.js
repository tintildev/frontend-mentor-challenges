import React from "react";
import "../sass/card.scss";

const CardBack = (props) => {
    return (
        <div className="card__Back" style={{backgroundImage: "url(/images/bg-card-back.png)"}}>
            <p></p>
            <p className="card__Back--CVC">{props.cvc}</p>
        </div>
    )
}

export default CardBack;