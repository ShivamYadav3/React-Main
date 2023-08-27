import { useState } from "react";

const arr = [];
export default function StopwatchCC() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  function handleStart() {
    // Start counting.
    setStartTime(Date.now());
    setNow(Date.now());

    const t = setInterval(() => {
      // Update the current time every 10ms.
      // console.log(arr);
      console.log();
      const newDate = Date.now();
      setNow(newDate);
    }, 10);

    arr.push(t);
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
    </>
  );
}
