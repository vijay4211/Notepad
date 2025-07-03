import React, { useEffect, useState } from "react";

// 🧃 Dummy Product Data
const products = [
  { id: 1, name: "iPhone 14", brand: "Apple", price: 80000 },
  { id: 2, name: "Galaxy S22", brand: "Samsung", price: 60000 },
  { id: 3, name: "Redmi Note 12", brand: "Xiaomi", price: 18000 },
  { id: 4, name: "MacBook Air", brand: "Apple", price: 95000 },
  { id: 5, name: "Galaxy Watch", brand: "Samsung", price: 15000 },
  { id: 6, name: "Mi Band 7", brand: "Xiaomi", price: 3000 },
];

const filterProductFunction = (products, selectedBrand) => {
  if (selectedBrand === "all") return products;
  return products.filter((product) => product.brand === selectedBrand);
};

const FilterByBrand = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  console.log("selectedBrand", selectedBrand);

  const filterProducts = filterProductFunction(products, selectedBrand);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2>Product List By Brand</h2>

      {/* Brand Filter */}
      <select
        className="border rounded px-4 py-2 mb-6"
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value="all">All Brands</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Xiaomi">Xiaomi</option>
      </select>

      {/* Product Cards */}
      {filterProducts.map((filterProduct) => (
        <div key={filterProduct.id} className="border flex justify-between p-3">
          <div>{filterProduct.name}</div>
          <div>{filterProduct.price}</div>
        </div>
      ))}
    </div>
  );
};

export default FilterByBrand;
