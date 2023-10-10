import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-qBFIHc9O_xk4AzMw4BtN253FJd95eu0QU30uYZcxS5V-x5ZR6jWt8Jsdsfkz1A8hag&usqp=CAU"
        alt="logo"
      />
      <nav>
        <a href="#Home">Home</a>
        <a href="#Contacts">Contacts</a>
        <a href="#Products">Products</a>
      </nav>
    </header>
  );
}
