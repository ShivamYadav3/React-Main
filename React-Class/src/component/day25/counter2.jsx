import { useSelector } from "react-redux";

const Counter2 = () => {
  const Count = useSelector((state) => state.counter.value);

  return (
    <>
      <div>this is Counter2 {Count}</div>
    </>
  );
};
export default Counter2;
