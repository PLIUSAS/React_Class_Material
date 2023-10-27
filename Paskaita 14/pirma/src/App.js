import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(true);

  function handleButton() {
    setIsModalOpen((prev) => !prev);
  }
  return (
    <div>
      <button onClick={handleButton}>Open</button>
      <Modal
        isOpen={isModalOpen}
        request={() => console.log("Request to DB")}
        title={"Kazkas"}
        onClose={() => setIsModalOpen(false)}
      >
        <h1>This is a child</h1>
        <p>asdf</p>
      </Modal>

      <Modal
        open={isSecondModalOpen}
        title={"Antras modalas"}
        onClose={() => {
          setIsSecondModalOpen(false);
          setIsModalOpen(true);
        }}
      >
        <p>This is another modal</p>
        <input type="text" />
        <button onClick={() => console.log("I am submitting")}>Submit</button>
      </Modal>
    </div>
  );
}

export default App;
