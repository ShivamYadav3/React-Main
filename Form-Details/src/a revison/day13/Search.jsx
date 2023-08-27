import axios from "axios";
import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Search() {
  const [word, setWords] = useState("");
  const [list, setList] = useState([]);
  // console.log("re");
  useEffect(() => {
    // fetch(`https://fakestoreapi.com/products`)
    //   .then((data) => data.json())
    //   .then((data) => setList(data));

    (async () => {
      const okk = await axios.get(`https://fakestoreapi.com/products`);
      setList(okk.data);
    })();
  }, []);

  console.log("okk2");

  const filterData = useMemo(() => {
    let final = list.filter((data) =>
      data.title.toLowerCase().includes(word.toLowerCase())
    );
    return final;
  }, [word, list]);

  if (list.length == 0) return <div>Loading</div>;
  return (
    <div>
      <input type="text" onChange={(e) => setWords(e.target.value)} />
      {filterData.map((data) => {
        return <div key={data.id}>{data.title}</div>;
      })}
    </div>
  );
}

export default Search;
