import React from "react";

const Bank = () => {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(count + 1);
  };
  let changeCount = (e) => {
    setCount(e.target.value);
  };

  return (
    <div>
      {" "}
      <div class="bank">
        <h1>
          <img src={bank} class="bankImg" /> X{count}$
        </h1>
      </div>
    </div>
  );
};

export default Bank;
