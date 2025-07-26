

import React from "react";
import { FaStar } from "react-icons/fa";

const Header = ({data}) => {

  return (
    <div className="bg-[#030116] text-white flex items-center min-h-[300px] py-8 md:py-0">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-6 px-4">
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            IELTS Course by Munzereen Shahid
          </h1>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex text-yellow-400 text-xl gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-white text-sm">
              (৮২.৬% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
            </p>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Academic IELTS এবং General Training IELTS-এর কমপ্লিট প্রিপারেশন নিন
            একটি কোর্সেই! দেশসেরা IELTS Instructor-এর গাইডলাইনে আপনার কাঙ্ক্ষিত
            ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS Course-এ।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
