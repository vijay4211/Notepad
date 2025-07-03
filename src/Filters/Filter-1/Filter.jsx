import React, { useState } from "react";

// Dummy Product Data
const products = [
  { id: 1, name: "Pen", price: 50 },
  { id: 2, name: "Notebook", price: 120 },
  { id: 3, name: "Bag", price: 900 },
  { id: 4, name: "Shoes", price: 1500 },
  { id: 5, name: "Watch", price: 2000 },
  { id: 6, name: "Bottle", price: 300 },
];

// Price Filter Logic
const filterByPrice = (items, range) => {
  console.log("items", items);
  console.log("range", range);

  switch (range) {
    case "under500":
      return items.filter((p) => p.price < 500);
    case "500to1000":
      return items.filter((p) => p.price >= 500 && p.price <= 1000);
    case "above1000":
      return items.filter((p) => p.price > 1000);
    default:
      return items;
  }
};

const Filter = () => {
  const [priceRange, setPriceRange] = useState("all");
  //console.log("priceRange", priceRange);

  const filteredProducts = filterByPrice(products, priceRange);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Price Filter */}
      <select
        className="border px-3 py-2 rounded mb-6"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <option value="all">All Prices</option>
        <option value="under500">Under ₹500</option>
        <option value="500to1000">₹500 – ₹1000</option>
        <option value="above1000">Above ₹1000</option>
      </select>

      {/* Product List */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 mb-3 rounded shadow-sm flex justify-between"
          >
            <span>{product.name}</span>
            <span className="font-medium">₹{product.price}</span>
          </div>
        ))
      ) : (
        <p className="text-red-500">No products match this filter.</p>
      )}
    </div>
  );
};

export default Filter;
