import React from "react";

const CheckList = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200">
        <div className="mb-4 text-center">
          <p className="text-3xl font-bold text-gray-800">
            ৳3850{" "}
            <span className="line-through text-gray-400 text-xl ml-2">
              ৳5000
            </span>
          </p>
          <span className="text-sm text-white bg-red-500 px-2 py-1 rounded-full inline-block mt-2">
            1150 ৳ ছাড়
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
