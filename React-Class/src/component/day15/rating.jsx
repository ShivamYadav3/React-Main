import { useMemo, useState, useEffect } from "react";
const Rating = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.rating.rate > 3.2);
  }, [products]);

  return (
    <div>
      <h2>rating 3.2</h2>
      <ol>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.title} - {product.rating.rate}
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Rating;
