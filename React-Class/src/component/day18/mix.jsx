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
