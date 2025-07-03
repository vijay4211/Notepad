import React, { useState } from "react";

const products = [
  { id: 1, name: "iPhone", price: 799 },
  { id: 2, name: "Samsung Galaxy", price: 699 },
  { id: 3, name: "OnePlus", price: 499 },
  { id: 4, name: "Nothing Phone", price: 399 },
  { id: 5, name: "Redmi", price: 299 },
];

const PriceRangeFilter = () => {
  const [maxPrice, setMaxPrice] = useState(800); // default max

  // Filter products under or equal to selected price
  const filteredProducts = products.filter(
    (product) => product.price <= maxPrice
  );
  console.log("filteredProducts", filteredProducts);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Filter by Price</h2>

      {/* Price Range Slider */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Max Price: ₹{maxPrice}
        </label>
        <input
          type="range"
          min="100"
          max="800"
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Filtered Product List */}
      <ul className="space-y-2">
        {filteredProducts.map((product) => (
          <li key={product.id} className="p-2 border rounded">
            {product.name} - ₹{product.price}
          </li>
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-gray-500">No products under ₹{maxPrice}</p>
        )}
      </ul>
    </div>
  );
};

export default PriceRangeFilter;
