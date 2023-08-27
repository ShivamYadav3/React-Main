import styled from "styled-components";
import Button from "./Button.Layout";
const Div = styled.div`
  display: flex;
  gap: 12px;
  margin: 12px;
`;
const ButtonExample = () => {
  return (
    <Div>
      <Button color="white" background="blue" outline>
        Shankar
      </Button>

      <Button color="green">Mitesh</Button>

      <Button outline>Mahesh</Button>
    </Div>
  );
};

export default ButtonExample;
