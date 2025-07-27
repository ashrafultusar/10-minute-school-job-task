// "use client";

// import CheckList from "@/components/CheckList";
// import Header from "@/components/Header";
// import Instructors from "@/components/Instructors";
// import LayoutStructure from "@/components/LayoutStructure";
// import CourseLayout from "@/components/CourseLayout";
// import LearningOutcomes from "@/components/LearningOutcomes";
// import ExclusiveFeature from "@/components/ExclusiveFeature";
// import CourseDetails from "@/components/CourseDetails";
// import { useCourseData } from "@/hooks/useCourseData";
// import Trailer from "@/components/Trailer";

// export default function Home() {
//   const { data } = useCourseData();

//   return (
//     <div className="text-black ">
//       <Header data={data}/>
//       <LayoutStructure >
//         {/* LEFT Side */}
//         <div className="">
//           <Instructors data={data?.data?.sections[2]} />
//           <CourseLayout data={data?.data?.sections[3]} data1={data?.data?.sections[4]} />
//           <LearningOutcomes data={data?.data?.sections[5]}/>
//           <ExclusiveFeature data={data?.data?.sections[8]}/>
//           <CourseDetails data={data?.data?.sections[7]}/>
//         </div>

//         {/* RIGHT Side */}
//         <div className="md:-mt-72">
//           <Trailer data={data?.data?.media}/>
//           <CheckList data={data?.data?.checklist}/>
//         </div>
//       </LayoutStructure>
//     </div>
//   );
// }

"use client";

import { useCourseData } from "@/hooks/useCourseData";
import CheckList from "@/components/CheckList";
import Header from "@/components/Header";
import Instructors from "@/components/Instructors";
import LayoutStructure from "@/components/LayoutStructure";
import CourseLayout from "@/components/CourseLayout";
import LearningOutcomes from "@/components/LearningOutcomes";
import ExclusiveFeature from "@/components/ExclusiveFeature";
import CourseDetails from "@/components/CourseDetails";
import Trailer from "@/components/Trailer";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const { data } = useCourseData();

  const rightRef = useRef<HTMLDivElement | null>(null);
  const trailerRef = useRef<HTMLDivElement | null>(null);

  const [isSticky, setIsSticky] = useState(false);

  const [rightOffsetLeft, setRightOffsetLeft] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const trailerBottom = trailerRef.current?.getBoundingClientRect().bottom;

      if (trailerBottom !== undefined) {
        setIsSticky(trailerBottom <= 100);
      }

      if (rightRef.current) {
        const rect = rightRef.current.getBoundingClientRect();

        setRightOffsetLeft(rect.left);
        setRightWidth(rect.width);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="text-black">
      <Header data={data} />

      <LayoutStructure>
        {/* LEFT Side */}
        <div>
          <Instructors data={data?.data?.sections[2]} />
          <CourseLayout
            data={data?.data?.sections[3]}
            data1={data?.data?.sections[4]}
          />
          <LearningOutcomes data={data?.data?.sections[5]} />
          <ExclusiveFeature data={data?.data?.sections[8]} />
          <CourseDetails data={data?.data?.sections[7]} />
        </div>

        {/* RIGHT Side */}
        <div className="hidden md:block md:-mt-72" ref={rightRef}>
          <div ref={trailerRef}>
            <Trailer data={data?.data?.media} />
          </div>

          {!isSticky && <CheckList data={data?.data?.checklist} />}
        </div>
      </LayoutStructure>

      {isSticky && (
        <div
          className="hidden md:block fixed z-50"
          style={{
            top: 100,
            left: rightOffsetLeft,
            width: rightWidth,
          }}
        >
          <CheckList data={data?.data?.checklist} />
        </div>
      )}
    </div>
  );
}
