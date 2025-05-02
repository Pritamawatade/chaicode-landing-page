import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Star,
  Code,
  Coffee,
  Terminal,
  User,
  Brain,
  Zap,
  Quote,
  ChevronLeft,
  ChevronRight,
  View,
} from "lucide-react";
import PremiumButton from "../Button/LiquidButton";
import DeviderLine from "../DeviderLine/DeviderLine";
// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "Frontend Developer at Microsoft",
    image:
      "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?semt=ais_hybrid&w=740",
    testimonial:
      "Chai Code transformed my career. I went from struggling with basic JS to building complex React applications in just 3 months. The instructors are exceptional and the community support is unmatched.",
    rating: 4,
    codingLanguage: "JavaScript",
    favoriteTag: "<React />",
  },
  {
    id: 2,
    name: "Rahul Patel",
    position: "Full-Stack Engineer at Flipkart",
    image:
      "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?semt=ais_hybrid&w=740",
    testimonial:
      "The backend specialization course was exactly what I needed. The practical approach to system design and databases helped me ace my interviews. Worth every rupee and minute spent!",
    rating: 5,
    codingLanguage: "Python",
    favoriteTag: "def main():",
  },
  {
    id: 3,
    name: "Ananya Desai",
    position: "Machine Learning Engineer at Amazon",
    image:
      "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?semt=ais_hybrid&w=740",
    testimonial:
      "From zero coding knowledge to deploying ML models - Chai Code made it possible. The personalized mentorship and project-based curriculum gave me the confidence to switch careers.",
    rating: 5,
    codingLanguage: "Python",
    favoriteTag: "model.fit()",
  },
  {
    id: 4,
    name: "Vikram Singh",
    position: "Blockchain Developer & Startup Founder",
    image:
      "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?semt=ais_hybrid&w=740",
    testimonial:
      "I launched my Web3 startup after completing the blockchain bootcamp. The network I built through Chai Code's community became my first investors and team members. Life-changing experience!",
    rating: 5,
    codingLanguage: "Solidity",
    favoriteTag: "contract {",
  },
  {
    id: 5,
    name: "Neha Gupta",
    position: "Senior Developer at Google",
    image:
      "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?semt=ais_hybrid&w=740",
    testimonial:
      "After 10 years in traditional IT, I needed to upskill fast. Chai Code's advanced courses and mentors helped me pivot into modern development practices and land my dream role.",
    rating: 5,
    codingLanguage: "TypeScript",
    favoriteTag: "interface Props {",
  },
];

