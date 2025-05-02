import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";
import discordImg from "../../assets/discord.svg";

const CommunitySection = () => {
  return (
    <section className="w-full py-20 bg-[#0f0f0f] text-white flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        {/* Text Content */}
        <div>
          <span className="text-sm bg-white text-black px-2 py-1 rounded font-mono">Community</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-snug">
            Join our <br />
            <span className="text-orange-500">community</span> where <br />
            creativity thrives.
          </h2>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://hitesh.ai/discord"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg text-center transition-all duration-300"
          >
            <UsersRound className="inline-block mr-2" />
            80,000 Active Coders in Discord
          </motion.a>
        </div>

        {/* Discord Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}  
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <img
            src={discordImg} // Replace with your actual image
            alt="Discord Preview"
            width={400}
            height={300}
            className="rounded-xl border border-white/20 shadow-xl hover:shadow-[0_10px_10px_-5px_#e85c0c] transition-all duration-300 relative"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
