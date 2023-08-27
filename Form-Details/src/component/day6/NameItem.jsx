import { NameContainer } from "./styles";

const NameItem = (props) => {
  return (
    <NameContainer>
      <p>Hello {props.meraData.name}</p>
      <div>
        <span>{props.meraData.city}</span>
        <span>{props.meraData.country}</span>
      </div>
    </NameContainer>
  );
};

export default NameItem;
