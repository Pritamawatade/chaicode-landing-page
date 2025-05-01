import React from "react";
import { motion } from "framer-motion";

function YtVideo() {
  return (
    <div className="relative w-full px-4 sm:px-8 xl:px-0 mx-auto mt-12 group">
      {/* Animated border layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1000 562.5" preserveAspectRatio="none">
          <motion.rect
            x="0"
            y="0"
            width="1000"
            height="562.5"
            rx="32"
            ry="32"
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="4"
            strokeDasharray="2000"
            strokeDashoffset="0"
            initial={{ strokeDashoffset: 2000 }}
            animate={{
              strokeDashoffset: [2000, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
              repeatDelay: 0,
            }}
          />
          <defs>
            <linearGradient id="borderGradient">
              <stop offset="0%" stopColor="#d1530b" stopOpacity="1" />
              <stop offset="30%" stopColor="#d1530b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#d1530b" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Video container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto rounded-3xl overflow-hidden border-4 border-transparent transition-all duration-300">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/VNb_LawBBWU?si=TjAUsAYus0YHZ6eJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default YtVideo;
