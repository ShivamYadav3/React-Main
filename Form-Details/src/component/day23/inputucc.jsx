import { useRef } from "react";

const InputUCC = () => {
  const inputRef = useRef(null);

  console.log("Re-Render");

  const onSubmitData = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />

      <button onClick={onSubmitData}>Submit</button>
    </>
  );
};

export default InputUCC;
