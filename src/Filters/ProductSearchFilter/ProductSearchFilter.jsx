import React, { useState } from "react";

const products = [
  { id: 1, name: "iPhone 15", price: 799 },
  { id: 2, name: "Samsung Galaxy S22", price: 699 },
  { id: 3, name: "OnePlus Nord", price: 499 },
  { id: 4, name: "Redmi Note 12", price: 299 },
  { id: 5, name: "Nothing Phone 2", price: 599 },
];

const ProductSearchFilter = () => {
  const [searchText, setSearchText] = useState("");

  // Filter logic
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Search Products</h2>

      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
      />

      {/* 📦 Product List */}
      <ul className="space-y-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="p-2 border rounded">
              {product.name} - ₹{product.price}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No products found.</li>
        )}
      </ul>
    </div>
  );
};

export default ProductSearchFilter;
