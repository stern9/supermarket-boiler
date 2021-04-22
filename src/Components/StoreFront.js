import React, { useEffect, useState, useContext } from "react";
import Product from "./Product";
import Loader from "./Loader";
import useFetch from "./useFetch.js";
import { AppContext } from "./AppContext.js";

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  const app = useContext(AppContext);

  useEffect(() => {
    get("products.json")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <p>Shopping in {app.currency}</p>
      <div className="store-front">
        {loading && <Loader />}
        {products.map((product) => (
          <Product key={product.id} details={product} />
        ))}
      </div>
    </>
  );
}
