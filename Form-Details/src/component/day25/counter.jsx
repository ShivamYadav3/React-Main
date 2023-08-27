import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterslice";

const Counter1 = () => {
  const Count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>this is counter 1 {Count}</div>
    </>
  );
};
export default Counter1;
