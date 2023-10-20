import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import Todos from "./components/Todos/Todos";

const ENDPOINT = "http://localhost:3000/todos";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        setTodos(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div>
      <CreateTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
