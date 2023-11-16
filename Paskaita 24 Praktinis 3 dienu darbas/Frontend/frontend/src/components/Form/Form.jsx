import React from "react";
import Button from "../Button/Button";
import style from "./Form.module.css";

export default function Form() {
  return (
    <div className={style.Form}>
      <label htmlFor="name">Name</label> <br />
      <div className={style.input}>
        <i class="icon fas fa-user"></i>
        <input type="text" id="name" placeholder="Vardenis Pavardenis" />
      </div>
      <br />
      <label htmlFor="email">Email</label> <br />
      <div className={style.input}>
        <i class="icon fas fa-envelope"></i>
        <input type="text" id="email" placeholder="abc@gmail.com" />
      </div>
      <br />
      <label htmlFor="password">Password</label> <br />
      <div className={style.input}>
        <i class="icon fas fa-lock"></i>
        <input type="password" id="password" placeholder="***********" />
      </div>
      <br />
      <Button text={"Submit"} />
    </div>
  );
}
