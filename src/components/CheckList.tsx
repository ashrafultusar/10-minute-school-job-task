import React from "react";
import Image from "next/image";

type ChecklistItem = {
  id: string;
  icon: string;
  text: string;
  color: string;
  list_page_visibility: boolean;
};

type CheckListProps = {
  data: {
    checklist: ChecklistItem[];
  };
};

const CheckList: React.FC<CheckListProps> = ({ data }) => {



  return (
    <div>
      <div className="max-w-sm mx-auto p-6 bg-white">
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

        {/* Checklist Section */}
        <div className="space-y-3 text-sm text-gray-700">
          <h2 className="font-semibold mb-2">এই কোর্সে যা থাকছে</h2>

          {data?.map((item) => (
            <div key={item.id} className="flex items-center gap-2">
              <div className="w-5 h-5 relative flex-shrink-0">
                <Image
                  src={item?.icon}
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
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
