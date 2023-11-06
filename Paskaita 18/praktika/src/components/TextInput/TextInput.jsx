import React, { useState } from "react";

export default function TextInput() {
  const [input, setInput] = useState("");
  if (input.length < 5) {
  }
  return (
    <div>
      <input
        minLength={5}
        maxLength={20}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Text Input"
        required
      />
    </div>
  );
}
