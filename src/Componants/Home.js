import React, { useState } from "react";
import ButtonsPage from "./ButtonsPage";
import Bank from "./Bank";

const Home = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(false);
  const [triple, setTriple] = useState(false);
  //   const [decrease, setDecrease] = useState(false);
  let changeCount = (e) => {
    setCount(e.target.value);
  };

  const handleDouble = () => {
    setDouble(true);
  };

  const handleButton = () => {
    if (triple == true) {
      setCount(count + 3);
    } else if (double == true) {
      setCount(count + 2);
    } else {
      setCount(count + 1);
    }
  };
  const handleTriple = () => {
    setTriple(true);
  };

  console.log(double);
  let changeDouble = (e) => {
    setDouble(e.target.value);
  };

  console.log(count);

  return (
    <div>
      <Bank count={count} />
      <ButtonsPage
        count={count}
        handleButton={() => handleButton()}
        handleDouble={() => handleDouble()}
        handleTriple={() => handleTriple()}
      />
    </div>
  );
};

export default Home;
