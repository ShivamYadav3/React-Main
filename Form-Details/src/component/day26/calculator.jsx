import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAction,
  subtract,
  divide,
  multiply,
  clearAll,
} from "./Calculator.slice";

const Calculator = () => {
  const result = useSelector((state) => state.meraCalculator.value);
  const dispatch = useDispatch();

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const addNumbers = () => {
    dispatch(addAction({ number1, number2 }));
  };

  const Subtract = () => {
    dispatch(subtract({ number1, number2 }));
  };
  const Multiply = () => {
    dispatch(multiply({ number1, number2 }));
  };
  const Divide = () => {
    dispatch(divide({ number1, number2 }));
  };

  const Clear = () => {
    setNumber1("");
    setNumber2("");
  };

  const ClearAll = () => {
    dispatch(clearAll());
    setNumber1("");
    setNumber2("");
  };

  return (
    <div>
      <div>Result : {result}</div>
      <div>
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addNumbers}>+</button>
        <button onClick={Subtract}>-</button>
        <button onClick={Multiply}>*</button>
        <button onClick={Divide}>/</button>
      </div>
      <div>
        <button onClick={Clear}>Clear All</button>
        <button onClick={ClearAll}>Clear Result</button>
      </div>
    </div>
  );
};
export default Calculator;
