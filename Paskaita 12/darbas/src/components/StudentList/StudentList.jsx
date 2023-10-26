import React, { useState, useMemo } from "react";
import StudentItem from "../StudentItem/StudentItem";

export default function StudentList() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alice",
      age: 20,
    },
    {
      id: 2,
      name: "Bob",
      age: 21,
    },
    {
      id: 3,
      name: "Charlie",
      age: 30,
    },
    {
      id: 4,
      name: "Dave",
      age: 40,
    },
    {
      id: 5,
      name: "Eve",
      age: 50,
    },
    {
      id: 6,
      name: "Frank",
      age: 60,
    },
    {
      id: 7,
      name: "Grace",
      age: 70,
    },
    {
      id: 8,
      name: "Henry",
      age: 80,
    },
    {
      id: 9,
      name: "Ivy",
      age: 90,
    },
    {
      id: 10,
      name: "Jack",
      age: 100,
    },
  ]);

  const renderStudentList = () => {
    return students.map((student) => (
      <StudentItem key={student.id} student={student} />
    ));
  };

  const memoizedStudentList = useMemo(() => renderStudentList(), [students]);

  const shuffleStudents = () => {
    const shuffledStudents = [...students];
    for (let i = shuffledStudents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledStudents[i], shuffledStudents[j]] = [
        shuffledStudents[j],
        shuffledStudents[i],
      ];
    }
    setStudents(shuffledStudents);
  };

  return (
    <div>
      <h2>Student List</h2>
      <button onClick={shuffleStudents}>Shuffle Students</button>

      {memoizedStudentList}
    </div>
  );
}
