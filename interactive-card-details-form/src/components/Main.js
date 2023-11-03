import React from "react";
import Footer from "./Footer/Footer";
import CardBack from "./Card/CardBack";
import "../components/sass/main.scss";
import CardFront from "./Card/CardFront";

const Main = (props) => {
  return (
    <div className="Main">
      <CardBack value="000"></CardBack>
      <CardFront
        number="0000 0000 0000 0000"
        name="Jane Appleseed"
        date="00/00"
      ></CardFront>

      <form className="form">
        <div>
          <label className="from--label">Cardholder Name</label>
          <input
            className="from--input"
            type="text"
            placeholder="e.g. JaneAppleseed"
          ></input>
        </div>
        <div>
          <label className="from--label">Card Number</label>
          <input
            className="from--input"
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
          ></input>
        </div>
        <div>
          <div>
            <label className="from--label">Exp. Date (MM/YY)</label>
            <input className="from--input" type="date" placeholder="MM"></input>
            <input className="from--input" type="date" placeholder="YY"></input>
          </div>
          <div>
            <label className="from--label">CVC</label>
            <input
              className="from--input"
              type="date"
              placeholder="e.g. 123 "
            ></input>
          </div>
        </div>
        <button className="form--button">Confirm</button>
      </form>

      
      <Footer></Footer>
    </div>
  );
};

export default Main;
