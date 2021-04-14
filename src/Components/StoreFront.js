import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loader from "./Loader";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://react-tutorial-demo.firebaseio.com/products.json"
        );
        const data = await response.json();
        setIsLoading(false);
        setProducts(data);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="store-front">
      {isLoading && <Loader />}
      {products.map((product) => (
        <Product key={product.id} details={product} />
      ))}
    </div>
  );
}
