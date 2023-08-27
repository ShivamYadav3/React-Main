import { useState } from "react";
import TextView from "./TextView";

const Greetings = () => {
  const [counter, setCounter] = useState(0);
  console.log("okk");

  return (
    <>
      <p>{counter}</p>

      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>

      <TextView size={20} color="red" label="Arun" />
      <TextView size={24} color="blue" label="Abhishek" />
      <TextView size={26} color="green" label="Vikas" />
      <TextView size={28} color="olive" label="Ritesh" />
      <TextView size={32} color="orange" label="Mitesh" />
      <TextView size={34} color="blue" label="Raja" />
      <TextView size={40} color="peach" label="Mahesh" />
      <TextView size={45} color="red" label="Shivam" />
      <TextView size={52} color="green" label="Shubham" />
    </>
  );
};

export default Greetings;
