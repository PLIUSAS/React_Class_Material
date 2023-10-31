import React, { forwardRef } from "react";

function Input({ text }, ref) {
  return (
    <div>
      <>
        <label htmlFor="">{text}</label>
        <input type="text" ref={ref} />
      </>
    </div>
  );
}

export default forwardRef(Input);
