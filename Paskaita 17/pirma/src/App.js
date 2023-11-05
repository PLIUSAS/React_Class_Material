import "./App.css";
import DataFetcher from "./components/DataFetcher/DataFetcher";
import DataFetcher1 from "./components/DataFetcher1/DataFetcher1";
import TodoVariant1 from "./components/TodoVariant1/TodoVariant1";
import TodoVariant2 from "./components/TodoVariant2/TodoVariant2";
import ListRenderer from "./components/ListRenderer/ListRenderer";
import TableRenderer from "./components/TableRenderer/TableRenderer";
import CardRenderer from "./components/CardRenderer/CardRenderer";

function App() {
  return (
    <div>
      <DataFetcher render={(data) => <TodoVariant1 data={data} />} />

      <DataFetcher render={(data) => <TodoVariant2 data={data} />} />

      <h1>List Renderer:</h1>
      <DataFetcher1 render={(data) => <ListRenderer data={data} />} />
      <h1>Table Renderer:</h1>
      <DataFetcher1 render={(data) => <TableRenderer data={data} />} />
      <h1>Card Renderer:</h1>
      <DataFetcher1 render={(data) => <CardRenderer data={data} />} />
    </div>
  );
}

export default App;
