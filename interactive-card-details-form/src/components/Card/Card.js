import React from "react";
import "../sass/card.scss";

function Card(props){
    const classes = 'card ' + props.className;
    return(
        <div className={classes} style={{backgroundImage: "url(/images/bg-main-mobile.png"}}>{props.children}</div>
    )
}

export default Card;