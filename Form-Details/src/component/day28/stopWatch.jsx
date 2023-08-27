import { useRef, useState } from "react";

const StopWatch = () => {
  const [count, setCount] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const watcher = useRef(null);
  console.log(Date.now());
  const startTimer = () => {
    setStartDate(Date.now());
    if (watcher.current) {
      clearInterval(watcher.current);
    }
    watcher.current = setInterval(() => {
      setCount(Date.now());
    }, 10);
  };
  let current = 0;
  if (count && startDate) {
    current = (count - startDate) / 1000;
  }
  const resetTimer = () => {
    clearInterval(watcher.current);
  };
  const resetTimer0 = () => {
    // watcher.current = 0;
    setCount(0);
    setStartDate(0);
  };
  return (
    <>
      <div>time : {current}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Pause</button>
      <button onClick={resetTimer0}>Reset</button>
    </>
  );
};
export default StopWatch;
