import React from "react";
import "./App.css";
import DigitalClock from "./components/DigitalClock/DigitalClock";
// Užduotis: //
//Sukurkite „React“ komponentą, rodantį dabartinį laiką skaitmeniniame laikrodyje. Laikrodis turi atnaujinti laiką kas sekundę.//
function App() {
  return (
    <div>
      <h1>Digital Clock</h1>
      <DigitalClock />
    </div>
  );
}

export default App;
