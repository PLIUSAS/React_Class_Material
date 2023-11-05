import React from "react";

export default function ListRenderer({ data }) {
  return (
    <ul>
      <li key={data.id}>{data.title}</li>
    </ul>
  );
}
