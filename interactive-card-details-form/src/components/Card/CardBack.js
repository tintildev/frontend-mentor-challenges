import React from "react";
import "../sass/card.scss";

const CardBack = (props) => {
    return (
        <div className="card--Back" style={{backgroundImage: "url(/images/bg-card-back.png"}}>
            <p>{props.value}</p>
        </div>
    )
}

export default CardBack;