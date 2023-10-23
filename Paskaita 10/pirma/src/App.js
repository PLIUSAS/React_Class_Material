// patikrinkit index.js src folderi
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import Login from "./components/Login/Login";
function App() {
  return (
    <div>
      {/* <header>
        <Link to={"/about"}>About</Link> <br />
        <Link to={"/contacts"}>Contacts</Link> <br />
        <Link to={"/home"}>Home</Link>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        ,<Route path="/contacts" element={<Contacts />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={"Nerasta"} />
        <Route path="user/:id" element={<User />} />
      </Routes>
      <footer>Cia yra footeris</footer> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
// http://localhost:3000/about - path="/about"
export default App;
