import React, { useState } from "react";

// Dummy accordion data
const faqItems = [
  { id: 1, question: "What is React?", answer: "A library for building UI" },
  {
    id: 2,
    question: "What is Tailwind?",
    answer: "A utility-first CSS framework",
  },
  { id: 3, question: "What is JSX?", answer: "JavaScript XML used in React" },
];

const AccordionMulti = () => {
  const [openSections, setOpenSections] = useState([]);

  console.log("openSections", openSections);

  // Toggle open/close section by ID
  const handleSectionToggle = (sectionId) => {
    const isAlreadyOpen = openSections.includes(sectionId);
    console.log("isAlreadyOpen", isAlreadyOpen);

    if (isAlreadyOpen) {
      // Section is open → close it by removing its ID
      const updated = openSections.filter((id) => id !== sectionId);
      setOpenSections(updated);
    } else {
      // Section is closed → open it by adding its ID
      setOpenSections([...openSections, sectionId]);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">FAQs (Multi Open)</h2>

      {faqItems.map((item) => (
        <div key={item.id} className="border rounded mb-2">
          {/* Accordion Button */}
          <button
            onClick={() => handleSectionToggle(item.id)}
            className="w-full text-left px-4 py-3 bg-gray-100 font-semibold border border-red-400"
          >
            {item.question}
          </button>

          {/* Show content only if open */}
          {openSections.includes(item.id) && (
            <div className="px-4 py-2 bg-white text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionMulti;
