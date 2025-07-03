import React, { useState } from "react";

// Dummy Product List
const products = [
  { id: 1, name: "Smartphone", category: "Electronics", price: 15000 },
  { id: 2, name: "T-shirt", category: "Fashion", price: 500 },
  { id: 3, name: "Laptop", category: "Electronics", price: 55000 },
  { id: 4, name: "Jeans", category: "Fashion", price: 1200 },
  { id: 5, name: "Notebook", category: "Stationery", price: 100 },
  { id: 6, name: "Pen", category: "Stationery", price: 20 },
];

// 🧠 Filter Logic (by category)
const filterCategory = (items, selectedCategory) => {
  if (selectedCategory === "all") return items;
  return items.filter((item) => item.category === selectedCategory);
};

const FilterByCategory = () => {
  const [category, setCategory] = useState("all");
  //console.log("category", category);

  const filteredProducts = filterCategory(products, category);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Filter by Category</h1>

      {/* Category Filter Dropdown */}
      <select
        className="mb-6 px-3 py-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Stationery">Stationery</option>
      </select>

      {/* Product Display */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 mb-3 rounded flex justify-between items-center shadow"
          >
            <div>
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <span className="text-black font-bold">₹{product.price}</span>
          </div>
        ))
      ) : (
        <p className="text-red-500">No products found.</p>
      )}
    </div>
  );
};

export default FilterByCategory;
