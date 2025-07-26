import { useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";

type AccordionItem = {
  id: string;
  title: string;
  description: string; 
  icon?: string;
};

type Props = {
  data: {
    name?: string;
    values: AccordionItem[];
  };
};

const CourseDetails: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-[1200px]">
      <h1 className="mb-4 text-black md:text-2xl">{data?.name}</h1>

      <div className="rounded-lg border border-gray-200 divide-y divide-dotted divide-gray-300 bg-white">
        {data?.values?.map((item, index) => (
          <div key={item.id}>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex cursor-pointer justify-between items-center px-4 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
             
              <span dangerouslySetInnerHTML={{ __html: item.title }} />
              <IoChevronDownCircleOutline
                className={`w-5 h-5 transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

           
            {activeIndex === index && (
              <div
                className="px-4 pb-4 text-sm text-gray-600"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
