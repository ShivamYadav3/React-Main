import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ProductProvider, Productss } from "./context";

const ProductList = () => {
  const { products, setProducts } = useContext(Productss);

  useEffect(() => {
    if (products && products.length !== 0) {
      return;
    }

    const url = `https://fakestoreapi.com/products`;
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log("okk", data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1>My Products</h1>
      <div>
        {products.map((item) => {
          return (
            <Link to={`/product-details/${item.id}`} key={item.id}>
              <p>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
