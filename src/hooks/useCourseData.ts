import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";



export const useCourseData = () => {
  const { language } = useLanguage();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${language}`,
        {
          headers: {
            "X-TENMS-SOURCE-PLATFORM": "web",
            accept: "application/json",
          },
        }
      );
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, [language]);

  return { data };
};
