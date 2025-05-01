import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LiquidHoverButton = ({
  text = "Join Cohort Now",
  link = "https://courses.chaicode.com/learn/view-all?show=batch&type=17",
}) => {
  return (
    <div className="flex justify-center items-center py-10 px-4 cursor-pointer">
      <a href={link}>
        <button className="relative group overflow-hidden border-2 border-orange-500 rounded-full px-8 py-3 sm:px-10 sm:py-4 text-lg sm:text-2xl font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300">
          {/* Fill animation layer */}
          <motion.span
            className="absolute inset-0 bg-orange-500 z-0"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              borderRadius: "9999px",
              transformOrigin: "left",
            }}
          />

          {/* Button content (keeps above the fill) */}
          <span className="relative z-10 flex items-center space-x-2 cursor-pointer">
            <ArrowRight className="animate-pulse" size={24} />
            <span>{text}</span>
          </span>
        </button>
      </a>
    </div>
  );
};

export default LiquidHoverButton;
