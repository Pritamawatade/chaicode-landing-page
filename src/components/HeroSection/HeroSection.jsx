import React from "react";
import { motion } from "framer-motion";
import { Users, Code, BookOpen, MessageSquare, Award } from "lucide-react";
import CountUp from "react-countup";

export default function HeroSection() {
  const features = [
    { text: "Peer learning", icon: <Users size={18} /> },
    { text: "Code reviews", icon: <Code size={18} /> },
    { text: "Virtual hostel", icon: <BookOpen size={18} /> },
    { text: "Doubt sessions", icon: <MessageSquare size={18} /> },
    { text: "Bounties", icon: <Award size={18} /> },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-block bg-[#e85c0c]/10 rounded-full px-4 py-2 mb-4 shadow-orange-500/30 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <p className="font-bold text-lg text-white">
            Trusted by{" "}
            <span className="text-[#e85c0c]">
              <CountUp end={1500000} duration={2} separator="," suffix="+" />
            </span>{" "}
            Code Learners
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          An <span className="text-[#e85c0c]">&lt;Unmatched /&gt;</span>{" "}
          Learning Experience for coding courses.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
  className="text-gray-300 text-lg sm:text-xl mb-10 mx-auto text-center leading-relaxed max-w-xl sm:max-w-2xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  Content is everywhere, but we provide a learning experience that is unmatched — bounties, peer learning, code reviews, virtual hostel, alumni network, doubt sessions, and group projects.
</motion.p>

        {/* CTA */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-[#e85c0c] hover:bg-[#e85c0c]/90 text-white font-bold text-lg px-6 py-4 rounded-xl shadow-lg shadow-orange-500/40 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Check all Live Cohorts</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
        {/* Features */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10 justify-items-center "
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="flex items-center gap-2 hover:bg-[#412205] border-orange-600 rounded-full bg-transparent px-4 py-2 text-gray-200 cursor-pointer "
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-[#e85c0c]">{feature.icon}</div>
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
