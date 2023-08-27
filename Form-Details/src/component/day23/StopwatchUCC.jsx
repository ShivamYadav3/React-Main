import { useRef, useState } from "react";

export default function StopwatchUCC() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const r = useRef(null);
  console.log(Date.now());

  function handleStart() {
    // Start counting.
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(r.current);
    const t = setInterval(() => {
      // Update the current time every 10ms.
      const newDate = Date.now();
      setNow(newDate);
    }, 10);

    r.current = t;
  }

  function handleStop() {
    clearInterval(r.current);
  }

  //console.log(now, startTime);

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
