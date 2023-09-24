import { useMemo, useState } from "react";

const SearchBox = () => {
  const [list, setList] = useState([
    "shivam",
    "shankar",
    "amit",
    "satyam",
    "raja",
    "mahesh",
    "gourav",
  ]);

  const [search, setSearch] = useState("");

  const InputChange = (e) => {
    setSearch(e.target.value);
  };

  const FilterText = useMemo(() => {
    const searchFinal = list.filter((data) => data.includes(search));
    return searchFinal;
  }, [search]);

  return (
    <>
      <input type="text" onChange={InputChange} />
      <div>
        {FilterText.map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </div>
    </>
  );
};
export default SearchBox;
