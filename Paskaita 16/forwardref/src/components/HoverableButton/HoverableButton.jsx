import React, { useEffect, forwardRef } from "react";

const HoverableButton = forwardRef((props, ref) => {
  useEffect(() => {
    const button = ref.current;

    const handleMouseOver = () => {
      console.log("Mouse is over the button!");
      button.style.backgroundColor = "red";
    };

    button.addEventListener("mouseover", handleMouseOver);

    return () => {
      button.removeEventListener("mouseover", handleMouseOver);
    };
  }, [ref]);

  return <button ref={ref}>{props.children}</button>;
});

export default HoverableButton;
