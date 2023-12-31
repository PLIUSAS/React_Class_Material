import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import User from "./components/User/User";
import Website from "./components/Website/Website";
import { createContext } from "react";

const userEndpoint = "https://jsonplaceholder.typicode.com/users/1";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(userEndpoint)
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <User />
        <Website />
      </userContext.Provider>
    </div>
  );
}

export default App;
