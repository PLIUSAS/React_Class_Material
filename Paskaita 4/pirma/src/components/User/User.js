import React, { useState } from "react";

export default function User({ name, city, street, phone }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>City: {city}</h2>
      <h2>Street: {street}</h2>
      <h2>Phone: {phone}</h2>
      <hr />
    </div>
  );
}
