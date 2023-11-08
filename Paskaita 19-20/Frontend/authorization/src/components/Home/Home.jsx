import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userEndpoint = "http://localhost:3001/users";

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(userEndpoint, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then(({ data }) => {
        setUsers(data.users);
      })
      .catch((error) => alert(error.message));
  }, []);

  if (localStorage.getItem("Token") === null) {
    return navigate("/login");
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <p>Name: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      ))}
    </div>
  );
}
