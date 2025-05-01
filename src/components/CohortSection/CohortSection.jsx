import React from "react";
import { motion } from "framer-motion";

function CohortSection() {
  return (
    <div className="py-12 px-4 md:px-12 lg:px-24">
      <div className="flex justify-center mt-12 p-0 border-amber-300">
        <div data-aos="fade-up">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl text-orange-600 pb-2"
          >
            <span className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f59e0c] letter-spacing">
              Cohorts
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-[#f59e0c] rounded-full"
              />
            </span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default CohortSection;
