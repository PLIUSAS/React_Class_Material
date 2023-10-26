import React from "react";

export default function StudentItem({ student }) {
  return (
    <div>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  );
}