// Coding Easter Egg Component
const CodingEasterEgg = ({ active, language, tag }) => {
  const snippets = {
    JavaScript: `function success() {
          return "Chai Code Graduate";
        }`,
    Python: `def get_job():
            skills = learn("chai_code")
            return dream_offer()`,
    TypeScript: `interface Developer {
          skills: string[];
          salary: number;
          happiness: 100;
        }`,
    Solidity: `contract ChaiGrad {
          uint public value = 100;
          function success() public {
            value *= 10;
          }
        }`,
  };

  return (
    <AnimatePresence>
      {active && (
        <div className="opacity-55">
          <motion.div
          className="absolute -right-4 top-12  bg-gray-900 text-orange-300 p-3 rounded-lg shadow-xl transform rotate-2 z-20 text-xs font-mono"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="opacity-50 flex items-center gap-2 mb-2 text-orange-400 border-b border-orange-800 pb-1">
            <Code size={12} />
            <span>{language}</span>
          </div>
          <pre className="whitespace-pre">
            {snippets[language] || snippets.JavaScript}
          </pre>
          <div className="mt-2 flex justify-end text-orange-400">
            <span>{tag}</span>
          </div>
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 + 0.3 }}
        >
          <Star
            fill={i < rating ? "#ffffff" : "none"}
            stroke={i < rating ? "#f97316" : "#cbd5e1"}
            size={16}
            className={`${i < rating ? "text-white" : "text-gray-300"}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Individual Testimonial Card
const TestimonialCard = ({ testimonial, isActive }) => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [codeHovered, setCodeHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({ scale: 1, opacity: 1 });
    } else {
      controls.start({ scale: 0.95, opacity: 0.7 });
    }
  }, [isActive, controls]);

  return (
    <motion.div
      className="relative bg-orange-600 rounded-2xl shadow-xl overflow-hidden w-full max-w-md mx-auto"
      animate={controls}
      initial={{ scale: 0.95, opacity: 0.7 }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => isActive && setShowEasterEgg(true)}
      onHoverEnd={() => setShowEasterEgg(false)}
      style={{
        transformOrigin: "center",
        boxShadow: isActive
          ? "0 20px 25px -5px rgba(249, 115, 22, 0.25), 0 8px 10px -6px rgba(249, 115, 22, 0.1)"
          : "",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-gradient-to-tl from-orange-100 to-black opacity-50"></div>
        <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br from-orange-100 to-transparent opacity-30"></div>

        {/* Code symbols background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
          {isActive &&
            [...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-xs font-mono text-orange-900"
                style={{
                  top: `${15 + Math.random() * 70}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.7,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {
                  [
                    "{",
                    "}",
                    "()",
                    "=>",
                    "&&",
                    "||",
                    "<=",
                    ">=",
                    "!=",
                    "==",
                    "++",
                    "--",
                  ][Math.floor(Math.random() * 12)]
                }
              </motion.div>
            ))}
        </div>
      </div>

      <div className="p-6 pt-4 relative">
        {/* Coffee cup easter egg */}
        <motion.div
          className="absolute -right-2 -top-2 text-orange-500 opacity-80"
          animate={isActive ? { rotate: [-5, 5, -5], y: [0, -3, 0] } : {}}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Coffee size={24} />
          <motion.div
            className="absolute top-0 w-1 h-3 bg-orange-400/50 rounded-full"
            style={{ left: "50%", marginLeft: "-1px", marginTop: "-4px" }}
            animate={
              isActive ? { height: [3, 5, 3], opacity: [0.5, 0.8, 0.5] } : {}
            }
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>

        {/* Header with user info */}
        <div className="flex mb-4 items-center">
          <div className="mr-4 relative">
            {/* Profile image container with border */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full rounded-full overflow-hidden"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Coding language badge */}
            <motion.div
              className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md cursor-help"
              whileHover={{ scale: 1.2, rotate: 10 }}
              onHoverStart={() => setCodeHovered(true)}
              onHoverEnd={() => setCodeHovered(false)}
            >
              {testimonial.codingLanguage === "JavaScript" && (
                <div className="bg-yellow-400 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  JS
                </div>
              )}
              {testimonial.codingLanguage === "Python" && (
                <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  PY
                </div>
              )}
              {testimonial.codingLanguage === "TypeScript" && (
                <div className="bg-blue-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  TS
                </div>
              )}
              {testimonial.codingLanguage === "Solidity" && (
                <div className="bg-gray-800 text-gray-200 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  SO
                </div>
              )}
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="font-bold text-white flex items-center gap-1"
              whileHover={{ x: 3 }}
            >
              {testimonial.name}
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Terminal size={14} className="text-orange-500 ml-1" />
                </motion.span>
              )}
            </motion.h3>
            <p className="text-gray-50 text-sm">{testimonial.position}</p>
            <div className="mt-1">
              <StarRating rating={testimonial.rating} />
            </div>
          </div>
        </div>

        {/* Testimonial text */}
        <div className="relative">
          <div className="absolute -left-1 -top-1 text-orange-300 opacity-30">
            <Quote size={32} />
          </div>
          <motion.p
            className="text-gray-50 pt-2 pl-6 relative z-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {testimonial.testimonial}
          </motion.p>
        </div>

        {/* Footer with Chai Code brand */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
          <motion.div
            className="flex items-center text-sm text-orange-600 font-medium gap-1"
            whileHover={{ x: 5 }}
          >
            <Coffee size={14} className="text-orange-500" />
            <span>Chai Code Graduate</span>
          </motion.div>

          <motion.div
            className="bg-orange-50 py-1 px-2 rounded-md text-orange-600 text-xs flex items-center gap-1 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => isActive && setShowEasterEgg(!showEasterEgg)}
          >
            <View size={12} />
            <span>View Code</span>
          </motion.div>
        </div>
      </div>

      {/* Coding language easter egg */}
      <CodingEasterEgg
        active={showEasterEgg || codeHovered}
        language={testimonial.codingLanguage}
        tag={testimonial.favoriteTag}
      />
    </motion.div>
  );
};

