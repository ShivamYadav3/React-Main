import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products`;
    console.log({ url });
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log({ data });
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

// export default ProductList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { meraProductId } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${meraProductId}`;
    console.log({ url });
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log({ data });
        setProductDetails(data);
      });
  }, [meraProductId]);
  return (
    <>
      <p>Product Details : {meraProductId}</p>
      <div>
        <p>{productDetails.id}</p>
        <p>{productDetails.title}</p>
        <p>{productDetails.description}</p>
      </div>
    </>
  );
};

// export default ProductDetails;

// import React from "react";
// import ReactDOM from "react-dom/client";
// import CounterClassComp from "./Day-3/1.CounterClassComp";
// import StaleCounterClassComp from "./Day-3/2.Stale-Closure";
// import FormElement from "./Day-4/1.form-element";
// import ListRender from "./Day-6/1-list-render";
// import ListRenderDynamic from "./Day-6/2-list-render-dynamic";
// import AppList from "./Day-6/3-list-render";
// import EditListRender from "./Day-6/4-edit-todo";
// import TodoHome from "./Day-7/2.TODOHome";
// import ButtonExample from "./Day-8/1.ButtonExample.Layout";
// import ClassCompExampleOne from "./Features/1/ClassCompExampleOne";
// import FuncExampleOne from "./Features/1/FuncExampleOne";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { Button } from "reactstrap";
// import ParentComp from "./Day-9/1.ParentComp";
// import Names from "./Day-9/2.Todo/1.TodoList";
// import A from "./Day-10/A";
// import UseEffectExample from "./Day-10/useEffect/1-example-ue";
// import APIExample from "./Day-10/useEffect/2.api-example";
// import ParentView from "./Day-12/1-parent";
// import Greetings from "./Day-12/6-Greetings";
// import UserList from "./Day-13/3.Users";
// import HomePageWithoutHOC from "./Day-13/HOC-Examples/HomePageWithoutHOC";
// import OrderWithoutHOC from "./Day-13/HOC-Examples/OrderWithoutHOC";
// import CartPageWithoutHOC from "./Day-13/HOC-Examples/CartWithoutHOC";
// import HomePageWithHOC from "./Day-13/HOC-Examples/HomePageWithHOC";
// import Day15Main from "./Day-14/1.index";
// import Day15MainWithMemo from "./Day-14/2.index-with-memo";
// import { Day13AsyncExampleGood } from "./Day-15/1-api-with-filters-with-memo";
// import { APIWithoutUseMemo } from "./Day-15/2.api-without-usememo";
// import { APiWithUseMemo } from "./Day-15/3.api-with-usememo";
// import Day15MainExample from "./Day-15/4.use-memo-example";
// import UseMemoWithAsync from "./Day-15/5.useMemo-with-async";
// import Day16UseCallbackExample from "./Day-16/1.useCallbackExample";
// import MultipleUseCallback from "./Day-16/2.multipleUseCallback";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Day-17/Home";
// import About from "./Day-17/About";
// import Contact from "./Day-17/Contact";
// import ProductDetails from "./Day-18/ProductDetails";
// import ProductList from "./Day-18/ProductList";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
//   {
//     path: "products",
//     element: <ProductList />,
//   },
//   {
//     path: "product-details/:meraProductId",
//     element: <ProductDetails />,
//   },
//   {
//     path: "*",
//     element: <div>Bhiya, there is no such page</div>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//     <RouterProvider router={router} />
//   </>
// );

// export default ProductDetails;
