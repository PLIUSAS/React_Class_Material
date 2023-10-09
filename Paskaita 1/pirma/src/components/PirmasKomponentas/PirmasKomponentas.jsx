import React from "react";
import AntrasKomponentas from "../AntrasKomponentas/AntrasKomponentas";

export default function PirmasKomponentas() {
  let age = 20;

  function handleClick() {
    age++;
    console.log(age);
  }

  return (
    <div>
      <h1>{age + 10}</h1>
      <AntrasKomponentas />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
