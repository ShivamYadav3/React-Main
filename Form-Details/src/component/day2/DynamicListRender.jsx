import { useState } from "react";

const ListRenderDynamic = () => {
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

  const onProductAdd = () => {
    console.log("Clicked");
    setProducts((prevState) => {
      return [
        ...prevState,
        {
          title: "Dynamic Element",
          brand: "Dynamic Brand",
          id: new Date().getTime(),
        },
      ];
    });
  };

  console.log("Re-render");
  return (
    <>
      <p>My Products</p>
      <button onClick={onProductAdd}>Add New Product</button>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              {item.brand} | {item.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListRenderDynamic;
