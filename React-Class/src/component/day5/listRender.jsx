import { useState } from "react";

const ListRender = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      brand: "Apple",
    },
    {
      id: 2,
      title: "iPhone 13 Pro Max",
      brand: "Apple",
    },
    {
      id: 3,
      title: "iPhone 12 Pro Max",
      brand: "Apple",
    },
  ]);

  return (
    <>
      <p>My Products</p>
      <ul>
        {products.map((item) => {
          return (
            <li>
              {item.brand} | {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListRender;
