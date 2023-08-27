import React, { useEffect, useState } from "react";

function AutomaticCounter() {
  const [count, setCount] = useState(1);
  const [isCountingUp, setIsCountingUp] = useState(true);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      const interval = setInterval(() => {
        if (isCountingUp) {
          if (count < 10) {
            setCount(count + 1);
          } else {
            setIsCountingUp(false);
          }
        } else {
          if (count > 1) {
            setCount(count - 1);
          } else {
            setIsCountingUp(true);
          }
        }
      }, 300);
      return () => clearInterval(interval);
    } else return;
  }, [count, isCountingUp, flag]);

  const startCounter = () => {
    setFlag(true);
  };

  const pauseCounter = () => {
    setFlag(false);
  };

  return (
    <div>
      <div>AutomaticCounter</div>
      <div>{count}</div>
      <div>
        <button onClick={startCounter}>Start</button>
      </div>
      <div>
        <button onClick={pauseCounter}>pause</button>
      </div>
      <div>
        <button>reset</button>
      </div>
    </div>
  );
}

export default AutomaticCounter;
