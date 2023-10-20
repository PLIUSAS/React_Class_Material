import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          name={todo.name}
          description={todo.description}
          key={todo._id}
          id={todo._id}
          setTodos={setTodos}
          isFinished={todo.isFinished}
        />
      ))}
    </div>
  );
}
