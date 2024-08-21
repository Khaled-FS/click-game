import React from "react";
import money from "../assets/media/money-42.png";
import "../assets/css/Style.css";
import { useState } from "react";

const TextsPage = () => {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(count + 1);
  };
  const changeCount = (e) => {
    setCount(e.target.value);
  };
  console.log(count);
  return (
    <div>
      <div class="container">
        <h1>money collected {count}$</h1>
        <button onClick={handleButton}>
          <img src={money} class="img" />
        </button>
        <h2></h2>
      </div>
    </div>
  );
};

export default TextsPage;
