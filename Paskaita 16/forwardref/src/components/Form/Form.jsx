import React, { useRef } from "react";
import Input from "../Input/Input";

export default function Form() {
  const inputRef = useRef();
  const inputRef2 = useRef();
  function handleButton() {
    inputRef.current.focus();
  }
  function handleButton2() {
    inputRef2.current.focus();
  }

  return (
    <div>
      <input type="text" />
      <Input text={"input komponentas"} ref={inputRef} /> <br />
      <Input text={"input komponentas"} ref={inputRef2} /> <br />
      <Input text={"input komponentas"} /> <br />
      <Input text={"input komponentas"} /> <br />
      <button onClick={handleButton}>Focus</button>
      <button onClick={handleButton2}>Focus 2</button>
    </div>
  );
}
