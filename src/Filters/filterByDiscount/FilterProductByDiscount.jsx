import React, { useState } from "react";

// 🧃 Dummy Product Data with Discount
const products = [
  { id: 1, name: "Smartphone", price: 15000, original: 20000 },
  { id: 2, name: "Shoes", price: 1500, original: 3000 },
  { id: 3, name: "Laptop", price: 55000, original: 60000 },
  { id: 4, name: "Watch", price: 2000, original: 5000 },
  { id: 5, name: "Notebook", price: 100, original: 100 }, // 0% discount
];

// 🧠 Calculate discount %
const calculateDiscount = (product) =>
  Math.round(((product.original - product.price) / product.original) * 100);

// 🧠 Filter by discount range
const filterByDiscount = (products, discountRange) => {
  switch (discountRange) {
    case "30":
      return products.filter((product) => calculateDiscount(product) >= 30);
    case "50":
      return products.filter((product) => calculateDiscount(product) >= 50);
    case "70":
      return products.filter((product) => calculateDiscount(product) >= 70);
    default:
      return products;
  }
};

const FilterProductByDiscount = () => {
  const [discountRange, setDiscountRange] = useState("all");
  console.log("discountRange", discountRange);

  const filteredProducts = filterByDiscount(products, discountRange);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Product Filter By Discount</h1>

      {/* Discount Filter Dropdown */}
      <select
        className="mb-6 px-3 py-2 border rounded"
        value={discountRange}
        onChange={(e) => setDiscountRange(e.target.value)}
      >
        <option value="all">All Discounts</option>
        <option value="30">30% & Above</option>
        <option value="50">50% & Above</option>
        <option value="70">70% & Above</option>
      </select>

      {/* Product Cards */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((filteredProduct) => {
          const discount = calculateDiscount(filteredProduct);
          return (
            <div
              key={filteredProduct.id}
              className="border p-4 mb-3 rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{filteredProduct.name}</h2>
                <p className="text-sm text-gray-500">
                  Original: ₹{filteredProduct.original}
                </p>
              </div>
              <div className="text-right">
                <p className="text-black font-bold">₹{filteredProduct.price}</p>
                <p className="text-green-600 text-sm">{discount}% off</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-red-500">No products match the selected discount.</p>
      )}
    </div>
  );
};

export default FilterProductByDiscount;
