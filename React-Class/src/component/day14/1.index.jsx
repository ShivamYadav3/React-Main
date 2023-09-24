import { useEffect, useState } from "react";
const Day14Main = () => {
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    let val = 0;
    for (let i = 1; i < 5; i++) {
      val += i;
      console.log(val);
    }
    setResult(val);
  }, []);

  console.log("Re-render", result);

  return (
    <>
      <p>
        {counter} {result}
      </p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
    </>
  );
};
export default Day14Main;
