import React, { useRef } from "react";

function OTPComponent() {
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleInputChange = (index, e) => {
    if (e.target.value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (!e.target.value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div>
      {inputRefs.map((data, index) => (
        <input
          key={index}
          ref={data}
          type="text"
          maxLength={1}
          autoFocus={index === 0}
          onChange={(e) => handleInputChange(index, e)}
        />
      ))}
    </div>
  );
}

export default OTPComponent;
