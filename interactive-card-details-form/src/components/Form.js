import React from "react";

const Form = (props) => {
  return (
    <form className="form">
      <div className="form--div">
        <label className="form--label">Cardholder Name</label>
        <input
          className="form--input"
          type="text"
          placeholder="e.g. JaneAppleseed"
        ></input>
      </div>
      <div className="form--div">
        <label className="form--label">Card Number</label>
        <input
          className="form--input"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
        ></input>
      </div>
      <div className="form--div">
        <div className="form--div">
          <label className="form--label">Exp. Date (MM/YY)</label>
          <input className="form--input" type="date" placeholder="MM"></input>
          <input className="form--input" type="date" placeholder="YY"></input>
        </div>
        <div>
          <label className="form--label">CVC</label>
          <input
            className="form--input"
            type="date"
            placeholder="e.g. 123 "
          ></input>
        </div>
      </div>
      <button className="form--button">Confirm</button>
    </form>
  );
};

export default Form;
