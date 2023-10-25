import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Input from "./components/Input/Input";

function App() {
  const [pokemon, setPokemon] = useState({});
  return (
    <div>
      <Input setPokemon={setPokemon} />
      <Display pokemon={pokemon} />
    </div>
  );
}

export default App;
