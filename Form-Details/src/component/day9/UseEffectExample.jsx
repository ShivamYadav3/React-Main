import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [userName, setUserName] = useState("");
  const [userName2, setUserName2] = useState("");

  // Run Once
  useEffect(() => {
    console.log("Render- Once");
  }, []);

  // Run On userName change
  useEffect(() => {
    console.log("Render- userName: ", userName);
  }, [userName]);

  // Run On userName2 change
  useEffect(() => {
    console.log("Render- userName2: ", userName2);
  }, [userName2]);

  return (
    <>
      <p>Name: {}</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        value={userName2}
        onChange={(e) => setUserName2(e.target.value)}
      />
    </>
  );
};

export default UseEffectExample;
