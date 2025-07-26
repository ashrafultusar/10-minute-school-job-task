import Image from "next/image";
import React from "react";

type ExclusiveFeatureItem = {
  title: string;
  checklist: string[];
  file_url: string;
};

type ExclusiveFeatureProps = {
  data: {
    name?: string;
    values: ExclusiveFeatureItem[];
  };
};

const ExclusiveFeature: React.FC<ExclusiveFeatureProps> = ({ data }) => {
  const item1 = data?.values?.[0];
  const item2 = data?.values?.[1];
 

  return (
    <div className="mb-10">
      <h1 className="mb-4 text-black md:text-2xl">{data?.name}</h1>

      <div className="bg-white rounded-lg shadow p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
      
        {item1 && (
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex-1 space-y-2">
              <h3 className="text-base font-semibold text-gray-800">
                {item1?.title}
              </h3>

              <ul className="text-sm text-gray-700 space-y-1">
                {item1?.checklist.map((item, index) => (
                  <li key={index}>✔️ {item}</li>
                ))}
              </ul>
            </div>

            {item1.file_url && (
              <div className="w-full md:w-[200px] flex-shrink-0">
                <Image
                  src={item1?.file_url}
                  alt="Video Lectures"
                  width={200}
                  height={200}
                  className="rounded"
                />
              </div>
            )}
          </div>
        )}

        <hr className="border-gray-200" />

       
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-1 space-y-2">
            <h3 className="text-base font-semibold text-gray-800">
              {item2?.title}
            </h3>

            {item2?.checklist.map((item,index)=><ul key={index} className="text-sm text-gray-700 space-y-1">
              <li>✔️{item}</li>
            </ul>)}
            
              
              
          </div>
          <div className="w-full md:w-[200px] flex-shrink-0">
            <Image
              src={item2?.file_url}
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
