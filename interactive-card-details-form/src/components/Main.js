import React from "react";
import Footer from "./Footer/Footer";
import CardBack from "./Card/CardBack";
import "../components/sass/main.scss";
import CardFront from "./Card/CardFront";
import Card from "./Card/Card";
import Form from "./Form";

const Main = (props) => {
  return (
    <div className="Main">
      <main>
        <section>
          <Card className="card--Holder">
            <CardBack value="000"></CardBack>
            <CardFront
              number="0000 0000 0000 0000"
              name="Jane Appleseed"
              MM="00"
              YY="00"
            ></CardFront>
          </Card>
          <Form></Form>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Main;
