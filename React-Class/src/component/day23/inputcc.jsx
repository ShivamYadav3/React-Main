import { useState } from "react";

const InputCC = () => {
  const [search, setSearch] = useState("");

  console.log("Re-Render");

  const onSubmitData = () => {
    console.log({ search });
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={onSubmitData}>Submit</button>
    </>
  );
};

export default InputCC;
