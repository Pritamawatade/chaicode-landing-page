import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Code,
  BookOpen,
  MessageSquare,
  Award,
  DollarSign,
  CheckCheck,
  LaptopMinimal,
  SquareChevronRight,
} from "lucide-react";
import CountUp from "react-countup";

export default function HeroSection() {
  const features = [
    {
      text: "Peer learning",
      icon: <Users size={18} />,
      hoverIcon: (
        <Users
          size={32}
          className="text-white filter drop-shadow-[0_0_1px_#ffa500]"
        />
      ),
    },
    {
      text: "Code reviews",
      icon: <Code size={18} />,
      hoverIcon: (
        <SquareChevronRight
          size={32}
          className="text-white filter drop-shadow-[0_0_1px_#ffa500]"
        />
      ),
    },
    {
      text: "Virtual hostel",
      icon: <BookOpen size={18} />,
      hoverIcon: (
        <LaptopMinimal
          size={32}
          className="text-white filter drop-shadow-[0_0_1px_#ffa500]"
        />
      ),
    },
    {
      text: "Doubt sessions",
      icon: <MessageSquare size={18} />,
      hoverIcon: (
        <CheckCheck
          size={32}
          className="text-white filter drop-shadow-[0_0_1px_#ffa500]"
        />
      ),
    },
    {
      text: "Bounties",
      icon: <Award size={18} />,
      hoverIcon: (
        <DollarSign
          size={32}
          className="text-white filter drop-shadow-[0_0_1px_#ffa500]"
        />
      ),
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-6 md:px-12 lg:px-24 mt-16">
      <div className="max-w-4xl mx-auto text-center mt-8 mb-0">
        {/* Badge */}
        <motion.div
          className="inline-block bg-[#160c01] px-4 py-2 mb-0 border border-[#e85c0c] rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <p className="font-bold text-sm text-white">
            Trusted by{" "}
            <span className="text-[#e85c0c]">
              <CountUp end={1500000} duration={2} separator="," suffix="+" />
            </span>{" "}
            Code Learners
          </p>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="relative group w-fit mx-auto mt-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-[bona-nova-sc-regular] text-4xl sm:text-3xl lg:text-6xl font-bold leading-tight text-white mb-2 selection:bg-orange-500 selection:text-white">
            <span className="relative inline-block">
              <span className="text-orange-500 font-[bona-nova-sc-regular] lg:text-7xl sm:text-3xl">
                C
              </span>
              onsistency
              <motion.div
                className="absolute -bottom-1 left-0 h-1 w-full bg-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            &
            <span className="relative inline-block ml-2">
              <span className="text-orange-500 font-[bona-nova-sc-regular] lg:text-7xl sm:text-3xl">
                C
              </span>
              ommunity
              <motion.div
                className="absolute -bottom-1 left-0 h-1 w-full bg-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </h1>

          {/* Community quote appears briefly and fades out */}
          <motion.div
            className="text-sm text-zinc-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              Built together. Grown together.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-2xl font[bona-nova-sc-regular] sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6 selection:bg-orange-500 selection:text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          An{" "}
          <span className="font-[archivo-font] text-[#e85c0c] selection:bg-orange-500 selection:text-white">
            &lt;Unmatched /&gt;
          </span>{" "}
          Learning Experience for coding courses.
        </motion.h1>

        {/* Paragraph */}
        {/* <motion.p
          className="text-gray-300 text-lg sm:text-xl mb-10 mx-auto text-center leading-relaxed max-w-xl sm:max-w-2xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Content is everywhere, but we provide a learning experience that is
          unmatched — bounties, peer learning, code reviews, virtual hostel,
          alumni network, doubt sessions, and group projects.
        </motion.p> */}

        {/* CTA */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="https://hitesh.ai/cohort/" className="cursor-pointer" target="_blank">
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
          </a>
        </motion.div>
        {/* Features */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10 justify-items-center relative"
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
              className="relative flex items-center gap-2 border border-orange-600 rounded-full bg-transparent px-4 py-2 text-gray-200 cursor-pointer hover:bg-[#412205]  group"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Always visible icon and text */}
              <div className="text-[#e85c0c] z-10">{feature.icon}</div>
              <span className="z-10">{feature.text}</span>

              {/* Animated Dollar Sign */}
              <motion.div
                variants={{
                  rest: {
                    opacity: 0,
                    x: 40,
                    rotateY: 90,
                    scale: 0.3,
                  },
                  hover: {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    },
                  },
                }}
                className="absolute right-8 top-[-5px ] -translate-y-1/2 z-0"
              >
                <span className=" rounded-full p-1 ">{feature.hoverIcon}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
