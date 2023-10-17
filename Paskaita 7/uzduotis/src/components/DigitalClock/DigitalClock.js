import React, { useState, useRef, useEffect } from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  const timeRef = useRef(null);

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeRef.current.innerText = timeString;
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="digital-clock">
      <span ref={timeRef}></span>
    </div>
  );
};

export default DigitalClock;
