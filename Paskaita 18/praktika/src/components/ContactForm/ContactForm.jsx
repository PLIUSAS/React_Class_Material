import React from "react";
import TextInput from "../TextInput/TextInput";
import Label from "../Label/Label";
import styles from "./ContactForm.module.css";
import Checkbox from "../Checkbox/Checkbox";

export default function ContactForm() {
  return (
    <div className={styles.container}>
      <Label text={"Name"} />
      <TextInput width="22%" />
      <Label text={"Username"} />
      <TextInput />
      <Label text={"Email"} />
      <TextInput />
      <Label text={"Subject"} />
      <TextInput />
      <Label text={"Message"} />
      <textarea
        name="Message"
        id="Message"
        cols="50"
        rows="8"
        placeholder="Message"
      ></textarea>
      <br />
      <p>
        <span>
          <Checkbox />
        </span>
        I agree to the <span className={styles.blue}>terms and conditions</span>
      </p>
      <input type="radio" />
      <label htmlFor="text" className={styles.normal}>
        Yes
      </label>
      <input type="radio" />
      <label htmlFor="text" className={styles.normal}>
        No
      </label>
      <br />
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}
