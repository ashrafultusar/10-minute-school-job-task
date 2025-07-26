import Image from "next/image";
import React from "react";

interface Instructor {
  name: string;
  description: string;
}

interface InstructorsData {
  name: string;
  values: Instructor[];
}

const Instructors = ({ data }: { data: InstructorsData }) => {
  

  return (
    <div className="text-black md:text-2xl mb-8">
      <h1 className="mb-4">{data?.name}</h1>

      <div className="flex items-center gap-4 p-4 rounded-lg shadow-sm bg-white">
        <Image
          src="/Instructors.jpg"
          alt="Course Instructor"
          width={64}
          height={64}
          className="rounded-full border-2 border-white shadow"
        />

        <div>
          <h3 className="text-md font-medium text-gray-800 flex items-center gap-1">
            {data?.values[0]?.name}
            <span className="text-blue-600 text-lg">›</span>
          </h3>

          <div
            className="text-sm text-gray-700"
            dangerouslySetInnerHTML={{
              __html: data?.values[0]?.description,
            }}
          />

          <p className="text-sm text-gray-700">
            BA, MA (English), University of Dhaka;
          </p>
          <p className="text-sm text-gray-700">IELTS: 8.5</p>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
