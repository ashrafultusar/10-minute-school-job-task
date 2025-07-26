import { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const accordionData = [
  {
    title: "This IELTS course is for",
    content: "Students, professionals, or anyone planning to take the IELTS exam to study or migrate abroad."
  },
  {
    title: "About the IELTS course",
    content: "This course covers all four IELTS modules – Listening, Reading, Writing, and Speaking – with practice tests and strategies."
  },
  {
    title: "This IELTS course will help you in the following ways:",
    content: "Build confidence, improve English proficiency, understand exam structure, and practice real IELTS-style questions."
  }
];

const CourseDetails = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-[1200px]">
      <h1 className="mb-4 text-black md:text-2xl">Course details</h1>

      <div className="rounded-lg border border-gray-200 divide-y divide-dotted divide-gray-300 bg-white">
        {accordionData.map((item, index: number) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex cursor-pointer justify-between items-center px-4 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              {item.title}
              <IoChevronDownCircleOutline
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
