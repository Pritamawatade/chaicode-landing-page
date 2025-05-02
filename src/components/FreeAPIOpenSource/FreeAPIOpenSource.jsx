"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FreeAPIOpenSource = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            FreeAPI - Open Source
          </h2>
          <p className="text-gray-300">
            Unlock your potential with our API Hub! <br />
            Our API Hub is designed to streamline your learning experience by
            providing access to free, ready-to-use APIs.
            <br /> Whether you're building web or mobile apps, this resource
            helps you grow faster and smarter.
          </p>
          <a
            href="https://freeapi.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-black rounded-xl hover:scale-105 transition-transform font-semibold shadow-lg"
          >
            Check FreeAPI Docs <ArrowRight size={20} />
          </a>
        </div>

        {/* Right video/image preview */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-700 p-2 rounded-xl"
        >
          {/* Embed a thumbnail or video */}
      
          <iframe
            className="w-full h-64 md:h-80 rounded-md mt-4"
            src="https://www.youtube.com/embed/DxedlhTyR7Q?si=ncXndxF9xyAXyRu1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FreeAPIOpenSource;
