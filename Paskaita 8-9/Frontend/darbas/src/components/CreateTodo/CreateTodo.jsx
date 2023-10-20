import React, { useState } from "react";
import axios from "axios";

const HOST = "http://localhost:3000/todos";

export default function CreateTodo({ setTodos }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(HOST, { name, description });
      setTodos((prev) => [...prev, data]);
      setName("");
      setDescription("");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="NameInput">Name</label>
      <input
        type="text"
        id="NameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="DescriptionInput">Description</label>
      <input
        type="text"
        id="DescriptionInput"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
