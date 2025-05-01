import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const PremiumButton = ({
  text = "Join Cohort Now",
  link = "https://courses.chaicode.com/learn/view-all?show=batch&type=17",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <a 
        href={link} 
        target="_blank" 
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <motion.div 
          className="absolute -inset-4 rounded-2xl blur-sm bg-gradient-to-r from-orange-400/60 to-orange-500/60 opacity-0  transition-opacity duration-500"
          animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        
        {/* Button container with gradient border */}
        <div className="relative rounded-2xl p-0.5 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 ">
          <motion.div 
            className="relative rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 backdrop-blur-sm p-px overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Main button */}
            <motion.div 
              className="relative rounded-2xl px-4 py-4 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden  flex items-center justify-center"
            >
              {/* Animated liquid effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600"
                initial={{ y: "100%" }}
                animate={isHovered ? { 
                  y: "-100%", 
                  transition: { duration: 0.8, ease: "easeInOut" } 
                } : { 
                  y: "100%", 
                  transition: { duration: 0.4, ease: "easeInOut" } 
                }}
              />
              
              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 opacity-30"
                initial={{ x: "-100%" }}
                animate={isHovered ? { 
                  x: "100%", 
                  transition: { duration: 0.6, ease: "easeInOut" } 
                } : {}}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                }}
              />

              {/* Sparkle particles */}
              {isHovered && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-white"
                      initial={{ 
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 60 - 30,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{ 
                        y: [null, -40 - Math.random() * 40],
                        opacity: [0, 1, 0],
                        scale: [0, 1 + Math.random(), 0]
                      }}
                      transition={{ 
                        duration: 1 + Math.random() * 1,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2
                      }}
                    />
                  ))}
                </>
              )}

              {/* Text content */}
              <motion.div 
                className="relative flex items-center gap-3 text-white font-bold text-lg sm:text-xl tracking-wide z-10"
                animate={isHovered ? { x: [0, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white/90">{text}</span>
                <motion.span
                  animate={isHovered ? { x: [0, 5, 0] } : {}}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: isHovered ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                >
                  <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium indicator */}
        <motion.div 
          className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-amber-300 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="w-3 h-3" />
          <span className="text-cyan-900">startLearning()</span>
        </motion.div>
      </a>
    </div>
  );
};

export default PremiumButton;