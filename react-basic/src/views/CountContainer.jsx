import React, { useState } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    const result = count + 1;
    setCount(result);
  };

  const reduce = () => {
    const result = count - 1;
    setCount(result);
  };

  return (
    <div>
      <h2>Contador {count}</h2>
      <button onClick={add}>Suma</button>
      <button onClick={reduce}>Resta</button>
    </div>
  );
};

export default CountComponent;
