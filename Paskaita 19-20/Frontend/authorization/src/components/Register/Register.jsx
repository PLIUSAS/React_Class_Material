import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import axios from "axios";

const registerEndpoint = "http://localhost:3001/register";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const { data } = axios.post(registerEndpoint, {
        username,
        password,
      });
      alert("Sekmingai prisiregistravote");
    } catch (error) {
      alert("Kazkas negerai");
    }
  }
  return (
    <div>
      <form onSubmit={handleRegister}>
        <FormInput
          id={"username"}
          text={"Username"}
          type={"text"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          id={"password"}
          text={"Password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
