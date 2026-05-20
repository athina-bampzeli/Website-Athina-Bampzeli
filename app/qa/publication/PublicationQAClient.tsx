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
        question: "Why did you choose to work on the dairy industry? Is this study useful for industry? Can it be applied to other units or processes?",
        answer:
          "answer",
      },
      {
        question: "What was your main goal in this work? What is your main conclusion?",
        answer:
          "answer",
      },
      {
        question: "What types of models did you use? Were the equations ordinary (ODEs) or partial differential (PDEs)? Which solver did you use for optimization?",
        answer:
          "answer",
      },
      {
        question: "Did you modify the default gPROMS equations and implement your own models?",
        answer:
          "answer",
      },
      {
        question: "Did you encounter errors during simulation or optimization? Why did they occur? How did you manage them?",
        answer:
          "answer",
      },
      {
        question: "Were the kinetic parameters taken from literature, estimated, or fitted in some other way?",
        answer:
          "answer",
      },
      {
        question: "Which temperature did you actually measure and use in your calculations: bulk fluid temperature, wall temperature, or another reference temperature?",
        answer:
          "answer",
      },
      {
        question: "Did you calculate the Biot number? Did you assume a uniform temperature distribution in the milk?",
        answer:
          "answer",
      },
      {
        question: "Did you consider using ulta high temperature (UHT) pasteurization instead of high-temperature short-time (HTST)?",
        answer:
          "answer",
      },
      {
        question: "What is diafiltration water? Why is it used? What properties did you assume for it??",
        answer:
          "answer",
      },
      {
        question: "What type of membrane did you use? What were its characteristics, material, key properties?",
        answer:
          "answer",
      },
      
      {
        question: "Was fouling modeled in the membrane filtration process?",
        answer:
          "answer",
      },
      
      {
        question: "Was the equipment order based on literature, industrial practice, or was it a novel design?",
        answer:
          "answer",
      },
      
      {
        question: "Did you test different equipment sequences, for example placing the membrane before pasteurization?",
        answer:
          "answer",
      },
      {
        question: "What were the quality criteria in your study? How did you evaluate them and include them in the model?",
        answer:
          "answer",
      },
      {
        question: "If experimental data were available, how would you validate the model?",
        answer:
          "answer",
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