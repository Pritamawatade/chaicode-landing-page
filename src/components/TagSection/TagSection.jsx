import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const topics = [
  { name: "HTML", url: "https://youtu.be/iVCzmDwIQpA?feature=shared" },
  { name: "CSS", url: "https://youtube.com/css" },
  { name: "JavaScript", url: "https://youtube.com/javascript" },
  { name: "Docker", url: "https://youtube.com/docker" },
  { name: "Next.js", url: "https://youtube.com/nextjs" },
  { name: "React", url: "https://youtube.com/react" },
  { name: "Node.js", url: "https://youtube.com/nodejs" },
  { name: "MongoDB", url: "https://youtube.com/mongodb" },
  { name: "Mongoose", url: "https://youtube.com/mongoose" },
  { name: "Kubernetes", url: "https://youtube.com/kubernetes" },
  { name: "AWS", url: "https://youtube.com/aws" },
  { name: "Python", url: "https://youtube.com/python" },
  { name: "Django", url: "https://youtube.com/django" },
  { name: "Flask", url: "https://youtube.com/flask" },
  { name: "MySQL", url: "https://youtube.com/mysql" },
  { name: "PostgreSQL", url: "https://youtube.com/postgresql" },
  { name: "TailwindCSS", url: "https://youtube.com/tailwindcss" },
  { name: "Bootstrap", url: "https://youtube.com/bootstrap" },
  { name: "Express.js", url: "https://youtube.com/express" },
  { name: "GraphQL", url: "https://youtube.com/graphql" },
  { name: "TypeScript", url: "https://youtube.com/typescript" },
  { name: "Redux", url: "https://youtube.com/redux" },
  { name: "Firebase", url: "https://youtube.com/firebase" },
  { name: "WebSockets", url: "https://youtube.com/websockets" },
  { name: "CI/CD", url: "https://youtube.com/cicd" },
  { name: "Linux", url: "https://youtube.com/linux" },
  { name: "OAuth", url: "https://youtube.com/oauth" },
  { name: "JWT", url: "https://youtube.com/jwt" },
  { name: "REST API", url: "https://youtube.com/restapi" },
  { name: "Vercel", url: "https://youtube.com/vercel" }
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
