import React, { useState } from "react";

const faqDatas = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind is a utility-first CSS framework for styling UI components.",
  },
  {
    id: 3,
    question: "What is a component?",
    answer: "A component is a reusable block of UI in React.",
  },
];

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(null); // Close if already open
    } else {
      setActiveAccordion(id); // Open new one
    }
  };
  return (
    <div>
      <div className="bg-red-100 p-5 max-w-xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">FAQs</h1>
        {faqDatas.map((faqData) => (
          <div key={faqData.id} className="bg-blue-300 p-3">
            {/* Header */}
            <div
              className="bg-blue-400 p-3 px-4 flex justify-between"
              onClick={() => handleAccordionClick(faqData.id)}
            >
              <h2>{faqData.question}</h2>
              <span className="text-xl bg-red-600 px-4 py-1 rounded text-white cursor-pointer">
                {activeAccordion === faqData.id ? "Close" : "Open"}
              </span>
            </div>

            {/* Answer (only visible if open) */}
            {activeAccordion === faqData.id && (
              <div className="px-4 py-2 text-gray-700 bg-white">
                {faqData.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
