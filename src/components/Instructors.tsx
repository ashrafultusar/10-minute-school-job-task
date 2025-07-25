import Image from "next/image";
import React from "react";

const Instructors = () => {
  return (
    <div className="text-black md:text-2xl">
      <h1>{"Course instructor"}</h1>

      <div className="flex items-center gap-4 p-4  rounded-lg shadow-sm bg-white">
        <Image
          src="/Instructors.jpg"
          alt="Course Instructor"
          width={64}
          height={64}
          className=" rounded-full border-2 border-white shadow"
        />

        <div>
          <h3 className="text-md font-medium text-gray-800 flex items-center gap-1">
            Munzereen Shahid
            <span className="text-blue-600 text-lg">›</span>
          </h3>
          <p className="text-sm text-gray-700">
            MSc (English), University of Oxford (UK);
          </p>
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
