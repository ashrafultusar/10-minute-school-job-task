import React from "react";

const CheckList = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto p-6 bg-white ">
       {/* Price Section */}
       <div className="mb-4 flex items-center space-x-2">
          <p className="text-3xl font-bold text-gray-800">৳3850</p>
          <p className="line-through text-gray-400 text-xl">৳5000</p>
          <span className="text-sm text-white bg-orange-500 px-2 py-1 rounded">
            ● 1150 ৳ ছাড়
          </span>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mb-4">
          Enroll
        </button>

        <div className="space-y-3 text-sm text-gray-700">
          <p>👥 Total Enrolled 32995</p>
          <p>⏱️ Time Required 50 hours</p>
          <p>🎥 54 Videos</p>
          <p>📝 10 Reading & 10 Listening Mocktests</p>
          <p>📄 38 Lecture Sheets</p>
          <p>🎬 25 Video Lectures</p>
          <p>📦 1 Free Hardcopy Book Delivered</p>
          <p>💬 Facebook Support Group</p>
          <p>⏳ Course Validity Lifetime</p>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        কোর্সটি সম্পর্কে বিস্তারিত জানতে
        <p className="text-green-600 font-bold mt-1">📞 ফোন করুন (16910)</p>
      </div>
    </div>
  );
};

export default CheckList;
