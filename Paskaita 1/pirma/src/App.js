import logo from "./logo.svg";
import "./App.css";
import PirmasKomponentas from "./components/PirmasKomponentas/PirmasKomponentas";
import AntrasKomponentas from "./components/AntrasKomponentas/AntrasKomponentas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PirmasKomponentas />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AntrasKomponentas />
          <h1>Labas</h1>
          <PirmasKomponentas />
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
