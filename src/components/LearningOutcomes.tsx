import React from "react";
import { FaCheck } from "react-icons/fa";

// ✅ Type definition
type LearningOutcomeItem = {
  color: string;
  icon: string;
  id: string;
  text: string;
};

type LearningOutcomesProps = {
  data: {
    name?: string;
    values: LearningOutcomeItem[];
  };
};

const LearningOutcomes: React.FC<LearningOutcomesProps> = ({ data }) => {
  return (
    <div className="mb-10">
      <h1 className="mb-4 text-black md:text-2xl">{data?.name}</h1>

      <section>
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
            {data?.values?.map((point) => (
              <div key={point.id} className="flex items-start gap-3">
                <FaCheck className="text-blue-500 mt-1 text-xl" />
                <p className="text-gray-800 text-md leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningOutcomes;
