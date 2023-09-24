import { useState } from "react";
import NameItem from "./NameContainer";

const Names = () => {
  const [nameList, setNameList] = useState([
    { id: 1, name: "Shankar", city: "XYZ", country: "ABC" },
    { id: 2, name: "Shivam", city: "XYZ", country: "ABC" },
    { id: 3, name: "Mitesh", city: "XYZ", country: "ABC" },
    { id: 4, name: "Gourav", city: "XYZ", country: "ABC" },
    { id: 5, name: "Abhishek", city: "XYZ", country: "ABC" },
  ]);

  const onDeleteName = (id) => {
    console.log({ id });
    setNameList((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      {nameList.map((item) => {
        return (
          <NameItem meraData={item} key={item.id} onDelete={onDeleteName} />
        );
      })}
    </>
  );
};

export default Names;
