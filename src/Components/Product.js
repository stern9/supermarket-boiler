import { useState } from "react";

const Product = ({ details }) => {
  const [count, setCount] = useState(0);
  const handleIncrementClick = () => {
    setCount(count + 1);
  };
  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <div className="product">
      <img width="50" alt="" src={details.image} />
      <div className="product-info">
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
      <div className="product-buttons">
        <button
          onClick={handleDecrementClick}
          disabled={count === 0}
          className="product-sub"
        >
          -
        </button>
        <h3 className="product-count">{count ? count : ""}</h3>
        <button onClick={handleIncrementClick} className="product-add">
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
