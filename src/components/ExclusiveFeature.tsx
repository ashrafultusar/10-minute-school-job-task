import Image from "next/image";
import React from "react";

const ExclusiveFeature = () => {
  return (
    <div>
      <h1 className="mb-4 text-black md:text-2xl">Course Exclusive Feature</h1>

      <div className="bg-white  rounded-lg shadow p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
        {/* Video Lectures Section */}
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-1 space-y-2">
            <h3 className="text-base font-semibold text-gray-800">
              ভিডিও লেকচার
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✔️ IELTS Academic ও General Training নিয়ে আলোচনা</li>
              <li>
                ✔️ Reading, Writing, Listening ও Speaking এর Overview & Format
              </li>
              <li>✔️ প্রতিটি প্রশ্নের ধরণ-ভিত্তিক উত্তর করার স্ট্রাটেজি</li>
              <li>✔️ ভিডিওর সাথে প্র্যাকটিসের সুযোগ</li>
            </ul>
          </div>
          <div className="w-full md:w-[200px] flex-shrink-0">
            <Image
              src="/Instructors.jpg"
              alt="Video Lectures"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
        </div>

        <hr className="border-gray-200 " />

        {/* Mock Tests Section */}
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-1 space-y-2">
            <h3 className="text-base font-semibold text-gray-800">
              Reading ও Listening Mock Tests
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✔️ 10 Reading & 10 Listening Mock Tests</li>
              <li>✔️ Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স</li>
              <li>✔️ উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট</li>
              <li>✔️ যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট</li>
            </ul>
          </div>
          <div className="w-full md:w-[200px] flex-shrink-0">
            <Image
              src="/Instructors.jpg"
              alt="Mock Tests"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveFeature;
