import { useState, useEffect } from "react";
import { motion, scale } from "framer-motion";
import DeviderLine from "../DeviderLine/DeviderLine";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import microsoft from "../../assets/microsoft.svg";
import meta from "../../assets/meta.svg";
import amazon from "../../assets/amazon.svg";
import netflix from "../../assets/netflix.svg";
import tesla from "../../assets/tesla.svg";
import stripe from "../../assets/stripe.svg";
import airtable from "../../assets/airtable.svg";



// Company logos data
const tech_companies = [
  { name: "Google", logo: { src: google, alt: "Google" } },
  { name: "Apple", logo:  {src: apple, alt: "Apple"} },
  { name: "Microsoft", logo: {src: microsoft, alt: "Microsoft"} },
  { name: "Meta", logo: {src: meta, alt: "Meta"} },
  { name: "Amazon", logo: {src: amazon, alt: "Amazon"} },
  { name: "Netflix", logo: {src: netflix, alt: "Netflix"} },
  { name: "Tesla", logo: {src: tesla, alt: "Tesla"} },
];

const startups = [
  { name: "Stripe", logo: stripe },
  { name: "Airtable", logo: airtable },
];

export default function CompanyLogoCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("tech");

  // Combine both arrays and duplicate to create seamless infinite scroll effect
  const companies =
    activeTab === "tech"
      ? [...tech_companies, ...tech_companies]
      : [...startups, ...startups];

  // Change active tab every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "tech" ? "startups" : "tech"));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
      {/* Heading with orange gradient */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          whileInView={{ scale: [0.9, 1.05, 1] }}
          transition={{ duration: 1.2, times: [0, 0.7, 1] }}
        >
          Our Student Success Stories
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Our students don't just work at big tech companies—they're also
          founders of
          <span className=" text-gray-300">
            {" "}
            funded startups and products
          </span>{" "}
          making waves in the industry.
        </motion.p>
      </motion.div>

      {/* Infinite scrolling logo carousel */}
      <div
        className="relative overflow-hidden py-8 bg-gradient-to-r from-orange-600 to-orange-800 rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: isHovered ? 0 : "-50%",
          }}
          transition={{
            ease: "linear",
            duration: isHovered ? 0 : 20,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center mx-8 py-4 w-32"
              whileHover={{ scale: 1.1, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (index * 0.1) % 1, // Create a staggered effect
              }}
            >
              <div className="cursor-pointer flex items-center justify-center w-16 h-16 mb-3 rounded-full bg-white shadow-lg text-4xl">
                <img src={company.logo.src} alt={company.logo.alt} />
              </div>
              <p className="font-medium text-white text-center text-sm max-w-[6rem]">
                {company.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlay on sides for smooth transition effect */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-orange-600 to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-orange-600 to-transparent"></div>
      </div>

      <DeviderLine />
    </div>
  );
}
