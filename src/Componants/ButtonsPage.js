import React from "react";
import money from "../assets/media/2812114_bank_cash_coin_dollar_money_icon.png";
import "../assets/css/Style.css";
const ButtonsPage = ({ count, handleDouble, handleTriple, handleButton }) => {
  return (
    <div>
      <div className="container">
        <h2>money collected {count}$</h2>
        <div onClick={handleButton} className="dollar-sign">
          <img src={money} className="img" alt="money" />
        </div>
      </div>
      <div className="upgrade">
        <div className="upgrade1">
          {count >= 10 ? (
            <button onClick={handleDouble}>double point</button>
          ) : null}
          {count >= 50 ? (
            <button onClick={handleTriple}>Triple the amount !</button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
