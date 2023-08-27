import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { ProductProvider } from "./context";
import ProductList from "./ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "product-details/:meraProductId",
    element: <ProductDetails />,
  },
]);

function Maiiin() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <ProductProvider value={{ products, setProducts }}>
        <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </>
  );
}

export default Maiiin;
