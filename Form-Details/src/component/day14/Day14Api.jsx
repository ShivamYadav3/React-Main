import { useEffect, useMemo, useState } from "react";

const Day14Api = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);

  const userTodoCount = useMemo(() => {
    const matchedTodos = todo.filter((data) => data.userId === 1);
    return matchedTodos;
  }, [todo]);
  console.log(userTodoCount);
  return <></>;
};
export default Day14Api;
