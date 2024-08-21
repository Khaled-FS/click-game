import React from "react";
import money from "../assets/media/money png.jpg";
import "../assets/css/Style.css";
import { useState } from "react";
import bank from "../assets/media/image.png";

const TextsPage = () => {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(count + 1);
  };
  let changeCount = (e) => {
    setCount(e.target.value);
  };

  // const [counter, setCounter] = useState(100);

  // const handleBank = () => {
  //   setCounter(counter + 1);
  //   if (counter == 100) {
  //     return counter + 2;
  //   } else if (counter == 150) {
  //     return counter + 3;
  //   }
  // };
  // console.log(counter);
  let changeCounter = (e) => {
    setCount(e.target.value);
  };
  console.log(count);
  return (
    <div>
      <div class="bank">
        <h1>
          <img src={bank} class="bankImg" /> X{count}$
        </h1>
      </div>
      <div class="container">
        <h2>money collected {count}$</h2>
        <button onClick={handleButton}>
          <img src={money} class="img" />
        </button>
      </div>
    </div>
  );
};

export default TextsPage;
