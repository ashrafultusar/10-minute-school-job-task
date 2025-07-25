import React from "react";
import { FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <div className="h-64 bg-[#030116] text-white flex items-center justify-between px-10">
      {/* Left Content */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          IELTS Course by Munzereen Shahid
        </h1>
        <div className="flex items-center gap-2 text-sm mb-2">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-white text-sm">
            (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
          </p>
        </div>
        <p className="text-sm leading-relaxed text-gray-300">
          Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন
          একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত
          ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS Course-এ।
        </p>
      </div>
    </div>
  );
};

export default Header;
