import React, { useState } from "react";

const ProductQuantity = () => {
  //state
  const [quantity, setQuantity] = useState(0);
  console.log("quantity", quantity);

  // increment
  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };
  // decrement
  const decrementHandler = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div>
      <h2>ProductQuantity</h2>
      <div className="space-x-5 m-10">
        <button
          onClick={incrementHandler}
          className="bg-green-600 px-6 py-2 rounded text-white text-xl"
        >
          Incress
        </button>
        <button
          onClick={decrementHandler}
          className="bg-red-600 px-6 py-2 rounded text-white text-xl"
          disabled={quantity <= 1}
        >
          Decress
        </button>
      </div>
      <div className="m-10 text-2xl font-bold">{quantity}</div>
    </div>
  );
};

export default ProductQuantity;
