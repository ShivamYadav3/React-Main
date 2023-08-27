const NameItem = (props) => {
  console.log(props);
  return (
    <>
      <p>Hello {props.meraData.name}</p>
      <div>
        <span>{props.meraData.city}</span>
        <span>{props.meraData.country}</span>
        <br />
        <br />
        <button onClick={() => props.onDelete(props.meraData.id)}>
          Delete
        </button>
      </div>
    </>
  );
};
export default NameItem;
