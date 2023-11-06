import React from "react";
import TextInput from "../TextInput/TextInput";
import Label from "../Label/Label";

export default function ContactForm() {
  return (
    <div>
      <Label text={"Name"} />
      <TextInput />
      <Label text={"Username"} />
      <TextInput />
      <Label text={"Email"} />
      <Label text={"Subject"} />
      <input type="text" />
      <Label text={"Message"} />
      <textarea
        name="Message"
        id="Message"
        cols="50"
        rows="8"
        placeholder="Message"
      ></textarea>
      <br />
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}
