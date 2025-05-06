import React from "react";
import { motion } from "framer-motion";
import DeviderLine from "../DeviderLine/DeviderLine";
import CourseCarousel from "../CourseCarousel/CourseCarousel";
import PremiumButton from "../Button/LiquidButton";

function CohortSection() {
  return (
    <div id="cohort">
      <DeviderLine />
      <div className="py-8 px-4 md:px-8 lg:px-24">
        <CourseCarousel />

        <PremiumButton
          text="View All Cohorts"
          link="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
        />

        <DeviderLine />
      </div>
    </div>
  );
}

export default CohortSection;
