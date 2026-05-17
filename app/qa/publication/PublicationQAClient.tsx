// app/qa/publication/PublicationQAClient.tsx

"use client";

import { useState } from "react";

const publications = [
  {
    citation: (
      <>
        Bampzeli, A., Charakleias, E., & Georgiadis, M. C. (2026). Modeling, simulation and optimization of integrated milk pasteurization and membrane filtration processes.{" "}
        <i>Food and Bioproducts Processing</i>, <i>157</i>, 583-599.{" "}
        <a
          href="https://doi.org/10.1016/j.fbp.2026.04.006"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          https://doi.org/10.1016/j.fbp.2026.04.006
        </a>
      </>
    ),


    qa: [
      {
        question: "first question",
        answer:
          "first answer",
      },
      
    ],
  },

  // here you can add more publications with the relevant Q&A
  
];

export default function PublicationQAClient() {
  const [open, setOpen] = useState<number[]>([]);

  const isAllOpen =
    publications.every((p, i) => open.includes(i)) && publications.length > 0;

  const toggleAll = () => {
    if (isAllOpen) {
      setOpen([]);
    } else {
      setOpen(publications.map((_, i) => i));
    }
  };

  const togglePublication = (index: number) => {
    setOpen((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="px-6 py-30 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        Publication Q&A
      </h2>
      
      <p className="text-gray-700 mb-8">
          Here you can find questions that I was asked about my publication during presentations and interviews, along with my answers.
        </p>

      <button
        onClick={toggleAll}
        className="mb-8 px-4 py-2 bg-black text-white rounded"
      >
        {isAllOpen ? "Close all" : "Open all"}
      </button>

      <div className="space-y-10">
        {publications.map((pub, pubIndex) => (
          <div key={pubIndex} className="border rounded-xl p-5">

            {/* Publication header */}
            <p className="text-gray-700 text-center leading-relaxed">
              {pub.citation}
            </p>

            {/* Toggle publication Q&A */}
            <button
              onClick={() => togglePublication(pubIndex)}
              className="text-sm text-gray-700 mb-4 underline"
            >
              {open.includes(pubIndex)
                ? "Hide Q&A"
                : "Show Q&A"}
            </button>

            {/* Questions and answers */}
            {open.includes(pubIndex) && (
              <div className="space-y-4 mt-3">
                {pub.qa.map((item, qIndex) => (
                  <div key={qIndex} className="border-t pt-3">
                    <p className="font-medium">
                      {qIndex + 1}. {item.question}
                    </p>
                    <p className="text-gray-700 mt-1">{item.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}