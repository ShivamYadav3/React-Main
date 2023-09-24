import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  console.log("parent");
  return (
    <>
      <p>this is parent</p>
      <p>counter : {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>click</button>
      <Child count={counter} />
      <Child />
      <Child />
      <Child />
      <Child />
    </>
  );
};
export default Parent;
