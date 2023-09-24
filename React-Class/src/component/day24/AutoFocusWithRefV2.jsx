import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  console.log("Re-render C", ref);

  return (
    <>
      <p>Child</p>
      <input type="text" ref={ref} />
    </>
  );
});

const AutoFocusWithRefV2 = () => {
  const inputRef = useRef("null");

  const toggleFocus = () => {
    console.log(inputRef);

    console.log(inputRef.current);
    inputRef.current.value = "Shivam";
    //inputRef.current.disabled = true;
    inputRef.current.focus();
  };

  console.log("Re-render P");

  return (
    <>
      <div>
        <Input ref={inputRef} />
      </div>

      <button onClick={toggleFocus}>Toggle Focus</button>
    </>
  );
};

export default AutoFocusWithRefV2;
