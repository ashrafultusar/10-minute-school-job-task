"use client";

import CheckList from "@/components/CheckList";
import Header from "@/components/Header";
import Instructors from "@/components/Instructors";
import LayoutStructure from "@/components/LayoutStructure";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <div className="text-black ">
      <Header></Header>
      <LayoutStructure>
        {/* LEFT Side */}
        <div className="md:col-span-7 space-y-6 max-w-5xl">
          <Instructors></Instructors>
          <Overview></Overview>
        </div>

        {/* RIGHT Side */}
        <div className="md:col-span-5 space-y-6">
          <CheckList></CheckList>
        </div>
      </LayoutStructure>
    </div>
  );
}
