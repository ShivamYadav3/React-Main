import { useEffect, useMemo, useState } from "react";

const ProductListApi = () => {
  const [product, setProduct] = useState([]);
  const [search, SetSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

  const FilterList = useMemo(() => {
    const Final = product.filter((item) => item.title.includes(search));
    return Final;
  }, [search]);

  return (
    <>
      <input type="text" onChange={(e) => SetSearch(e.target.value)} />
      <div>
        {FilterList.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.id}) </span>
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductListApi;
