import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Gift,
  Laptop,
  Code,
  BookOpen,
  Presentation,
  Network,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

// Card hover animation variants
const cardVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.2 },
  },
};

// Staggered animation for cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Card component
const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 h-full "
      variants={itemVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2 },
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: [0, 1],
        y: [50, 0],
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      transition={{
        staggerChildren: 1,
        delayChildren: 1, 
      }}
    >
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 rounded-lg bg-orange-500 bg-opacity-20 flex items-center justify-center">
            <Icon size={24} className="text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-orange-500 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

// Large network card component
const NetworkCard = ({ title, description }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 col-span-3 md:col-span-2 relative"
      variants={itemVariants}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="p-6 flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <div className="w-full h-full relative flex items-center justify-center">
            <NetworkGraph />
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 rounded-lg bg-orange-500 bg-opacity-20 flex items-center justify-center">
              <BriefcaseBusiness size={24} className="text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Network Graph Animation
const NetworkGraph = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="relative w-full h-full min-h-32 flex items-center justify-center"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Nodes */}
      <motion.div
        className="w-6 h-6 rounded-full bg-orange-500 absolute"
        style={{ left: "30%", top: "20%" }}
        animate={{
          scale: hovering ? [1, 1.2, 1] : 1,
          boxShadow: hovering
            ? "0 0 8px 2px rgba(249, 115, 22, 0.6)"
            : "0 0 0px rgba(249, 115, 22, 0)",
        }}
        transition={{
          duration: 1.5,
          repeat: hovering ? Infinity : 0,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="w-4 h-4 rounded-full bg-gray-400 absolute"
        style={{ left: "70%", top: "20%" }}
        animate={{
          scale: hovering ? [1, 1.2, 1] : 1,
          boxShadow: hovering
            ? "0 0 6px 2px rgba(156, 163, 175, 0.6)"
            : "0 0 0px rgba(156, 163, 175, 0)",
        }}
        transition={{
          duration: 1.8,
          delay: 0.2,
          repeat: hovering ? Infinity : 0,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="w-8 h-8 rounded-full bg-orange-400 absolute"
        style={{ left: "50%", top: "50%" }}
        animate={{
          scale: hovering ? [1, 1.3, 1] : 1,
          boxShadow: hovering
            ? "0 0 10px 3px rgba(251, 146, 60, 0.6)"
            : "0 0 0px rgba(251, 146, 60, 0)",
        }}
        transition={{
          duration: 2,
          delay: 0.4,
          repeat: hovering ? Infinity : 0,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="w-5 h-5 rounded-full bg-gray-300 absolute"
        style={{ left: "20%", top: "70%" }}
        animate={{
          scale: hovering ? [1, 1.2, 1] : 1,
          boxShadow: hovering
            ? "0 0 7px 2px rgba(209, 213, 219, 0.6)"
            : "0 0 0px rgba(209, 213, 219, 0)",
        }}
        transition={{
          duration: 1.6,
          delay: 0.6,
          repeat: hovering ? Infinity : 0,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="w-6 h-6 rounded-full bg-orange-600 absolute"
        style={{ left: "75%", top: "65%" }}
        animate={{
          scale: hovering ? [1, 1.2, 1] : 1,
          boxShadow: hovering
            ? "0 0 8px 2px rgba(234, 88, 12, 0.6)"
            : "0 0 0px rgba(234, 88, 12, 0)",
        }}
        transition={{
          duration: 1.7,
          delay: 0.8,
          repeat: hovering ? Infinity : 0,
          repeatType: "reverse",
        }}
      />

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {/* Center to others */}
        <motion.line
          x1="50%"
          y1="50%"
          x2="30%"
          y2="20%"
          stroke="rgba(249, 115, 22, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: hovering ? 0.8 : 0.4,
            strokeWidth: hovering ? 2.5 : 2,
          }}
          transition={{ duration: 1 }}
        />

        <motion.line
          x1="50%"
          y1="50%"
          x2="70%"
          y2="20%"
          stroke="rgba(249, 115, 22, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: hovering ? 0.8 : 0.4,
            strokeWidth: hovering ? 2.5 : 2,
          }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <motion.line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="70%"
          stroke="rgba(249, 115, 22, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: hovering ? 0.8 : 0.4,
            strokeWidth: hovering ? 2.5 : 2,
          }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <motion.line
          x1="50%"
          y1="50%"
          x2="75%"
          y2="65%"
          stroke="rgba(249, 115, 22, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: hovering ? 0.8 : 0.4,
            strokeWidth: hovering ? 2.5 : 2,
          }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* Additional connections */}
        <motion.line
          x1="30%"
          y1="20%"
          x2="70%"
          y2="20%"
          stroke="rgba(249, 115, 22, 0.4)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: hovering ? 0.6 : 0.3,
            strokeWidth: hovering ? 2 : 1.5,
          }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        <motion.line
          x1="20%"
          y1="70%"
          x2="75%"
          y2="65%"
          stroke="rgba(249, 115, 22, 0.4)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: hovering ? 0.6 : 0.3,
            strokeWidth: hovering ? 2 : 1.5,
          }}
          transition={{ duration: 1, delay: 1 }}
        />
      </svg>
    </div>
  );
};

// Benefits data
const benefitsData = [
  {
    icon: Users,
    title: "Taught by Professionals",
    description:
      "Our cohorts are being taught by top industry experts and educators",
  },
  {
    icon: Gift,
    title: "Bounties",
    description:
      "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
  },
  {
    icon: Laptop,
    title: "Coding hostels",
    description:
      "There is nothing like late night discussion with fellow learners and solving bugs",
  },
  {
    icon: Code,
    title: "Peer Code Reviews",
    description:
      "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
  },
  {
    icon: BookOpen,
    title: "Leet Lab",
    description:
      "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
  },
  {
    icon: Presentation,
    title: "Revision classes",
    description:
      "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
  },
];

// Alumni network data
const alumniData = {
  title: "Alumni Network and job listings",
  description:
    "The alumni Network that you always wished for in your college. We have a dedicated platform where students get to know each other, do projects, make agencies and join Hackathons. Our HR team also post regular job updates that you can apply directly whenever you are ready",
};

// Main component
export default function CohortBenefitsSection() {
  // Floating sparkles animation
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Generate random sparkles
    const newSparkles = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      duration: Math.random() * 5 + 10,
    }));

    setSparkles(newSparkles);

    // Regenerate sparkles periodically
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((spark) => ({
          ...spark,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 10 + 5,
          duration: Math.random() * 5 + 10,
        }))
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-16 px-4 relative overflow-hidden">
      {/* Background sparkles */}
      {sparkles.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute text-orange-500 opacity-5"
          style={{
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            fontSize: `${spark.size}px`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: spark.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Code />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-orange-500 mb-3">
            Key Benefits of Cohorts
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Cohorts are best way to learn because you finish the course in a
            timely manner
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          variants={containerVariants}
         
          // transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>

        {/* Alumni network card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <NetworkCard
            title={alumniData.title}
            description={alumniData.description}
          />
        </motion.div>
      </div>
    </div>
  );
}
