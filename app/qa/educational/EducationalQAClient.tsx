// app/qa/educational/EducationalQAClient.tsx

"use client";

import { useState } from "react";

const qanda = [
  {
    question:
      "How to choose what to study?",
    answer: (
      <>
        It depends on your personal goals, your interests, your character, your background, and the things
        you are naturally good at. A general piece of advice I would give is, if you have the opportunity,
        choose something that you genuinely like rather than something others expect you to do. At the same
        time, it is important to consider practical aspects such as financial prospects, working hours and the
        lifestyle associated with a particular profession. Use the internet to learn more about different fields
        of study and the career opportunities available after graduation. Talk to people from different backgrounds
        and listen to their perspectives, even if they differ from your own. This can help you develop a broader
        and more balanced understanding. Keep in mind that we live in an era where many people eventually work in
        fields different from the ones they originally studied. Even if you later decide to change direction, the skills,
        experiences, and way of thinking you gain from your studies will still be valuable. There is no need to stress
        excessively about making the “perfect” choice. Instead, try to make the most informed decision possible by using
        the many sources of information available to you. For personalized advice, you can explore the{" "}

            <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            services
            </a> I provide and{" "}

            <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            contact
            </a> me.
      </>
    ),
  },
  
];

export default function EducationalQAClient() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const isAllOpen = openIndexes.length === qanda.length;

  const toggleOne = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (isAllOpen) {
      setOpenIndexes([]);
    } else {
      setOpenIndexes(qanda.map((_, i) => i));
    }
  };

  return (
    <div className="px-6 py-30 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        Educational Q&A
      </h2>
      
      <p className="text-gray-700 mb-8">
          Below, I share my personal thoughts on several questions that have crossed my mind along the way and that may help
          students, from school to university, as well as researchers at different stages of their journey. These opinions are
          based on my personal experiences, studies and the perspectives of people I have met so far. I encourage you to use
          this information as inspiration to reflect further, discuss with more people to broaden your perspective and search
          online for additional insights. If you identify important questions that have not yet been addressed here, you are
          welcome to{" "}

            <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            contact
            </a> me so that I can add more content.

        </p>

      {/* Toggle all button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleAll}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {isAllOpen ? "Close all answers" : "Open all answers"}
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {qanda.map((item, index) => (
          <div key={index} className="border rounded-xl p-4">
            <button
              onClick={() => toggleOne(index)}
              className="w-full font-medium flex justify-between text-left"
            >
              <span>
                {index + 1}. {item.question}
              </span>

              <span>{openIndexes.includes(index) ? "-" : "+"}</span>
            </button>

            {openIndexes.includes(index) && (
              <div className="mt-3 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}