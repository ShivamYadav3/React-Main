import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const main = (url) => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setData((prev) => [...prev, data]);
      });
  };

  useEffect(() => {
    if (data.length === 0) {
      main(url);
    } else if (data.length > 0 && data[count].next && count < 3) {
      main(data[count].next);
      setCount(count + 1);
    }
  }, [data]);

  return data;
};
export default useFetch;
