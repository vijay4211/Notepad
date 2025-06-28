import React, { useEffect, useState } from "react";
import "./App.css";

// const url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [note, setNote] = useState("");

  useEffect(() => {
    const getFromLocalStorage = localStorage.getItem("notepad");
    if (getFromLocalStorage) setNote(getFromLocalStorage);
  }, []);

  useEffect(() => {
    const storeInLocalStorage = localStorage.setItem("notepad", note);
  }, [note]);

  const handleClear = () => {
    setNote("");
    localStorage.removeItem("notepad");
  };
  const handleDownload = () => {
    const blob = new Blob([note], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "note.txt";
    link.href = URL.createObjectURL(blob);
    link.click();
  };

  return (
    <>
      <div className="bg-gray-100 p-6 min-h-screen">
        <div className="bg-white p-6 max-w-3xl shadow-lg rounded-md">
          <h1 className="text-2xl font-bold mb-4">My Notepad</h1>
          <textarea
            value={note}
            className="h-80 border p-4 w-full rounded focus:outline-none focus:ring"
            onChange={(e) => setNote(e.target.value)}
            placeholder="Start Typing....."
          ></textarea>
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleDownload}
              className="bg-blue-400 px-4 py-1 rounded"
            >
              Download
            </button>
            <button
              onClick={handleClear}
              className="bg-blue-400 px-4 py-1 rounded"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
