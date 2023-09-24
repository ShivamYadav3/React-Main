const ChildComp = ({ onMeraClick }) => {
  return (
    <>
      <p>I'm a Child Comp</p>
      <button onClick={onMeraClick}>Click-1</button>
      <button onClick={() => onMeraClick(1)}>Click-1</button>
      <button onClick={() => onMeraClick(2)}>Click-2</button>
      <button onClick={() => onMeraClick(3)}>Click-3</button>
      <button onClick={() => onMeraClick(4)}>Click-4</button>
    </>
  );
};

export default ChildComp;
