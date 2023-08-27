import { useEffect, useRef, useState } from "react";
import useFetch from "./fetch";

const Api = () => {
  const [final, setFinal] = useState([]);

  let okk = [];

  console.log("rerender");
  const name = useRef([]);

  const data = useFetch("https://swapi.dev/api/species");
  useEffect(() => {
    console.log("map");
    data.map((data, i) =>
      data.results.map((data2, k) => okk.push(...data2.people))
    );
    setFinal(okk);
  }, [data]);

  useEffect(() => {
    console.log("aall");
    const fench = async () => {
      const okkkkk = await Promise.allSettled([
        final.map((data) => {
          fetch(data)
            .then((data) => data.json())
            .then((data) => {
              name.current.push(data.name);
            });
        }),
      ]).catch((err) => console.log(err, "err"));
    };
    fench();
  }, [final]);

  if (name.current.length < 1) return <div>loading</div>;

  return (
    <>
      <div>
        {name.current.length > 0 && (
          <div>
            {name.current.map((data, i) => (
              <div key={i}>{data}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Api;
