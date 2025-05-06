import React, { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Loader2 } from "lucide-react";
import DeviderLine from "../DeviderLine/DeviderLine";
import PremiumButton from "../Button/LiquidButton";
import { Tweet } from 'react-tweet'
// Loading placeholder
const TweetLoadingCard = () => (
  <motion.div
    initial={{ opacity: 0.7 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
    className="flex-1 bg-gray-800 rounded-lg p-4 h-96 flex flex-col items-center justify-center shadow-lg border border-gray-700 max-w-[400px] w-full"
  >
    <Twitter className="text-orange-400 mb-4" size={32} />
    <div className="flex items-center justify-center">
      <Loader2 className="text-orange-500 mr-2 animate-spin" size={24} />
      <p className="text-gray-400">Loading tweet...</p>
    </div>
  </motion.div>
);

// Embed via iframe + Twitframe
const TweetEmbed = ({ tweetId }) => {
  const [loading, setLoading] = useState(true);
  const src = `https://twitframe.com/show?url=https://twitter.com/i/status/${tweetId}`;

  return loading ? (
    <TweetLoadingCard />
  ) : null || (
    <iframe
      title={`tweet-${tweetId}`}
      src={src}
      onLoad={() => setLoading(false)}
      className="w-full max-w-[400px] h-[500px] rounded-2xl overflow-hidden border border-gray-700"
      style={{ background: "transparent" }}
    />
  );
};

export default function TweetSection() {
  // List your tweet IDs here
  const tweetIds = [
    "1906393735203836076", // sourabh
    "1917588204506734937", // Pritam
    "1907045909394788416", // Jaani
  ];

  return (
    <div className="mt-12 py-12">
      <DeviderLine />

      {/* Headline */}
      <div className="flex justify-center mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f59e0c] pb-2"
          data-aos="fade-up"
        >
          Tweet Love
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 left-0 h-1 bg-[#f59e0c] rounded-full"
          />
        </motion.h1>
      </div>

      {/* Tweets Grid */}
      <div className="w-full px-4 py-8 lg:pb-16">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-start">
          {tweetIds.map((id) => (
            <Tweet id={id}/>
          ))}
        </div>
      </div>

      <PremiumButton />
      <DeviderLine />
    </div>
  );
}
