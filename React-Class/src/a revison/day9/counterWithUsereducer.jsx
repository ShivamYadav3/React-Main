import { useReducer } from "react";
const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "Decrement") {
    return state - 1;
  } else if (action.type === "Reset") {
    return (state = 0);
  } else {
    return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      </div>
    </>
  );
};
export default Counter;

// import { useReducer } from "react";

// const initialState = { count: 0 };

// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     case "RESET":
//       return { ...state, count: 0 };
//     default:
//       return state;
//   }
// };

// const SimpleCounter = () => {
//   const [state, dispatch] = useReducer(counterReducer, initialState);

//   return (
//     <div>
//       <h1>Simple Counter</h1>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// };

// export default SimpleCounter;
