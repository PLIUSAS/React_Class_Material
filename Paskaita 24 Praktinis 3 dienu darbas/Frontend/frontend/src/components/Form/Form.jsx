import React from "react";
import Button from "../SingButton/Button";
import style from "./Form.module.css";

export default function Form() {
  return (
    <div className={style.Form}>
      <label htmlFor="name">Name</label> <br />
      <div className={style.input}>
        <i class="icon fas fa-user"></i>
        <input
          type="text"
          id="name"
          required
          minLength={6}
          maxLength={32}
          placeholder="Vardenis Pavardenis"
        />
      </div>
      <br />
      <label htmlFor="email">Email</label> <br />
      <div className={style.input}>
        <i class="icon fas fa-envelope"></i>
        <input
          type="text"
          id="email"
          required
          minLength={6}
          maxLength={50}
          placeholder="abc@gmail.com"
        />
      </div>
      <br />
      <label htmlFor="password">Password</label> <br />
      <div className={style.input}>
        <i class="icon fas fa-lock"></i>
        <input
          type="password"
          id="password"
          required
          minLength={6}
          maxLength={32}
          placeholder="***********"
        />
      </div>
      <br />
      <Button text={"Submit"} />
    </div>
  );
}
