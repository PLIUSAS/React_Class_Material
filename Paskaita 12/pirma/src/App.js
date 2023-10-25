import { useMemo, useCallback, useState, useEffect } from "react";
import "./App.css";
import PicturesList from "./components/PicturesList/PicturesList";

// useCallBack yra „React Hook“, leidžiantis issaugo funkcija ar kazka atmintyje
// useMemo yra „React Hook“, leidžiantis talpykloje išsaugoti skaičiavimo rezultatą tarp pakartotinio pateikimo.

function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(1);

  const chashedValue = useMemo(() => {
    let x = 0;
    for (let i = 0; i < 999999; i++) {
      x++;
    }
    return x + number2;
  }, [number2]);

  const cashedFunction = useCallback(() => {
    console.log("cashedFunction");
  }, []);

  const notCashedFunction = () => {
    console.log("notCashedFunction");
  };

  useEffect(() => {
    console.log("useEffect");
  }, [notCashedFunction]);

  cashedFunction();
  return (
    <div>
      <PicturesList />
      {chashedValue}
      <button onClick={() => setNumber((prev) => ++prev)}>Calculate</button>
      <button onClick={() => setNumber2((prev) => ++prev)}>
        This makes recalculations
      </button>
      {number2}
      {number}
    </div>
  );
}

export default App;
