import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const loginEndpoint = "http://localhost:3001/login";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(loginEndpoint, {
        username,
        password,
      });
      localStorage.setItem("Token", data.token);
      navigate("/");

      alert("Sekmingai prisijungete");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <FormInput
          id={"loginUsername"}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          text={"Username"}
          type={"text"}
        />
        <FormInput
          id={"loginPassword"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          text={"Password"}
          type={"password"}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
