import Image from "next/image";
import React from "react";

const layoutItems = [
  {
    icon: "▶️",
    title: "৫০+ ভিডিও লেকচার",
    desc: "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরণ নিয়ে in-depth আলোচনা।",
  },
  {
    icon: "📘",
    title: "৩৮টি লেকচারের শিট",
    desc: "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
  },
  {
    icon: "📄",
    title: "রিডিং এবং লিসনিং মক টেস্ট",
    desc: "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
  },
  {
    icon: "📡",
    title: "ডাউট সলভিং লাইভ ক্লাস",
    desc: "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারদের কাছে প্র্যাকটিস প্রশ্নের সমাধান এর সুযোগ",
  },
];

const CourseLayout = () => {
  return (
    <div >
      <h1 className="md:text-2xl mb-4">How the course is laid out</h1>
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#0F172A] text-white p-6 ">
          {layoutItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h3 className="font-bold text-md mb-1">{item.title}</h3>
                <p className="text-sm leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-br from-black via-[#1f1f1f] to-[#050505] text-white p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Content */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <div className="text-2xl">📄</div>
            <h2 className="text-xl font-bold text-orange-400">Free PDF</h2>
          </div>
          <h3 className="text-lg font-semibold">
            IELTS Confirm 7+ Score <br /> (Guideline)
          </h3>
          <p className="text-sm text-gray-200">
            IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে।
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded mt-2 text-sm">
            ফ্রি PDF Download করুন
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full md:w-60">
          <Image
            src="/pdf-preview.jpg"
            alt="PDF Preview"
            width={240}
            height={160}
            className="rounded-md"
          />
        </div>
      </section>
    </div>
  );
};

export default CourseLayout;
