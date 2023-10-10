import styles from "./Button.module.css";
import React from "react"; // rfc

export default function Button({ text = "Default text", onClick, className }) {
  return (
    // <button className={className} onClick={onClick}>
    <button className={styles.bacground} onClick={onClick}>
      {text}
    </button>
  );
}
