// import { useMemo } from "react";
// import { useLocation, useSearchParams } from "react-router-dom";

// const QueryParamsExample = () => {
//   // const { search } = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const obj2 = useMemo(() => {
//     return Object.fromEntries(new URLSearchParams(searchParams));
//   }, [searchParams]);

//   console.log(obj2);
//   return (
//     <>
//       <p>Query params example page</p>
//       {Object.keys(obj2).map((item) => {
//         return (
//           <p key={item}>
//             {item}: {obj2[item]}
//           </p>
//         );
//       })}
//     </>
//   );
// };

// export default QueryParamsExample;

// import { useMemo } from "react";
// import { useLocation, useSearchParams } from "react-router-dom";

// const QueryParamsExample = () => {
//   //const { search } = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const parsedQueries = useMemo(() => {
//     const obj = new URLSearchParams(searchParams);

//     const result = [];
//     obj.forEach((value, key) => {
//       result.push({ key, value });
//     });

//     return result;
//   }, []);

//   console.log(parsedQueries);

//   return (
//     <>
//       <p>Query params example page</p>
//       {parsedQueries.map((item) => {
//         return (
//           <p key={item.key}>
//             {item.key}: {item.value}
//           </p>
//         );
//       })}
//     </>
//   );
// };

// export default QueryParamsExample;

import { useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const QueryParamsExample2 = () => {
  //const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByPopularity = (event) => {
    let obj = new URLSearchParams(searchParams);
    searchParams.set("filter", "popularity");
    setSearchParams(searchParams);
  };
  const sortByPrice = (event) => {
    let obj = new URLSearchParams(searchParams);
    searchParams.set("filter", "price");
    setSearchParams(searchParams);
  };
  const sortByName = (event) => {
    let obj = new URLSearchParams(searchParams);
    searchParams.set("filter", "name");
    setSearchParams(searchParams);
  };
  const sortByRelevance = (event) => {
    let obj = new URLSearchParams(searchParams);
    searchParams.set("filter", "relevance");
    setSearchParams(searchParams);
  };
  const sortByRating = () => {
    let okk = new URLSearchParams(searchParams);
    searchParams.set("filter", "rating");
    setSearchParams(searchParams);
  };

  return (
    <>
      <p>Query params example page</p>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <button onClick={sortByPrice}>Sort By Price</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByRelevance}>Sort By Relevance</button>
      <button onClick={sortByRating}>Sort By Rating</button>
    </>
  );
};

export default QueryParamsExample2;
