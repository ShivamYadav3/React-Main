import { memo } from "react";
const Child = () => {
  console.log("child");
  return (
    <>
      <p>this is child</p>
    </>
  );
};
export default memo(Child);
