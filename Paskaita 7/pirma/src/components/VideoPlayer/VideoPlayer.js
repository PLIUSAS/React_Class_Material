import React, { useRef, useState } from "react";

export default function VideoPlayer() {
  const [timeInput, setTimeInput] = useState(0);
  const videoRef = useRef();
  const rangeRef = useRef();

  function playButton() {
    videoRef.current.play();
  }

  function pauseButton() {
    videoRef.current.pause();
  }
  function handleRangeChange(e) {
    videoRef.current.currentTime = e.target.value;
  }
  return (
    <div>
      <video ref={videoRef} width={600} height={300}>
        <source src="/test.mp4" type="video/mp4" />
      </video>
      <br />
      <input
        min={0}
        max={videoRef.current.duration}
        type="range"
        ref={rangeRef}
        onChange={handleRangeChange}
      />
      <button onClick={playButton}>Play</button>
      <button onClick={pauseButton}>Pause</button>
      <input
        type="number"
        onChange={(e) => {
          videoRef.current.currentTime = e.target.value;
        }}
      />
    </div>
  );
}
