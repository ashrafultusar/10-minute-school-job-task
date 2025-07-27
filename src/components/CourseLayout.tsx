import Image from "next/image";
import React from "react";


type LayoutItem = {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
};

type PDFSection = {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
};

type CourseLayoutProps = {
  data: {
    name?: string;
    values: LayoutItem[];
  };
  data1?: {
    values?: PDFSection[];
  };
};


const CourseLayout: React.FC<CourseLayoutProps> = ({ data, data1 }) => {
  const pdf = data1?.values?.[0];

  return (
    <div className="mb-10">
      <h1 className="md:text-2xl mb-4">{data?.name}</h1>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0F172A] text-white p-6 rounded-sm">
          {data?.values?.map((item) => (
            <div key={item?.id} className="flex items-start gap-4">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={`icon-${item.title}`}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-md mb-1">{item.title}</h3>
                <p className="text-sm leading-snug opacity-70">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {pdf && pdf.background && pdf.cta && (
        <section
          className="text-white p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6"
          style={{
            backgroundImage: `url(${pdf.background.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 relative">
                <Image
                  src={pdf.top_left_icon_img}
                  alt="Top Left Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-orange-400">Free PDF</h2>
            </div>
            <h3
              className="text-lg font-semibold"
              style={{ color: pdf.title_color || "#ffffff" }}
            >
              {pdf.title}
            </h3>
            <p
              className="text-sm"
              style={{ color: pdf.description_color || "#e0e0e0" }}
            >
              {pdf.description}
            </p>
            <a
              href={pdf.cta.clicked_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded mt-2 text-sm"
            >
              {pdf.cta.text || "Download"}
            </a>
          </div>

          {pdf.thumbnail && (
            <div className="flex-shrink-0 w-full md:w-60">
              <Image
                src={pdf.thumbnail}
                alt="PDF Preview"
                width={240}
                height={160}
                className="rounded-md object-cover"
              />
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default CourseLayout;
