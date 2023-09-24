import ChildComp from "./ChildComp";

const ParentComp = () => {
  const onUserClick = (i) => {
    console.log("I'm clicked", i);
  };

  return (
    <>
      <p>I'm a Parent Comp</p>
      <ChildComp onMeraClick={onUserClick} />
    </>
  );
};

export default ParentComp;
