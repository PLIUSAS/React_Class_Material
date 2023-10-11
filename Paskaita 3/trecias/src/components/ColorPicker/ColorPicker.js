import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("green")}>green</button>
      <div style={{ backgroundColor: color }}>Hello</div>
    </div>
  );
}
