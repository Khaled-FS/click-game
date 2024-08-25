import React from "react";
import money from "../assets/media/2812114_bank_cash_coin_dollar_money_icon.png";
import "../assets/css/Style.css";

const ButtonsPage = ({
  count,
  handleDouble,
  handleTriple,
  handleButton,
  double,
  triple,
}) => {
  return (
    <div>
      <div className="container">
        <h2>money collected {count}$</h2>
        {/* { Play sound and increment count when the money image is clicked /} */}
        <div onClick={handleButton} className="dollar-sign">
          <img src={money} className="img" alt="money" />
        </div>
      </div>
      <div className="upgrade">
        <div className="upgrade1">
          {/* {/ Conditionally render the "Double point" button /} */}
          {count >= 2 && !double ? (
            <button className="upgrade-point-button" onClick={handleDouble}>
              Double point
            </button>
          ) : null}
          {/* {/ Conditionally render the "Triple the amount!" button */}
          {count >= 10 && !triple ? (
            <button className="upgrade-point-button" onClick={handleTriple}>
              Triple the amount!
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
