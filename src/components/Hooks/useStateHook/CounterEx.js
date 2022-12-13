import React from "react";
/* This is example to show why we need useState */

export const CounterEx = () => {
  let count = 0;
  const incrementHandler = () => {
    count = count + 1;
    console.log(count);
  };
  const decrementHandler = () => {
    count--;
    console.log(count);
  };
  return (
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <h3>{count}</h3>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};
