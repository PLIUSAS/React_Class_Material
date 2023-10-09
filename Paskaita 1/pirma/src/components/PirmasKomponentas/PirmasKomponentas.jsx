import React from "react";
import "./PirmasKomponentas.css";
import AntrasKomponentas from "../AntrasKomponentas/AntrasKomponentas";

export default function PirmasKomponentas() {
  return (
    <header>
      <div>
        <button type="#Home">Home</button>
        <button type="#Information">Information</button>
        <button type="#Contact">Contact</button>
      </div>

      <AntrasKomponentas />
    </header>
  );
}
