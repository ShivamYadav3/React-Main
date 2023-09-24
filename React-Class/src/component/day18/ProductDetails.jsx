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

export default ProductDetails;
