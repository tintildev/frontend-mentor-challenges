import React, { useState } from "react";
import Footer from "./Footer/Footer";
import CardBack from "./Card/CardBack";
import "../components/sass/main.scss";
import CardFront from "./Card/CardFront";
import Card from "./Card/Card";
import Form from "./Form";

const Main = (props) => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardMM, setCardMM] = useState("00");
  const [cardYY, setCardYY] = useState("00");
  const [cardCVC, setCardCVC] = useState("000");

  const numberChangeHandler = (value) => {
    setCardNumber(value);
  }
  const nameChangeHandler = (value) => {
    setCardName(value);
  }
  const mmChangeHandler = (value) => {
    setCardMM(value);
  }
  const yyChangeHandler = (value) => {
    setCardYY(value);
  }
  const cvcChangeHandler = (value) => {
    setCardCVC(value);
  }


  return (
    <div className="Main">
      <main>
        <section>
          <Card className="card--Holder">
            <CardBack cvc={cardCVC}></CardBack>
            <CardFront
              number={cardNumber}
              name={cardName}
              mm={cardMM}
              yy={cardYY}
            ></CardFront>
          </Card>
          <Form
            number={cardNumber}
            name={cardName}
            mm={cardMM}
            yy={cardYY}
            cvc={cardCVC}

            numberHandler={numberChangeHandler}
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
