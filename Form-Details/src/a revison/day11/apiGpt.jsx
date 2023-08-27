// useFetch.js
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setData((prevData) => [...prevData, jsonData]);
    if (jsonData.next && count < 3) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchData(url);
    } else if (count < data.length && data[count].next) {
      fetchData(data[count].next);
    }
  }, [data, url, count]);

  return data;
};

// export default useFetch;

// Api2.js
// import { useEffect, useState, useMemo } from "react";
// import useFetch from "./useFetch";

//  code failed

const Api2 = () => {
  const speciesData = useFetch("https://swapi.dev/api/species");
  const [names, setNames] = useState([]);
  console.log("re");

  useEffect(() => {
    if (speciesData.length === 0) return;

    const peopleUrls = speciesData.flatMap((data) =>
      data.results.flatMap((data2) => data2.people)
    );

    const fetchNames = async () => {
      const responses = await Promise.all(
        peopleUrls.map((url) => fetch(url).then((response) => response.json()))
      );

      const fetchedNames = responses.map((data) => data.name);
      setNames(fetchedNames);
    };

    fetchNames();
  }, [speciesData]);

  const loading = names.length < 25;

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          {names.map((name, i) => (
            <div key={i}>{name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Api2;
