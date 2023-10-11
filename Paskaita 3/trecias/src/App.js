import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import PraktinisDarbas from "./components/PraktinisDarbas.js/PraktinisDarbas";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <ColorPicker />
      <Button text={"Add one"} onClick={() => setNumber((prev) => prev + 1)} />
      <Display number={number} />
      <Button
        text={"Subtract one"}
        onClick={() => setNumber((prev) => prev - 1)}
      />

      <PraktinisDarbas />
    </div>
  );
}

export default App;
