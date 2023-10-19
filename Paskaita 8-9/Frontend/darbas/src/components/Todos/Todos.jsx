import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Todos.css";

const ENDPOINT = "http://localhost:3000/todos";
export default function Todos() {
  const [todo, setTodos] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const [descriptionInput, setDescriptionInput] = useState("");
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);

  useEffect(() => {
    axios
      .get(ENDPOINT)
      .then(({ data }) => {
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (nameInput.length === 0 || nameInput.length > 10) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  }, [nameInput]);
  useEffect(() => {
    if (descriptionInput.length === 0 || descriptionInput.length > 15) {
      setIsDescriptionValid(false);
    } else {
      setIsDescriptionValid(true);
    }
  }, [descriptionInput]);

  async function handleSubmit() {
    if (isNameValid && isDescriptionValid) {
      try {
        await axios.post(ENDPOINT, {
          name: nameInput,
          description: descriptionInput,
        });
        getTodos();
        setNameInput("");
        setDescriptionInput("");
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  }

  const getTodos = async () => {
    const response = await axios.get(ENDPOINT);
    setTodos(response.data);
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="">
          <b>Name</b>
        </label>
        <br />
        {!isNameValid && <p>Name not valid</p>}
        <input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          type="text"
        />
        <br />
        <label htmlFor="">
          <b>Description</b>
        </label>{" "}
        <br />
        {!isDescriptionValid && <p>Description not valid</p>}
        <input
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
          type="text"
        />
        <br />
        <button
          disabled={!isNameValid || !isDescriptionValid}
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
      <button>One Todos</button>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((todo) => (
            <tr key={todo.id}>
              <th>{todo.name}</th>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
