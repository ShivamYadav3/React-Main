import { useRef, useState } from "react";

export const ButtonCC = () => {
  const [count, setCount] = useState(0);

  console.log("Re-Render");
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increment
      </button>
    </>
  );
};
export const ButtonUCC = () => {
  const btnRef = useRef(null);

  console.log("Re-Render");

  const onClick = () => {
    btnRef.current.innerText = Number(btnRef.current.innerText) + 1;
  };

  return (
    <>
      <p ref={btnRef}>{btnRef.current || 0}</p>
      <button onClick={onClick}>Increment</button>
    </>
  );
};
