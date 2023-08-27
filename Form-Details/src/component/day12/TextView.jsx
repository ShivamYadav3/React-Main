import { memo } from "react";

const TextView = ({ color = "black", size = 12, label }) => {
  console.log("TextView Re-render", color, size, label);

  return <p style={{ color, fontSize: `${size}px` }}>{label}</p>;
};

export default memo(TextView);
