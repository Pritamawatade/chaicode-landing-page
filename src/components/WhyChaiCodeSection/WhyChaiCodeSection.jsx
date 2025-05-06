import { motion } from 'framer-motion';
import { Rocket, BookOpen, CheckCircle, Users, PartyPopper, Coffee } from 'lucide-react';

const cardData = [
  {
    icon: <BookOpen className="w-6 h-6 text-orange-400" />,
    title: "Comprehensive Curriculum",
    description:
      "Master key concepts and hands-on skills through project-based learning that's structured, practical, and easy to understand.",
  },
  {
    icon: <Coffee className="w-6 h-6 text-orange-400" />,
    title: "Code and Chill",
    description:
      "Coding should be fun, not frightening. We integrate light humor, fun with time and practice, everything starts to click and land in place.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-orange-400" />,
    title: "You Finish It",
    description:
      "Our cohorts are a collaborative journey, not random courses. Join in as a community, complete the course one line at a time.",
  },
  {
    icon: <Users className="w-6 h-6 text-orange-400" />,
    title: "Improve Communication",
    description:
      "One of the best ways to boost communication skills is through project flow. Real communication happens when co-learners learn, share, and grow together.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-400" />,
    title: "Industry Guests",
    description:
      "We're connected with industry experts and regularly bring them for real-world wisdom, career insights, and insightful sessions with students.",
  },
  {
    icon: <PartyPopper className="w-6 h-6 text-orange-400" />,
    title: "Bounties",
    description:
      "Every cohort comes with exciting cash prizes and open-source fame. MACBook giveaways and fun ways to keep the motivation high and the learning fun.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-2 text-orange-400">But Why ChaiCode ?</h2>
        <p className="text-gray-400 text-lg">
          ChaiCode exists because we love tech and teaching
        </p>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
            className="bg-zinc-900 rounded-2xl p-6 shadow-lg border border-orange-500 hover:shadow-orange-500/30 hover:bg-zinc-800 transition-colors duration-300"
          >
            <div className="flex items-center mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-orange-300 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}

          className="md:col-span-3 mt-8 flex flex-col md:flex-row items-center justify-between bg-zinc-800 border border-orange-400 p-6 rounded-2xl"
        >
          <img
            src="https://avatars.githubusercontent.com/u/11613311?v=4"
            alt="Hitesh Choudhary"
            className="w-48 h-auto rounded-xl mb-6 md:mb-0"
          />
          <div className="md:ml-8">
            <h3 className="text-2xl font-bold text-orange-300">Hitesh Choudhary</h3>
            <p className="text-sm text-gray-400 mt-2 max-w-xl">
              Retired from corporate and full-time YouTuber, a founder of LCO (LearnCodeOnline), CTO & Sr. Director at PW. 2 YT channels (958k & 478k), stepped into 40 countries.
            </p>
            <p className="mt-2 text-orange-200 font-medium">Approach</p>
            <p className="text-sm text-gray-400">
              Project-based courses with peer learning and bounties with many activities.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mt-12 text-center"
      >
        <button className="bg-orange-500 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-orange-600 transition-all">
          Join Cohorts Live Classes
        </button>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
