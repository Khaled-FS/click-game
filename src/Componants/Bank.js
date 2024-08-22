import React from "react";
import bank from "../assets/media/7007517_piggy_money_business_finance_bank_icon.png";

const Bank = ({ count }) => {
  return (
    <div>
      <h3 className="title1">stuff the piggy</h3>
      <div className="bank">
        <img src={bank} className="bankImg" />
        <h1>X{count}$</h1>
      </div>
    </div>
  );
};

export default Bank;
