import { useMemo, useState } from "react";
const Day14MainWithMemo = () => {
  const [counter, setCounter] = useState(0);

  /**
   * 1- It caches or memories the result
   * 2- It re-run the code only when dependency changes
   * 3- For blank dependency, it will just run once
   * 4- It only handle sync code
   * 5- It helps us avoding the extra re-rendering
   */
  const result = useMemo(() => {
    let val = 0;
    for (let i = 1; i < 5; i++) {
      console.log(val);

      val += i;
    }
    return val;
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

export default Day14MainWithMemo;
