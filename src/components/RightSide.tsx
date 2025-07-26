import {
  FaUsers,
  FaClock,
  FaVideo,
  FaBookOpen,
  FaFacebook,
  FaCheckCircle,
} from "react-icons/fa";
import { PiBookBookmarkDuotone } from "react-icons/pi";
import { IoMdPlayCircle } from "react-icons/io";
import { MdOutlineSubtitles } from "react-icons/md";
import Image from "next/image";

const RightSide = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-4">
      {/* Carousel Placeholder */}
      <div className="relative mb-4">
        <Image src="/Instructors.jpg" width={400} height={110} alt="img" />
        <button className="absolute inset-0 flex items-center justify-center">
          <IoMdPlayCircle size={64} className="text-white opacity-80" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto mb-4">
        {["slide1.png", "slide2.png", "slide3.png", "slide4.png"].map(
          (img, idx) => (
            <Image
              key={idx}
              src="/Instructors.jpg"
              width={64}
              height={64}
              alt="img"
            />
          )
        )}
      </div>

      {/* Price & Enroll */}
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-900">
          ৳3850{" "}
          <span className="line-through text-gray-400 text-sm">৳5000</span>
        </p>
        <p className="text-red-500 text-sm font-medium mb-2">১১৫০ ৳ ছাড়</p>
        <button className="bg-green-600 text-white font-semibold px-4 py-2 rounded w-full">
          Enroll
        </button>
      </div>

      {/* Course Features */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          এই কোর্সে যা থাকবে
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-center gap-2">
            <FaUsers /> Total Enrolled 33007
          </li>
          <li className="flex items-center gap-2">
            <FaClock /> Time Required 50 hours
          </li>
          <li className="flex items-center gap-2">
            <FaVideo /> 54 Videos
          </li>
          <li className="flex items-center gap-2">
            <FaBookOpen /> 10 Reading & 10 Listening Mocktests
          </li>
          <li className="flex items-center gap-2">
            <MdOutlineSubtitles /> 38 Lecture Sheets
          </li>
          <li className="flex items-center gap-2">
            <FaVideo /> 25 Video Lectures
          </li>
          <li className="flex items-center gap-2">
            <PiBookBookmarkDuotone /> 1 Free Hardcopy Book Delivered
          </li>
          <li className="flex items-center gap-2">
            <FaFacebook /> Facebook Support Group
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle /> Course Validity Lifetime
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-sm text-gray-500 border-t pt-4">
        কোর্সটি সম্পর্কে বিস্তারিত জানতে
        <a href="tel:16910" className="block mt-2 text-green-600 font-bold">
          ফোন করুন (16910)
        </a>
      </div>
    </div>
  );
};

export default RightSide;
