import { useState } from "react";
import "./App.css";
import StudentItem from "./components/StudentItem/StudentItem";
import StudentList from "./components/StudentList/StudentList";

function App() {
  const [student, setStudent] = useState([]);
  return (
    <div>
      <StudentList student={student} />
      <StudentItem setStudent={setStudent} />
    </div>
  );
}

export default App;
