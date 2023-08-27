import { useState } from "react";

const ColourPicker = () => {
  const [color, setColor] = useState("fff");
  return (
    <>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
      <div style={{ backgroundColor: color }}>Shivam Yadav</div>
    </>
  );
};
export default ColourPicker;
