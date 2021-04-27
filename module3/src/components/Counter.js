import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <>
      <h1>Counter App demonstrating state/hooks</h1>
      <h2>Current value of counter is {count}</h2>
      <button onClick={() => setcount(count + 1)}>increment</button>
      <button onClick={() => setcount(count <= 0 ? 0 : count - 1)}>
        decrement
      </button>
    </>
  );
};

export default Counter;
