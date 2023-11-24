import React from "react";
import "./sass/confirm.scss";

const Confirm =(props) => {
    return(
        <div className="confirm">
            <img src="/images/icon-complete.svg" alt="icon complete"></img>
            <h1>Thank you!</h1>
            <p className="confirm__p"> We've added your card details</p>
            <button className="button button__confirm">Continue</button>
        </div>
    )
}

export default Confirm;
