import { useRef } from "react";

const AutoFocusWithRef = () => {
  const inputRef = useRef("null");

  const toggleFocus = () => {
    console.log(inputRef);
    console.log(inputRef.current, "okk");
    inputRef.current.focus();
  };

  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
      </div>

      <button onClick={toggleFocus}>Toggle Focus</button>
    </>
  );
};

export default AutoFocusWithRef;
