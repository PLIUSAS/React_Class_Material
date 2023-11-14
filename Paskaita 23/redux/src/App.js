import React, { useEffect } from "react";
import Counter from "./components/Counter/Counter";
import Todo from "./components/Todo/Todo";
import { useDispatch } from "react-redux";
import { getTodosAsync } from "./redux/todos/todosSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, []);
  return (
    <div>
      <Counter />
      <Todo />
    </div>
  );
}
