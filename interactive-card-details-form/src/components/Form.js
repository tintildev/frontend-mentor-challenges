import React, { useState } from "react";

const Form = (props) => {

  const [cardNumber, setCardNumber] = useState("");

  const nameChangeHandler = (event) => {
    props.nameHandler(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setCardNumber(event.target.value);
    props.numberHandler(event.target.value);
  };

  const mmChangeHandler = (event) => {
    props.mmHandler(event.target.value);
  };

  const yyChangeHandler = (event) => {
    props.yyHandler(event.target.value);
  };

  const cvcChangeHandler = (event) => {
    props.cvcHandler(event.target.value);
  };

  return (
    <form className="form">
      <div className="form__div">
        <label className="form__label">Cardholder Name</label>
        <input
          className="form__input"
          type="text"
          placeholder={props.name}
          onChange={nameChangeHandler}
        ></input>
      </div>
      <div className="form__div">
        <label className="form__label" for="cardNumber">Card Number</label>
        <input
          className="form__input"
          placeholder={props.numberPlaceholder}
          type="text"
          required
          maxLength={19}
          onChange={numberChangeHandler}
          value={cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()}
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
                placeholder={props.mm}
                onChange={mmChangeHandler}
              ></input>
              <input
                className="form__input form__input--date"
                type="number"
                placeholder={props.yy}
                onChange={yyChangeHandler}
              ></input>
            </div>
          </div>
          <div className="form__div--break">
            <label className="form__label">CVC</label>
            <div className="form__div">
              <input
                className="form__input form__input--date form__input--date--right"
                type="text"
                placeholder={props.cvc}
                onChange={cvcChangeHandler}
                pattern="[0-9]{10}"
                maxLength="3"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="form__button">
        Confirm
      </button>
    </form>
  );
};

export default Form;
