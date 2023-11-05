import { useRef } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import HoverableButton from "./components/HoverableButton/HoverableButton";

function App() {
  const buttonRef = useRef(null);
  return (
    <div>
      <Form />

      <h1>Mygtuko pavyzdys</h1>
      <HoverableButton ref={buttonRef}>Pele užveskite čia</HoverableButton>
    </div>
  );
}

export default App;
