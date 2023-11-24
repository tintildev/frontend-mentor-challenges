import React, { useState } from "react";

const Form = (props) => {

  const [cardNumber, setCardNumber] = useState("");
  //const [cardName, setCardName] = useState("e.g. Jane Appleseed");
  const [cardMM, setCardMM] = useState("MM");
  const [cardYY, setCardYY] = useState("YY");
  const [cardCVC, setCardCVC] = useState("e.g. 123");

  const nameChangeHandler = (event) => {
    
    props.nameHandler(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setCardNumber(event.target.value);
    props.numberHandler(event.target.value);
  };

  const mmChangeHandler = (event) => {
    let value = event.target.value;
    if (value > 0 && value < 13){
      setCardMM(value)
      props.mmHandler(value);
    }else{
      setCardMM("MM")
      props.mmHandler("MM");
    }
    
  };

  const yyChangeHandler = (event) => {
    let value = event.target.value;
    if(value < 99 && value > 0){
      setCardYY(value)
      props.yyHandler(value);
    }else{
      setCardYY("YY")
      props.yyHandler("YY");
    }
  };

  const cvcChangeHandler = (event) => {
    let value = event.target.value;
    if(value < 1000){
      setCardCVC(value);
      props.cvcHandler(value);
    }else{
      setCardCVC("e.g. 123");
      props.cvcHandler("e.g. 123");
    }
  };

  const submitChange = (event) =>{
    props.submitHandler(true);
  };

  return (
    <form className="form" onSubmit={submitChange}> 
      <div className="form__div">
        <label className="form__label">Cardholder Name</label>
        <input
          className="form__input"
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={nameChangeHandler}
          maxLength="18"
        ></input>
      </div>
      <div className="form__div">
        <label className="form__label" for="cardNumber">Card Number</label>
        <input
          className="form__input"
          placeholder="e.g. 1234 5678 9123 0000"
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
                min="1"
                max="12"
                step="1"
                value={cardMM}
                placeholder={cardMM}
                onChange={mmChangeHandler}
              ></input>
              <input
                className="form__input form__input--date"
                type="number"
                min="0"
                max="99"
                step="1"
                placeholder={cardYY}
                value={cardYY}
                onChange={yyChangeHandler}
              ></input>
            </div>
          </div>
          <div className="form__div--break">
            <label className="form__label">CVC</label>
            <div className="form__div">
              <input
                className="form__input form__input--date form__input--date--right"
                type="number"
                min="0"
                max="999"
                step="1"
                placeholder={cardCVC}
                onChange={cvcChangeHandler}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="button">
        Confirm
      </button>
    </form>
  );
};

export default Form;
