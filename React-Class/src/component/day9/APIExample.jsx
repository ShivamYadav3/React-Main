import { useEffect, useState } from "react";

const APIExample = () => {
  const [products, setProducts] = useState([]);
  //

  useEffect(() => {
    /* fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .catch((err) => setProducts([])); */

    const productList = JSON.parse(localStorage.getItem("products"));
    console.log(productList);
    setProducts(productList);
  }, []);

  return (
    <>
      <h1>My Products</h1>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              {item.title} | {item.price}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default APIExample;
