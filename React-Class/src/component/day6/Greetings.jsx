import styled from "styled-components";

const Div = styled.div`
  background-color: beige;
  padding: 12px;
  margin: 12px;
  color: black;
  border-radius: 5px;
`;

const Greetings = ({ name, nickName, city, count }) => {
  return (
    <Div>
      Hello {name}({nickName}). how are you doing at {city}
      {count}?
    </Div>
  );
};

export default Greetings;
