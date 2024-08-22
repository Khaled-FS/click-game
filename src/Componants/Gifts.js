import React from "react";

const Gifts = () => {
  const [counter, setCounter] = useState(false);

  const handleBank = () => {
    setCounter(counter + 1);
    if (counter == 100) {
      return counter + 2;
    } else if (counter == 150) {
      return counter + 3;
    }
  };

  return <div>Gifts</div>;
};

export default Gifts;
