import { useState } from "react";

const ServerData = () => {
  const [data, setData] = useState("");

  const handleData = (event) => {
    event.preventDefault();
    fetch("https://api.instantwebtools.net/v1/airlines", {
      method: "POST",
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => {
        console.log("errorr", error);
      });
  };

  return (
    <>
      <form action="" onSubmit={handleData}>
        <input
          type="text"
          name="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};
export default ServerData;
