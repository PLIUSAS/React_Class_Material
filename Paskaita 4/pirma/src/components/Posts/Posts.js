import React, { useState } from "react";

export default function Posts({ body, title }) {
  return (
    <div>
      <h3>Title: {title}</h3>
      <h4>Body: {body}</h4>
    </div>
  );
}
