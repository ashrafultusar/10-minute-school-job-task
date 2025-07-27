"use client";

import CheckList from "@/components/CheckList";
import Header from "@/components/Header";
import Instructors from "@/components/Instructors";
import LayoutStructure from "@/components/LayoutStructure";
import CourseLayout from "@/components/CourseLayout";
import LearningOutcomes from "@/components/LearningOutcomes";
import ExclusiveFeature from "@/components/ExclusiveFeature";
import CourseDetails from "@/components/CourseDetails";
import { useCourseData } from "@/hooks/useCourseData";
import Trailer from "@/components/Trailer";

export default function Home() {
  const { data } = useCourseData();

  return (
    <div className="text-black ">
      <Header data={data}/>
      <LayoutStructure >
        {/* LEFT Side */}
        <div className="">
          <Instructors data={data?.data?.sections[2]} />
          <CourseLayout data={data?.data?.sections[3]} data1={data?.data?.sections[4]} />
          <LearningOutcomes data={data?.data?.sections[5]}/>
          <ExclusiveFeature data={data?.data?.sections[8]}/>
          <CourseDetails data={data?.data?.sections[7]}/>
        </div>

        {/* RIGHT Side */}
        <div className="md:col-span-5">
          <Trailer data={data?.data?.media}/>
          <CheckList data={data?.data?.checklist}/>
        </div>
      </LayoutStructure>
    </div>
  );
}
