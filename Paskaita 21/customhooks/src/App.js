import "./App.css";
import AddTwoNumbers from "./components/AddTwoNumbers/AddTwoNumbers";
import Measurements from "./components/Measurements/Measurements";
import ManoVariantas from "./components/ManoVariantas/ManoVariantas";
import PagalUzduoti from "./components/PagalUzduoti/PagalUzduoti";

function App() {
  return (
    <div>
      <Measurements />
      <AddTwoNumbers />
      <ManoVariantas />
      <PagalUzduoti />
    </div>
  );
}

export default App;
