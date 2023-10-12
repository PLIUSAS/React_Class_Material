import React, { useState } from "react";

export default function Comments({ name, body }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Body: {body}</h3>
    </div>
  );
}
