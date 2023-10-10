import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Title</h1>
      </div>
      <h4>Some about text</h4>
      <h4>in two lines</h4>
      <button>Button</button>
    </header>
  );
}
