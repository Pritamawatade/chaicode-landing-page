import React from "react";
import { motion } from "framer-motion";
import DeviderLine from "../DeviderLine/DeviderLine";
import CourseCarousel from "../CourseCarousel/CourseCarousel";


function CohortSection() {
  return (
    <>
      <DeviderLine />
      <div className="py-8 px-4 md:px-8 lg:px-24">
         <CourseCarousel />
      </div>
    </>
  );
}

export default CohortSection;
