import React from "react";

const Form = (props) => {
  return (
    <form className="form">
      <div className="form__div">
        <label className="form__label">Cardholder Name</label>
        <input
          className="form__input"
          type="text"
          placeholder="e.g. JaneAppleseed"
        ></input>
      </div>
      <div className="form__div">
        <label className="form__label">Card Number</label>
        <input
          className="form__input"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
        ></input>
      </div>
      <div className="form__div">
        <div className="form__div--date">
          <div className="form__div--break">
            <label className="form__label">Exp. Date (MM/YY)</label>
            <div className="form__div--date">
              <input
                className="form__input form__input--date"
                type="number"
                placeholder="MM"
              ></input>
              <input
                className="form__input form__input--date"
                type="number"
                placeholder="YY"
              ></input>
            </div>
          </div>
          <div className="form__div--break">
            <label className="form__label">CVC</label>
            <div className="form__div">
              <input
                className="form__input form__input--date form__input--date--right"
                type="number"
                placeholder="e.g. 123 "
              ></input>
            </div>
          </div>
        </div>
      </div>
      <button className="form__button">Confirm</button>
    </form>
  );
};

export default Form;
