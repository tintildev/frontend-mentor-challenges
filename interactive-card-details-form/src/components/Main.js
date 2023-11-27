import React, { useState } from "react";
import Footer from "./Footer/Footer";
import CardBack from "./Card/CardBack";
import "../components/sass/main.scss";
import CardFront from "./Card/CardFront";
import Card from "./Card/Card";
import CardImg from "./Card/CardImg";
import Form from "./Form";
import Confirm from "./Confirm";

const Main = (props) => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("e.g. Jane Appleseed");
  const [cardMM, setCardMM] = useState("00");
  const [cardYY, setCardYY] = useState("00");
  const [cardCVC, setCardCVC] = useState("000");
  const [submit, setSubmitState] = useState(false);

  const numberChangeHandler = (value) => {
    setCardNumber(value);
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

  const submitHandler = (value) => {
    setSubmitState(value);
  };

  if (submit === true) {
    return (
      <div>
        <main className="Main">
          <section>
            <Card className="card">
              <CardImg></CardImg>
              <CardBack cvc={cardCVC}></CardBack>
              <CardFront
                number={cardNumber}
                name={cardName}
                mm={cardMM}
                yy={cardYY}
              ></CardFront>
            </Card>
            <Confirm submitHandler={submitHandler}></Confirm>
          </section>
        </main>

        <Footer></Footer>
      </div>
    );
  } else {
    return (
      <div>
        <main className="Main">
          <section>
            <Card className="card">
              <CardImg></CardImg>
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
              numberPlaceholder="e.g. 1234 5678 9123 0000"
              name={cardName}
              mm={cardMM}
              yy={cardYY}
              cvc={cardCVC}
              numberHandler={numberChangeHandler}
              nameHandler={nameChangeHandler}
              mmHandler={mmChangeHandler}
              yyHandler={yyChangeHandler}
              cvcHandler={cvcChangeHandler}
              submitHandler={submitHandler}
            ></Form>
          </section>
        </main>

        <Footer></Footer>
      </div>
    );
  }
};

export default Main;
