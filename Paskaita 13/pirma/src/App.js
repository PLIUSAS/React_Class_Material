import "./App.css";
import { Routes, Route } from "react-router-dom";
import PostList from "./components/PostList/PostList";
import PostPage from "./components/PostPage/PostPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/postList" element={<PostList />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
