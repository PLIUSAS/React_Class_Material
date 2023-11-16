import React from "react";
import Form from "../Form/Form";
import style from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  return (
    <section className={style.RegistrationForm}>
      <h2>Get Started</h2>
      <h5>You have an account?</h5>
      <h6>
        <a href="#">sing in</a>
      </h6>
      <button className={style.button}>
        <span>
          <img
            src="https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png"
            alt="Google Logo"
          />
        </span>
        sing up
      </button>
      <button className={style.button1}>
        <span>
          <i class="fa-brands fa-facebook"></i>
        </span>
        sing up
      </button>
      <p>Or</p>
      <Form />
    </section>
  );
}
