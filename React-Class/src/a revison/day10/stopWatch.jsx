import { useRef } from "react";
import { useState } from "react";

const NewStopWatch = () => {
  let current = 0;
  const [startDate, setStartDate] = useState(null);
  const [now, setNow] = useState(null);
  const ref = useRef();
  const Start = () => {
    setStartDate(Date.now());
    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };
  const Pause = () => {
    clearInterval(ref.current);
  };
  if (startDate && now) {
    current = (now - startDate) / 1000;
  }
  return (
    <>
      <div>Time : {current}</div>
      <div>
        <button onClick={Start}>Start</button>
        <button onClick={Pause}>Pause</button>
      </div>
    </>
  );
};
export default NewStopWatch;
