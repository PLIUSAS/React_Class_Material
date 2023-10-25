import React from "react";

export default function StudentList({ student }) {
  return (
    <div>
      <h2>Student List</h2>
      <button>Submit</button>
      <div>
        <h4>ID:</h4>
        <h4>Name:</h4>
        <h5>Age</h5>
      </div>
    </div>
  );
}
