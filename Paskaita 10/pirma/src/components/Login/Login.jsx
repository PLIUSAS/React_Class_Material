import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  });

  async function loginButton() {
    axios
      .post("http://localhost:3001/login", {
        username: userName,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", "123");
        navigate("/home");
      })
      .catch((err) => alert("username and password do not match"));
  }
  return (
    <div>
      <label htmlFor="userName">Username</label> <br />
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label> <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit" onClick={loginButton}>
        Log in
      </button>
    </div>
  );
}
