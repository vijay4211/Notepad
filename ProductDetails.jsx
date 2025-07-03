import React from "react";
import { useParams } from "react-router-dom";

const products = {
  1: { name: "iPhone 15", price: "$999" },
  2: { name: "Samsung S23", price: "$899" },
  3: { name: "Pixel 8", price: "$799" },
};

const ProductDetails = () => {
  const { id } = useParams(); //Read product ID from URL

  const product = products[id];
  console.log("product---", product);
  if (!product) return <h2>❌ Product not found</h2>;

  return (
    <div>
      <h2>🔍 Product Details</h2>
      <p>🆔 ID: {id}</p>
      <p>📱 Name: {product.name}</p>
      <p>💰 Price: {product.price}</p>
    </div>
  );
};

export default ProductDetails;
