import React from "react";

const ProductDiscount = () => {
  const price = 835;
  const originalPrice = 1950;

  const discountPercent = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <div>
      <h2>ProductDiscount</h2>
      <div className="bg-red-600/60 text-white p-5 max-w-max space-x-5">
        <span className="text-xl">{price}</span>
        <span className="text-xl">{originalPrice}</span>
        <span className="text-xl bg-green-600 px-6 py-1 font-semibold">
          {discountPercent}% off
        </span>
      </div>
    </div>
  );
};

export default ProductDiscount;

//#####################
//(1950 - 834) / 1950 * 100
//Solve -> Bracket - Divide - Multiplication
