import { useLocation } from "react-router-dom";

const QueryParamsExample = () => {
  const { search } = useLocation();
  const uName = new URLSearchParams(search).get("name");
  const uCity = new URLSearchParams(search).get("city");
  const uState = new URLSearchParams(search).get("state");

  console.log({ uName, uCity, uState });
  return (
    <>
      <p>Query params example page</p>
    </>
  );
};

export default QueryParamsExample;
