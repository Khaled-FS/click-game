import React from "react";
import money from "../assets/media/2812114_bank_cash_coin_dollar_money_icon.png";
import "../assets/css/Style.css";
import { useState } from "react";
import bank from "../assets/media/7007517_piggy_money_business_finance_bank_icon.png";

const TextsPage = () => {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(count + 1);
  };
  let changeCount = (e) => {
    setCount(e.target.value);
  };

  const [counter, setCounter] = useState(false);

  const handleBank = () => {
    setCounter((counter) => counter + 2);
    if (counter >= 50) setCounter(true);
  };
  // const point = (counter = count * 2);

  console.log(counter);
  let changeCounter = (e) => {
    setCounter(e.target.value);
  };

  console.log(count);
  return (
    <div>
      <div className="bank">
        <h1>
          <img src={bank} className="bankImg" /> X{count}$
        </h1>
      </div>
      <div className="container">
        <h2>money collected {count}$</h2>
        <button onClick={handleButton}>
          <img src={money} className="img" />
        </button>
        <button onClick={handleBank} disabled={counter < 100}>
          double point
        </button>
        <p>1$ for one click</p>
      </div>
    </div>
  );
};

export default TextsPage;
