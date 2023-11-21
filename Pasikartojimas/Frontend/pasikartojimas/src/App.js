import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import EditProduct from "./components/EditProduct/EditProduct";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("create")}>Registruotis</button>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="create" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
