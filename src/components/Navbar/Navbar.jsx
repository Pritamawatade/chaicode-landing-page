import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, Video, FileText, Star, LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full p-4 mb-4 rounded-2xl px-8">
      <motion.nav
        className="bg-[#1a1816ac] bg-opacity-10 backdrop-blur-sm rounded-xl shadow-lg px-6 py-1 w-full "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-xl font-bold flex items-center justify-between cursor-pointer mr-3"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/chaicode-white.svg"
              alt="ChaiCode"
              className="h-16 w-32 mr-4"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <NavLinks />

            {/* Login Button */}
      
          </div>
          <motion.button
            className={`hidden md:flex bg-[#e85c0c] cursor-pointer hover:bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogIn size={18} />
            <a href="https://courses.chaicode.com/learn/account/signin" >Login</a>
          </motion.button>
       

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 space-y-4 py-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <NavLinks mobile />

              <motion.button
                className="bg-[#e85c0c] text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn size={18} />
                <span>Login</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}

// Navigation Links Component
function NavLinks({ mobile = false }) {
  const navItems = [
    {
      link: "#cohort",
      name: "Cohort",
      icon: <Book size={18} />,
      hasBlinker: true,
    },
    {
      link: "#udemy",
      name: "Udemy",
      icon: <Video size={18} />,
    },
    {
      link: "https://docs.chaicode.com/",
      name: "Docs",
      icon: <FileText size={18} />,
    },
    {
      link: "#review",
      name: "Reviews",
      icon: <Star size={18} />,
    },
  ];

  return (
    <>
      {navItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          className={`text-white hover:text-orange-500 transition-colors duration-50 flex items-center ${
            mobile ? "py-2" : ""
          }`}
          whileHover={{ y:-4 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center space-x-2">
            {item.icon}
            <span>{item.name}</span>
            {item.hasBlinker && (
              <motion.div
                className="h-2 w-2 rounded-full bg-[#e85c0c]"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </span>
        </motion.a>
      ))}
    </>
  );
}
