// npx create-react-app
import logo from "./logo.svg";
import "./App.css";
import PirmasKomponentas from "./components/PirmasKomponentas/PirmasKomponentas";
import AntrasKomponentas from "./components/AntrasKomponentas/AntrasKomponentas";
import TreciasKomponentas from "./components/TreciasKomponentas/TreciasKomponentas";

function App() {
  return (
    <div className="App">
      <div>
        <PirmasKomponentas />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <div>
        <TreciasKomponentas />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
