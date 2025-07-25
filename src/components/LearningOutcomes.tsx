import React from "react";
import { FaCheck } from "react-icons/fa";

const points = [
  "Detailed rules and regulations of each module of the IELTS test",
  "Formats and strategies to ace the IELTS test",
  "Proper structure and essay type for scoring well in IELTS writing task 1 and 2",
  "Speaking accurately on any topic in the IELTS speaking test",
  "Time management strategy to get a good band score in the IELTS test",
  "Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.",
];

const LearningOutcomes = () => {
  return (
    <div>
      <h1 className="mb-4 text-black md:text-2xl">
        What you will learn by doing the course
      </h1>

      <section>
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheck className="text-blue-500 mt-1 text-xl" />
                <p className="text-gray-800 text-md leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningOutcomes;
