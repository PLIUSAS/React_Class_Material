// patikrinkit index.js src folderi
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import Login from "./components/Login/Login";
import SPA from "./components/SPA/SPA";
import SPAS from "./components/SPAS/SPAS";
import Pagrindinis from "./components/Pagrindinis/Pagrindinis";
import Apiemus from "./components/Apiemus/Apiemus";
import Naujienos from "./components/Naujienos/Naujienos";
import Paslaugos from "./components/Paslaugos/Paslaugos";
import AtliktiDarbai from "./components/AtliktiDarbai/AtliktiDarbai";
import Kontaktai from "./components/Kontaktai/Kontaktai";
function App() {
  return (
    <div>
      <SPA />
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
        <Route path="/Pagrindinis" element={<Pagrindinis />} />
        <Route path="/Apiemus" element={<Apiemus />} />
        <Route path="/Naujienos" element={<Naujienos />} />
        <Route path="/Paslaugos" element={<Paslaugos />} />
        <Route path="/AtliktiDarbai" element={<AtliktiDarbai />} />
        <Route path="/Kontaktai" element={<Kontaktai />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} /> */}
      </Routes>
      <SPAS />
    </div>
  );
}
// http://localhost:3000/about - path="/about"
export default App;
