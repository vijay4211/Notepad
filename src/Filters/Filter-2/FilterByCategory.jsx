import React, { useState } from "react";

const FilterByCategory = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Filter by Category</h2>

      {/* Category Filter Dropdown */}
      <select className="border rounded">
        <option value="all">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Stationery">Stationery</option>
      </select>
    </div>
  );
};

export default FilterByCategory;
