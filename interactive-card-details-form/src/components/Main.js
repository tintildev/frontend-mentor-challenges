import React, { useState } from "react";
import Footer from "./Footer/Footer";
import CardBack from "./Card/CardBack";
import "../components/sass/main.scss";
import CardFront from "./Card/CardFront";
import Card from "./Card/Card";
import Form from "./Form";

const Main = (props) => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardFrontNumber, setCardFrontNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardMM, setCardMM] = useState("00");
  const [cardYY, setCardYY] = useState("00");
  const [cardCVC, setCardCVC] = useState("000");

  const numberChangeHandler = (value) => {
    setCardNumber(value);
  };
  const numberFrontChangeHandler = (value) => {
    if(cardFrontNumber.length > 3){
      addSpaceToCardNumber(3);
    }
    if(cardFrontNumber.length > 7){
      addSpaceToCardNumber(3);
      addSpaceToCardNumber(7);
    }
    if(cardFrontNumber.length > 11){
      addSpaceToCardNumber(3);
      addSpaceToCardNumber(7);
      addSpaceToCardNumber(11);
    }
    setCardFrontNumber(value);
  };

  const nameChangeHandler = (value) => {
    setCardName(value);
  };
  const mmChangeHandler = (value) => {
    setCardMM(value);
  };
  const yyChangeHandler = (value) => {
    setCardYY(value);
  };
  const cvcChangeHandler = (value) => {
    setCardCVC(value);
  };

  function addSpaceToCardNumber(index){
    setCardFrontNumber((cardFrontNumber) => {
      return [...cardFrontNumber.slice(0,index), " ", ...cardFrontNumber(index)];
    });
  }

  return (
    <div className="Main">
      <main>
        <section>
          <Card className="card--Holder">
            <CardBack cvc={cardCVC}></CardBack>
            <CardFront
              number={cardFrontNumber}
              name={cardName}
              mm={cardMM}
              yy={cardYY}
            ></CardFront>
          </Card>
          <Form
            number={cardNumber}
            numberPlaceholder="e.g. 1234 5678 9123 0000"
            name={cardName}
            mm={cardMM}
            yy={cardYY}
            cvc={cardCVC}
            numberHandler={numberChangeHandler}
            numberFrontHandler={numberFrontChangeHandler}
            nameHandler={nameChangeHandler}
            mmHandler={mmChangeHandler}
            yyHandler={yyChangeHandler}
            cvcHandler={cvcChangeHandler}
          ></Form>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Main;
