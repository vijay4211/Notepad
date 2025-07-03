import React from "react";

import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 15" },
  { id: 2, name: "Samsung S23" },
  { id: 3, name: "Pixel 8" },
];

const ProductList = () => {
  return (
    <div>
      <h2>📦 Product List</h2>
      {products.map((product) => (
        <p key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default ProductList;
