import React, { useState } from "react";
import "./PraktinisDarbas.css";

export default function PraktinisDarbas() {
  const [buttonText, setButtonText] = useState("Click Me");
  function handleClick() {
    setButtonText("Laimingas");
  }
  const [buttonsText, setButtonTexts] = useState("Click Me");
  function handleClicke() {
    setButtonTexts("Liūdnas");
  }
  const [button, setButtontext] = useState("Click Me");
  function Click() {
    setButtontext("Piktas");
  }
  return (
    <div className="PraktinisDarbas">
      <button onClick={handleClick}>{buttonText}</button>
      <button onClick={handleClicke}>{buttonsText}</button>
      <button onClick={Click}>{button}</button>
    </div>
  );
}
