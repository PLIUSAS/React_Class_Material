import React from "react";
import style from "./CardRenderer.module.css";

export default function CardRenderer({ data }) {
  return (
    <div>
      <div key={data.id} className={style.card}>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
      ;
    </div>
  );
}
