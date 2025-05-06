import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Code,
  Terminal,
  Zap,
  Play,
  Star,
  Tag,
} from "lucide-react";

// Extract YouTube video ID from URL
const getYouTubeID = (url) => {
  const match = url.match(/(?:\/|v=|be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
};

// Sample course data
const dummyCourses = [
  {
    id: 1,
    title: "Web dev cohort 1.0",
    description:
      "Ultimate guide to build software on web with React, Node.js, mongoDB etc.",
    videoLink: "https://youtu.be/yG8JMlldoCE",
    courseLink: "https://hitesh.ai/cohort",
    startDate: "2025-01-11",
    duration: 3,
    regularPrice: 999,
    discountedPrice: 699,
    techStack: ["React", "Node.js", "MongoDB"],
  },

  {
    id: 2,
    title: "Full Stack Data Science 1.0",
    description: "Python machine learning, AI, deep learning, NLP",
    videoLink: "https://youtu.be/Kjd-SWpe1do",
    courseLink: "https://hitesh.ai/data-science",
    startDate: "2025-04-12",
    duration: 6,
    regularPrice: 7999,
    discountedPrice: 6999,
    techStack: ["Python", "Data Science", "pandas"],
  },
  {
    id: 3,
    title: "GenAI with Python",
    description:
      "Build AI applicaiton with rapid speed, including langchain and vectorDB.",
    courseLink: "https://hitesh.ai/genai-cohort",

    videoLink: "https://youtu.be/VNb_LawBBWU",
    startDate: "2025-04-07",
    duration: 4,
    regularPrice: 7999,
    discountedPrice: 4999,
    techStack: ["Python", "langchain", "vectorDB"],
  },
  {
    id: 4,
    title: "DevOps for developers 1.0",
    description:
      "Design scalable systems using AWS, Docker, and Kubernetes with DevOps best practices.",
    courseLink: "https://hitesh.ai/devops-cohort",

    videoLink: "https://youtu.be/oBLpqSHc3lA",
    startDate: "2025-04-15",
    duration: 2,
    regularPrice: 7999,
    discountedPrice: 4999,
    techStack: ["Linux", "Docker", "Kubernetes"],
  },
  {
    id: 5,
    title: "Coding Hero 2025",
    description: "Our community focused program for students.",
    courseLink: "https://courses.chaicode.com/learn/batch/Coding-Hero-2025",

    videoLink: "https://youtu.be/Fw3FezexzV0",
    startDate: "Always",
    duration: "Always",
    regularPrice: 599,
    discountedPrice: 299,
    techStack: ["html", "css", "javascript"],
  },
];

// Course Card Component
const CourseCard = ({ course, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [codeEasterEgg, setCodeEasterEgg] = useState("");
  const videoID = getYouTubeID(course.videoLink);
  const thumbnail = videoID
    ? `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`
    : null;

  // Easter egg code snippets
  const codeSnippets = [
    "function chaiCode() {\n  return 'awesome';\n}",
    "const future = await chaiCode();",
    "while(learning) {\n  skills++;\n}",
    "<div className='success'>You did it!</div>",
  ];

  // Random coding easter egg on mount or when card changes
  useEffect(() => {
    setCodeEasterEgg(
      codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
    );
  }, [course.id]);

  // Format date
  const formatDate = (dateString) => {
    if (dateString === "Always") return "Constant going on";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.div
      className={`max-w-md w-full bg-gradient-to-k bg-[#141f3b] to-[#1a1816] rounded-2xl shadow-xl overflow-hidden ${
        isActive ? "z-10" : "z-0"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isActive ? 1 : 0.85,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: isActive ? 1.03 : 0.88,
        boxShadow: "0 20px 30px -10px rgba(249, 115, 22, 0.3)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Video Thumbnail Section */}
      <div className="relative h-48 overflow-hidden rounded-xl">
        {/* Background image instead of plain orange */}
        {thumbnail ? (
          <img
            src={thumbnail}
            alt="Course video thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90" />
        )}

        {/* Orange overlay for visibility */}
        {/* <div className="absolute inset-0 bg-orange-500 bg-opacity-60" /> */}

        {/* Play Button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <a
            href={course.videoLink}
            target="_blank"
            rel="noreferrer"
            className="relative z-10"
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={24} className="text-orange-500 ml-1" />
            </motion.div>
          </a>
        </motion.div>

        {/* Tech Stack Pills */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
          {course.techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 bg-white bg-opacity-90 rounded-full text-xs font-bold text-orange-600 flex items-center gap-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Code size={12} /> {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative">
        {/* Easter Egg - Floating Code */}
        <AnimatePresence>
          {isHovered && (
            <div className="opacity-75">
              <motion.div
              className="absolute opacity-0 -right-20 top-6 text-xs font-mono text-gray-500 bg-transparent p-2 rounded shadow-md 
              transform -rotate-6 select-none"
              initial={{ opacity: 0, scale: 0.7, right: "-80px" }}
              animate={{ opacity: 0.8, scale: 1, right: "-70px" }}
              exit={{ opacity: 0, scale: 0.7, right: "-80px" }}
              transition={{ duration: 0.3 }}
            >
              <pre className="opacity-100">{codeEasterEgg}</pre>
            </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Title */}
        <motion.h3
          className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {course.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-400 mb-4 text-sm"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {course.description}
        </motion.p>

        {/* Details Section */}
        <motion.div
          className="flex flex-col gap-2 mb-4"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Calendar size={16} className="text-orange-500" />
            <span>Starts {formatDate(course.startDate)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Clock size={16} className="text-orange-500" />
            <span>{course.duration} months duration</span>
          </div>
        </motion.div>

        {/* Price Section */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center">
            <Tag size={16} className="text-orange-500 mr-1" />
            <span className="text-gray-400 line-through text-sm">
              ₹{course.regularPrice}
            </span>
          </div>
          <div className="text-2xl font-bold text-orange-600">
            ₹{course.discountedPrice}
          </div>
          <motion.div
            className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Save ₹{course.regularPrice - course.discountedPrice}
          </motion.div>
        </motion.div>

        {/* Action Button */}
        <a href={course.courseLink} target="_blank">
          <motion.button
            className="w-full py-3 px-6 bg-gradient-to-r cursor-pointer from-orange-600 to-orange-400 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 overflow-hidden relative group"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 15px -3px rgba(249, 115, 22, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="relative z-10 cursor-pointer">Learn More</span>
            <Zap size={18} className="relative z-10" />
          </motion.button>
        </a>
      </div>

      {/* Coding Symbol Easter Egg Corner */}
      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-600 to-transparent opacity-10 flex items-center justify-center"
        animate={{
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Terminal size={24} className="text-orange-900" />
      </motion.div>
    </motion.div>
  );
};

// Main Carousel Component
export default function CourseCarousel({ courses = dummyCourses }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef(null);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate visible card indices based on current index (for desktop view)
  const visibleIndices = [
    currentIndex === 0 ? courses.length - 1 : currentIndex - 1,
    currentIndex,
    currentIndex === courses.length - 1 ? 0 : currentIndex + 1,
  ];

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full py-16 bg-black overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent inline-block"
            whileInView={{ scale: [0.95, 1.05, 1] }}
            transition={{ duration: 1, times: [0, 0.7, 1] }}
          >
            Live Coding Cohorts
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join our interactive live cohorts and learn coding from industry
            experts
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative " ref={carouselRef}>
          {/* Cards */}
          <div className="flex justify-center  items-center min-h-[500px] py-8">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((index, i) => (
                <motion.div
                  key={courses[index].id}
                  className="absolute flex-1"
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 300 : -300,
                  }}
                  animate={{
                    opacity: 1,
                    x: (i - 1) * 420, // Center card at i=1
                    zIndex: i === 1 ? 10 : 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction < 0 ? 300 : -300,
                    zIndex: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <CourseCard course={courses[index]} isActive={i === 1} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-orange-600 ml-[-20px]"
            onClick={handlePrevious}
            whileHover={{ scale: 1.1, backgroundColor: "#FFF7ED", x: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-orange-600 mr-[-19px]"
            onClick={handleNext}
            whileHover={{ scale: 1.1, backgroundColor: "#FFF7ED", x: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronRight size={24} />  
          </motion.button>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {courses.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-orange-500 w-6" : "bg-orange-200"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>

          {/* Coding Easter Egg - Binary Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
            {Array(20)
              .fill()
              .map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xs font-mono text-orange-900"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [0, 100, 0],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 20,
                    repeat: Infinity,
                    delay: Math.random() * 10,
                  }}
                >
                  {Math.random() > 0.5 ? "1" : "0"}
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
