"use client";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiPhoneCall, FiSearch, FiX } from "react-icons/fi";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  const [mobileOpen, setMobileOpen] = useState(false);
 

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 text-black">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between lg:gap-6">
        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
        </div>

        <div className="hidden lg:flex items-center border rounded-full px-3 py-1 flex-1 max-w-xl">
          <FiSearch className="text-black" />
          <input
            type="text"
            placeholder="স্কিল কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
            className="outline-none w-full px-2 text-sm text-black"
          />
        </div>

        <div className="hidden lg:flex items-center gap-4 text-sm">
          {[
            "ক্লাস ৬–১২",
            "স্কিলস",
            "ভর্তি পরীক্ষা",
            "অনলাইন ব্যাচ",
            "ইংলিশ সেন্টার",
            "আরো",
          ].map((item, idx) => (
            <div
              key={idx}
              className="hover:text-red-500 cursor-pointer whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 text-sm whitespace-nowrap">
          <button
            onClick={toggleLanguage}
            className="border px-2 cursor-pointer py-1 rounded text-black"
          >
            {language === "en" ? "বাং" : "EN"}
          </button>

          <div className="text-green-600 flex items-center gap-1">
            <FiPhoneCall />
            <span>16910</span>
          </div>
          <button className="bg-green-600 text-white px-4 py-1 rounded">
            লগ-ইন
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <Image src="/logo.png" alt="Logo" width={64} height={64} />
            <button onClick={() => setMobileOpen(false)}>
              <FiX size={24} />
            </button>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="স্কিল কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="w-full border rounded-full px-4 py-2 text-sm text-black"
            />
          </div>

          <div className="flex flex-col gap-4 text-lg text-black">
            {[
              "ক্লাস ৬–১২",
              "স্কিলস",
              "ভর্তি পরীক্ষা",
              "অনলাইন ব্যাচ",
              "ইংলিশ সেন্টার",
              "আরো",
            ].map((item, idx) => (
              <div key={idx} className="border-b pb-2 cursor-pointer">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
