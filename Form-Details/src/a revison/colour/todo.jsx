import { useState } from "react";

const ToDo = () => {
  const [todo, setToDo] = useState([]);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState([]);
  const [complete, setComplete] = useState([]);

  const AddToDo = () => {
    setCount(count + 1);
    setToDo((prev) => [...prev, { key: count, value: value }]);
    setValue("");
  };

  const InProgress = (id) => {
    let okk = todo.filter((data) => data.key == id);
    setProgress((prev) => [...prev, ...okk]);
    setToDo((prev) => prev.filter((data) => data.key !== id));
  };

  const Completed = (id) => {
    let okk = progress.filter((data) => data.key == id);
    setComplete((prev) => [...prev, ...okk]);
    setProgress((prev) => prev.filter((data) => data.key !== id));
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={AddToDo}>add</button>
        <div className="todo">
          <h1>todo</h1>
          {todo.map((data) => (
            <div key={data.key}>
              <span>{data.value}</span>
              <button onClick={(e) => InProgress(data.key)}>inProgress</button>
            </div>
          ))}
        </div>
        <div className="inpro">
          <h1>Inprogress</h1>
          {progress.map((data) => (
            <div key={data.key}>
              <span>{data.value}</span>
              <button onClick={(e) => Completed(data.key)}>completed</button>
            </div>
          ))}
        </div>
        <div className="completed">
          <h1>completed</h1>
          {complete.map((data) => (
            <div key={data.key}>
              <span>{data.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ToDo;
