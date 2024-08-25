import React, { useState } from "react";
import ButtonsPage from "./ButtonsPage";
import Bank from "./Bank";
import coinSound from "../assets/media/coin.mp3"; // Import your sound file

const Home = () => {
  const [count, setCount] = useState(0); // ----->Holds the total money collected
  const [piggyBank, setPiggyBank] = useState(0); // ---->Holds the money in the piggy bank
  const [double, setDouble] = useState(false); // ----->Tracks whether double is activated
  const [triple, setTriple] = useState(false); // ---->Tracks whether triple is activated

  //for piggy bank
  const handleDouble = () => {
    if (piggyBank >= 5) {
      setDouble(true);
      setPiggyBank(piggyBank - 5);
    } else {
      alert("Not enough money in the piggy bank for double points!");
    }
  };

  const handleTriple = () => {
    if (piggyBank >= 15) {
      setTriple(true); // Activate triple points
      setPiggyBank(piggyBank - 15); // Decrease piggy bank by 35
    } else {
      alert("Not enough money in the piggy bank for triple points!");
    }
  };

  const handleButton = () => {
    const audio = new Audio(coinSound);
    audio.play();

    // Increment count based on double/triple state
    if (triple) {
      setCount(count + 3);
      setPiggyBank(piggyBank + 3); // Also add the amount to the piggy bank
    } else if (double) {
      setCount(count + 2);
      setPiggyBank(piggyBank + 2); // Also add the amount to the piggy bank
    } else {
      setCount(count + 1);
      setPiggyBank(piggyBank + 1); // Also add the amount to the piggy bank
    }
  };

  return (
    <div>
      <Bank count={piggyBank} /> {/* Display the piggy bank value */}
      <ButtonsPage
        count={count} // Passes the total money collected
        handleButton={handleButton} // Handle the money image click
        handleDouble={handleDouble} // Handle double point click
        handleTriple={handleTriple} // Handle triple point click
        double={double}
        triple={triple}
      />
    </div>
  );
};

export default Home;
