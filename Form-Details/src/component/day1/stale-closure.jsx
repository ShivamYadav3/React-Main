import { useState } from "react";

const StaleClosure = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 1);
  };

  console.log("Re-Render: ", counter);
  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={updateCounter}>Increment</button>
    </>
  );
};

export default StaleClosure;
