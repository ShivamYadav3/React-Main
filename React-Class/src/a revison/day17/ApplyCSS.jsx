import React, { useState } from "react";
import "./index.css";
const ApplyCSS = () => {
  const [flag, setFlag] = useState(false);
  const [grey, setGrey] = useState(100);
  return (
    <div>
      <div>ApplyCSS</div>
      <img
        src="https://blog.hubspot.com/hubfs/image8-2.jpg"
        alt=""
        onClick={() => setFlag((prev) => !prev)}
        // className={flag ? "img" : ""}
        style={
          flag
            ? { filter: `grayscale(${grey}%)`, width: "680px" }
            : { width: "680px" }
        }
      />
      <div>{grey}</div>
      <input
        type="range"
        value={grey}
        onChange={(e) => setGrey(e.target.value)}
      />
    </div>
  );
};

export default ApplyCSS;
