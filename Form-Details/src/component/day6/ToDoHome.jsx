import { useState } from "react";
import styled from "styled-components";
import TodoChild from "./TodoChild";

const PDiv = styled.div`
  background-color: #97b708;
  color: white;
  padding: 12px;
  margin: 12px;
`;
const TodoHome = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <PDiv>
        <p>Search: {search}</p>
        <input
          type={"text"}
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </PDiv>

      <TodoChild data={search} />
    </>
  );
};

export default TodoHome;
