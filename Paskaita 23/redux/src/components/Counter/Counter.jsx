import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux/counter/counterSlice";

export default function Counter() {
  const [inputValue, setInputValue] = useState(0);
  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  console.log(counter);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Add 10</button>
      <button onClick={() => dispatch(incrementByAmount(+inputValue))}>
        Add
      </button>
      <br />
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
