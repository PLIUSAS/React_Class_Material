import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, request, children, title, onClose }) {
  if (!isOpen) {
    return null;
  }
  request();
  return createPortal(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <h4>{title}</h4>
        </div>
        {children}
        <div className={styles.footerContainer}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
