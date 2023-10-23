import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  function buttonHandler() {
    navigate("/contacts"); // iškviečiam ir skliausteliuose paduodam routa į kuri norim nueit.
  }
  return (
    <div>
      <button onClick={buttonHandler}>Go to Contacts</button>
    </div>
  );
}
