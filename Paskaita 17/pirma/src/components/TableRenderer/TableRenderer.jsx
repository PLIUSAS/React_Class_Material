import React from "react";
import DataFetcher1 from "../DataFetcher1/DataFetcher1";

export default function TableRenderer({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.title}</td>
        </tr>
      </tbody>
    </table>
  );
}
