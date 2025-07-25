"use client";
import { useState } from "react";
import { FiMenu, FiPhoneCall, FiSearch, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm  sticky top-0 z-50 text-black">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
   
        <div className="flex items-center gap-2">
          {/* Mobile Menu Icon */}
          <div className="lg:hidden mr-2">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          {/* Logo */}
          <div>
            {/* Replace with your image */}
            {/* <Image src="/logo.png" alt="Logo" className="h-8 w-auto" /> */}
            
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center flex-1 mx-4">
          <div className="flex items-center border rounded-full px-3 py-1 w-full max-w-xl">
            <FiSearch className="text-black" />
            <input
              type="text"
              placeholder="স্কিল কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="outline-none w-full px-2 text-sm text-black"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4">
          {["ক্লাস ৬–১২", "স্কিলস", "ভর্তি পরীক্ষা", "অনলাইন ব্যাচ", "ইংলিশ সেন্টার", "আরো"].map((item, idx) => (
            <div key={idx} className="text-sm text-black hover:text-red-500 cursor-pointer">
              {item}
            </div>
          ))}
          <button className="text-sm border px-2 py-1 rounded text-black">EN</button>
          <div className="text-green-600 flex items-center gap-1">
            <FiPhoneCall />
            <span>16910</span>
          </div>
          <button className="bg-green-600 text-white px-4 py-1 rounded">লগ-ইন</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white px-4 py-3 border-t">
          <div className="mb-3">
            <input
              type="text"
              placeholder="স্কিল কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="w-full border rounded-full px-4 py-2 text-sm text-black"
            />
          </div>
          <div className="flex flex-col gap-2">
            {["ক্লাস ৬–১২", "স্কিলস", "ভর্তি পরীক্ষা", "অনলাইন ব্যাচ", "ইংলিশ সেন্টার", "আরো"].map((item, idx) => (
              <div key={idx} className="text-sm text-black border-b py-1">
                {item}
              </div>
            ))}
            <div className="flex justify-between items-center mt-2">
              <button className="text-sm border px-3 py-1 rounded text-black">EN</button>
              <div className="text-green-600 flex items-center gap-1">
                <FiPhoneCall />
                <span>16910</span>
              </div>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded mt-2">
              লগ-ইন
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
