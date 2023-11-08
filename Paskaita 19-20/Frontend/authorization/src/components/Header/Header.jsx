import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function logoutHandler() {
    localStorage.removeItem("Token");
    navigate("/login");
  }

  return (
    <header>
      <h1>Paskaita 19-20</h1>
      <Link to={""}>Home</Link>

      {localStorage.getItem("Token") !== null ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <>
          <Link to={"/Register"}>Register</Link>
          <Link to={"/Login"}>Login</Link>
        </>
      )}
    </header>
  );
}
