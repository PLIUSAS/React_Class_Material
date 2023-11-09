import React from "react";
import { useWindowMeasurements } from "../../hooks/useWindowMeasurements";

export default function Measurements() {
  const { height, width } = useWindowMeasurements();
  return (
    <div>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
}
