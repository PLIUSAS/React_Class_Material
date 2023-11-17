import React from "react";
import { createPortal } from "react-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import styles from "./Modal.module.css";

export default function Modal({ open, setOpen }) {
  if (!open) {
    return null;
  }
  return createPortal(
    <div className={styles.modal} open={open} setOpen={setOpen}>
      <RegistrationForm open={open} setOpen={setOpen} />
    </div>,
    document.body
  );
}
