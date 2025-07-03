import React, { useState } from "react";

const data = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Smith", age: 32 },
  { id: 3, name: "Sam Williams", age: 24 },
  { id: 4, name: "Lisa Johnson", age: 29 },
  { id: 5, name: "Mike Brown", age: 35 },
  { id: 6, name: "Emily Davis", age: 26 },
  { id: 7, name: "Robert Wilson", age: 31 },
  { id: 8, name: "Linda Taylor", age: 27 },
  { id: 9, name: "James Anderson", age: 30 },
  { id: 10, name: "Patricia Thomas", age: 33 },
  { id: 11, name: "David Jackson", age: 23 },
  { id: 12, name: "Barbara White", age: 36 },
  { id: 13, name: "William Harris", age: 22 },
  { id: 14, name: "Elizabeth Martin", age: 34 },
  { id: 15, name: "Charles Thompson", age: 25 },
  { id: 16, name: "Jennifer Garcia", age: 29 },
  { id: 17, name: "Joseph Martinez", age: 31 },
  { id: 18, name: "Susan Robinson", age: 28 },
  { id: 19, name: "Thomas Clark", age: 27 },
  { id: 20, name: "Sarah Rodriguez", age: 30 },
];

//console.log(data);

const Pegination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPage = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div>
      <div className="bg-red-200 p-6 max-w-xl">
        <h1 className="text-xl font-bold mb-4">Pagination</h1>
        <ul className="bg-red-300 p-5"></ul>
        <div className="flex justify-center space-x-2">
          <button className="bg-green-300 px-4 py-1 rounded">Click</button>
        </div>
      </div>
    </div>
  );
};

export default Pegination;
