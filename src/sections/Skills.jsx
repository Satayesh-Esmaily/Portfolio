import { motion } from "framer-motion"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaJs,
} from "react-icons/fa"
import { SiTailwindcss, SiMui } from "react-icons/si"
import { SiAdobeindesign, SiAdobephotoshop } from "react-icons/si"

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl mb-3" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl mb-3" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl mb-3" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-3xl mb-3" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-3xl mb-3" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-3xl mb-3" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300 text-3xl mb-3" /> },
  { name: "MUI", icon: <SiMui className="text-blue-400 text-3xl mb-3" /> },
  { name: "InDesign", icon: <SiAdobeindesign className="text-pink-500 text-3xl mb-3" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-600 text-3xl mb-3" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-16 bg-slate-900">
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-12">
        My <span className="text-white">Skills</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer text-center text-white font-semibold text-lg"
            whileHover={{ scale: 1.1, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {skill.icon}
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  )
}