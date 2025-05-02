import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const topics = [
  { name: "HTML", url: "https://www.youtube.com/results?search_query=chai+aur+code+html" },
  { name: "CSS", url: "https://www.youtube.com/results?search_query=chai+aur+code+css" },
  { name: "JavaScript", url: "https://www.youtube.com/results?search_query=chai+aur+code+javascript" },
  { name: "Docker", url: "https://www.youtube.com/results?search_query=chai+aur+code+docker" },
  { name: "Next.js", url: "https://www.youtube.com/results?search_query=chai+aur+code+nextjs" },
  { name: "React", url: "https://www.youtube.com/results?search_query=chai+aur+code+react" },
  { name: "Node.js", url: "https://www.youtube.com/results?search_query=chai+aur+code+nodejs" },
  { name: "MongoDB", url: "https://www.youtube.com/results?search_query=chai+aur+code+mongodb" },
  { name: "Mongoose", url: "https://www.youtube.com/results?search_query=chai+aur+code+mongoose" },
  { name: "Kubernetes", url: "https://www.youtube.com/results?search_query=chai+aur+code+kubernetes" },
  { name: "AWS", url: "https://www.youtube.com/results?search_query=chai+aur+code+aws" },
  { name: "Python", url: "https://www.youtube.com/results?search_query=chai+aur+code+python" },
  { name: "Django", url: "https://www.youtube.com/results?search_query=chai+aur+code+django" },
  { name: "Flask", url: "https://www.youtube.com/results?search_query=chai+aur+code+flask" },
  { name: "MySQL", url: "https://www.youtube.com/results?search_query=chai+aur+code+mysql" },
  { name: "PostgreSQL", url: "https://www.youtube.com/results?search_query=chai+aur+code+postgresql" },
  { name: "TailwindCSS", url: "https://www.youtube.com/results?search_query=chai+aur+code+tailwindcss" },
  { name: "Bootstrap", url: "https://www.youtube.com/results?search_query=chai+aur+code+bootstrap" },
  { name: "Express.js", url: "https://www.youtube.com/results?search_query=chai+aur+code+express" },
  { name: "GraphQL", url: "https://www.youtube.com/results?search_query=chai+aur+code+graphql" },
  { name: "TypeScript", url: "https://www.youtube.com/results?search_query=chai+aur+code+typescript" },
  { name: "Redux", url: "https://www.youtube.com/results?search_query=chai+aur+code+redux" },
  { name: "Firebase", url: "https://www.youtube.com/results?search_query=chai+aur+code+firebase" },
  { name: "WebSockets", url: "https://www.youtube.com/results?search_query=chai+aur+code+websockets" },
  { name: "CI/CD", url: "https://www.youtube.com/results?search_query=chai+aur+code+cicd" },
  { name: "Linux", url: "https://www.youtube.com/results?search_query=chai+aur+code+linux" },
  { name: "OAuth", url: "https://www.youtube.com/results?search_query=chai+aur+code+oauth" },
  { name: "JWT", url: "https://www.youtube.com/results?search_query=chai+aur+code+jwt" },
  { name: "REST API", url: "https://www.youtube.com/results?search_query=chai+aur+code+restapi" },
  { name: "Vercel", url: "https://www.youtube.com/results?search_query=chai+aur+code+vercel" }
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 20 } }
};

export default function TopicsCloud() {
  return (
    <section className="bg-[#0D0D0D] text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-orange-500">Topics Cloud</h2>
        <p className="text-lg text-gray-400 mb-10">
          You can find videos and courses on topics and much more
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {topics.map((topic, index) => (
            <motion.a
              variants={tagVariants}
              href={topic.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              whileHover={{ scale: 1.1, backgroundColor: "#ff7700", color: "#000" }}
              className="border border-orange-500 px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 text-sm flex items-center gap-2"
            >
              <BadgeCheck size={16} className="text-orange-400" />
              {topic.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
