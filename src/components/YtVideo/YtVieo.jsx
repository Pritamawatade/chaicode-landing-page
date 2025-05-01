import React from "react";
import { motion } from "framer-motion";
function YtVieo() {
  return (
    <>
      <div className="relative w-fit mx-auto mt-12 group p-8">
      {/* Animated border layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 900 500"
          preserveAspectRatio="none"
        >
          <motion.rect
            x="0"
            y="0"
            width="900"
            height="500"
            rx="32"
            ry="32"
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="4"
            strokeDasharray="1400"
            strokeDashoffset="0"
            initial={{ strokeDashoffset: 1400 }}
            animate={{
              strokeDashoffset: [1400, 0],
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
      <div className="p-0 rounded-3xl overflow-hidden border-4 border-transparent  transition-all duration-300">
        <iframe
          className="rounded-2xl"
          width="900"
          height="500"
          src="https://www.youtube.com/embed/VNb_LawBBWU?si=TjAUsAYus0YHZ6eJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
    </>
  );
}

export default YtVieo;