// Main Testimonials Carousel
export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const constraintsRef = useRef(null);
  const slideTimerRef = useRef(null);

  // Handle Next and Previous
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Reset slide timer when activeIndex changes
  useEffect(() => {
    clearTimeout(slideTimerRef.current);
    slideTimerRef.current = setTimeout(handleNext, 8000);
    return () => clearTimeout(slideTimerRef.current);
  }, [activeIndex]);

  // Binary effect for background
  const BinaryBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono text-orange-900"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7,
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-16 relative overflow-hidden">
      <BinaryBackground />

      {/* Floating code icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-orange-200"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          >
            {
              [
                <Terminal size={32} />,
                <Code size={28} />,
                <Coffee size={30} />,
                <Brain size={34} />,
                <Zap size={26} />,
              ][i]
            }
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block relative mb-2"
            whileHover={{
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Coffee className="inline-block text-orange-500 mr-2" size={28} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full">
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent inline-block"
            whileInView={{ scale: [0.95, 1.05, 1] }}
            transition={{ duration: 1, times: [0, 0.7, 1] }}
          >
            Student Success Stories
          </motion.h2>

          <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto"></div>

          <motion.p
            className="text-gray-700 mt-4 max-w-2xl mx-auto relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hear from our graduates who transformed their careers with Chai
            Code's immersive learning experience
          </motion.p>

          {/* Orange decorative bubbles */}
          <motion.div
            className="absolute top-0 -left-4 w-6 h-6 rounded-full bg-orange-300 opacity-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 -right-2 w-4 h-4 rounded-full bg-orange-500 opacity-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        {/* Main Carousel */}
        <div className="relative" ref={constraintsRef}>
          <div className="flex justify-center items-center min-h-[300px] py-8">
            <AnimatePresence mode="popLayout">
              {testimonials.map((testimonial, index) => {
                // Calculate relative position to active
                const relativeIndex =
                  (index - activeIndex + testimonials.length) %
                  testimonials.length;
                let position = 0;
                let show = false;

                // Determine if card should be shown and its position
                if (relativeIndex === 0) {
                  position = 0;
                  show = true;
                } else if (
                  relativeIndex === 1 ||
                  relativeIndex === testimonials.length - 1
                ) {
                  position = relativeIndex === 1 ? 1 : -1;
                  show = true;
                }

                return show ? (
                  <motion.div
                    key={testimonial.id}
                    className="absolute"
                    custom={position}
                    initial={{
                      opacity: 0,
                      x: direction >= 0 ? 200 : -200,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: position === 0 ? 1 : 0.5,
                      x: position * 500,
                      scale: position === 0 ? 1 : 0.8,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction >= 0 ? -200 : 200,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      isActive={position === 0}
                    />
                  </motion.div>
                ) : null;
              })}
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <motion.button
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-orange-500 -ml-6"
            onClick={handlePrev}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <ChevronLeft />
          </motion.button>

          <motion.button
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-orange-500 -mr-6"
            onClick={handleNext}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <ChevronRight />
          </motion.button>

          {/* Indicators */}
          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? "bg-orange-500 w-8" : "bg-orange-200"
                } transition-all duration-300`}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <StatCard
            icon={<User />}
            number="10,000+"
            text="Successful Students"
          />
          <StatCard icon={<Brain />} number="96%" text="Employment Rate" />
          <StatCard icon={<Zap />} number="250%" text="Average Salary Boost" />
        </motion.div>
      </div>

      <div className="flex items-center justify-center">
        <motion.p
          className="text-2xl md:text-4xl text-white pt-16 font-bold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          You may found your next co-founder with us. Join Now
        </motion.p>
      </div>
      <PremiumButton />

      <DeviderLine />
    </div>
  );
}

// Stats Card Component
const StatCard = ({ icon, number, text }) => {
  return (
    <motion.div
      className="bg-orange-500 rounded-xl border border-orange-100 p-6 shadow-lg relative overflow-hidden"
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(249, 115, 22, 0.2), 0 8px 10px -5px rgba(249, 115, 22, 0.1)",
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-100 to-transparent opacity-60 rounded-full -mt-10 -mr-10" />

      <div className="flex items-center mb-4">
        <motion.div
          className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-4"
          whileHover={{ rotate: 10 }}
        >
          {icon}
        </motion.div>
        <div>
          <motion.div
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {number}
          </motion.div>
          <p className="text-white">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};
