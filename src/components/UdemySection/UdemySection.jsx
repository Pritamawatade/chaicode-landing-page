import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Star,
  Clock,
  Award,
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";

// Sample course data
const coursesData = [
  {
    id: 1,
    title: "Complete Web Development Course",
    description:
      "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    rating: 4.7,
    ratingText: "Top Rated",
    reviewCount: 2841,
    originalPrice: 3199,
    discountedPrice: 399,
    discountPercentage: 87,
    timeLeft: "45 minutes",
    youtubeLink: "https://www.youtube.com/watch?v=KZ31wDjYleI&t=6s",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    isPremium: true,
  },
  {
    id: 2,
    title: "Advanced React & Redux Masterclass",
    description:
      "Master React with hooks, context API, Redux toolkit, and build real-world applications with modern practices",
    rating: 4.9,
    ratingText: "Bestseller",
    reviewCount: 1547,
    originalPrice: 2799,
    discountedPrice: 499,
    discountPercentage: 82,
    timeLeft: "2 hours",
    youtubeLink: "https://www.youtube.com/watch?v=KZ31wDjYleI&t=6s",
    tags: ["React", "Redux", "JavaScript"],
    isPremium: true,
  },
  {
    id: 3,
    title: "Full Stack MERN Development",
    description:
      "Build full-stack applications with MongoDB, Express, React and Node.js with authentication and payment integration",
    rating: 4.8,
    ratingText: "Highly Rated",
    reviewCount: 1298,
    originalPrice: 3499,
    discountedPrice: 649,
    discountPercentage: 81,
    timeLeft: "1 day",
    youtubeLink: "https://www.youtube.com/watch?v=KZ31wDjYleI&t=6s",
    tags: ["MERN", "MongoDB", "Express", "Node.js"],
    isPremium: false,
  },
];

// Main component
export default function UdemyCourseCarousel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getYouTubeId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
    );
    return match ? match[1] : null;
  };
  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);
  // Navigation handlers
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coursesData.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + coursesData.length) % coursesData.length
    );
  };

  return (
    <div className={`w-full py-4 relative bg-gray-900`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mt-2 mb-8 p-0">
                <div data-aos="fade-up">
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-4xl text-orange-600 pb-2"
                  >
                    <span className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f59e0c] letter-spacing">
                      Udemy
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-0 left-0 h-1 bg-[#f59e0c] rounded-full"
                      />
                    </span>
                  </motion.h1>
                </div>
              </div>
        <div className="relative">
          {/* Navigation arrows */}
          <motion.button
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full z-10 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
          >
            <ArrowLeft size={20} />
          </motion.button>

          <motion.button
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full z-10 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
          >
            <ArrowRight size={20} />
          </motion.button>

          {/* Course card */}
          <motion.div
            className="bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={coursesData[currentIndex].id}
            layout
          >
            {/* Left side: Course info */}
            <motion.div
              className="p-6 md:p-8 flex-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {coursesData[currentIndex].title}
              </h3>

              <p className="text-gray-300 mb-6 mt-6">
                {coursesData[currentIndex].description}
              </p>

              <div className="flex items-center mb-6 justify-center mt-8">
                <motion.div
                  className="bg-gray-800 px-10 py-6 rounded-lg inline-flex items-center mr-4 mt-5"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-4xl font-bold text-white mr-3">
                    {coursesData[currentIndex].rating}
                  </span>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={
                            i < Math.floor(coursesData[currentIndex].rating)
                              ? "currentColor"
                              : "none"
                          }
                          className={
                            i < Math.floor(coursesData[currentIndex].rating)
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {coursesData[currentIndex].reviewCount} reviews
                    </span>
                  </div>
                </motion.div>

                <motion.div className="bg-orange-600 px-4 py-2 rounded-lg">
                  <span className="text-white font-medium">
                    {coursesData[currentIndex].ratingText}
                  </span>
                </motion.div>
              </div>

              <div className="flex items-center mb-6 justify-center mt-8 flex-wrap gap-2">
                {coursesData[currentIndex].tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.1, backgroundColor: "#ea580c" }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right side: Preview and purchase */}

            <motion.div
              className="md:w-96 bg-gray-900 p-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {/* Video preview container */}
              {/* Video preview container */}
              <motion.div
                className="relative rounded-lg overflow-hidden mb-4 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {!isPlaying ? (
                  <>
                    {/* YouTube Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${getYouTubeId(
                        coursesData[currentIndex].youtubeLink
                      )}/hqdefault.jpg`}
                      alt="Video thumbnail"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                      <motion.button
                        className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center"
                        onClick={() => setIsPlaying(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={24} className="text-white ml-1" />
                      </motion.button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                      <span className="text-white text-sm font-medium">
                        Preview this course
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="relative pb-[56.25%] h-0">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${getYouTubeId(
                        coursesData[currentIndex].youtubeLink
                      )}?autoplay=1&rel=0`}
                      title="Course Preview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </motion.div>

              {/* Tabs */}
              <div className="flex border-b border-gray-700 mb-4">
                <button className="px-4 py-2 text-white font-medium border-b-2 border-orange-500">
                  Personal
                </button>
              </div>

              {/* Premium badge */}
              {coursesData[currentIndex].isPremium && (
                <div className="flex items-center mb-3 text-sm">
                  <Award size={16} className="text-orange-500 mr-2" />
                  <span className="text-gray-300">
                    This Premium course is included in plans
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-white">
                  ₹{coursesData[currentIndex].discountedPrice}
                </span>
                <span className="text-gray-400 line-through ml-2">
                  ₹{coursesData[currentIndex].originalPrice}
                </span>
                <span className="ml-2 text-green-500 font-medium">
                  {coursesData[currentIndex].discountPercentage}% off
                </span>
              </div>

              {/* Time left */}
              <div className="flex items-center mb-4 text-sm text-orange-500">
                <Clock size={16} className="mr-1" />
                <span>
                  {coursesData[currentIndex].timeLeft} left at this price!
                </span>
              </div>

              {/* Buttons */}
              <a href="https://hitesh.ai/udemy" className="cursor-pointer">
                <motion.button
                  className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium mb-3 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to cart
                </motion.button>
              </a>
              <a href="https://hitesh.ai/udemy" className="cursor-pointer">
                <motion.button
                  className="w-full cursor-pointer bg-white text-gray-900 py-3 rounded-lg font-medium"
                  whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Buy now
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6">
          {coursesData.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
