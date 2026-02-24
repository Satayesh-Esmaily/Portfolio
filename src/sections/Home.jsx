import { motion } from "framer-motion"
import profileImg from "../assets/main.jpg"

export default function Home() {
    return (
        <section id="home" className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 bg-slate-950">

            {/* Profile Image */}
            <motion.div
                className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
                initial={{ rotateY: -45, scale: 0.8 }}
                animate={{ rotateY: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <img src={profileImg} alt="Satayesh" className="w-full h-full object-cover" />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                className="mt-8 md:mt-0 md:ml-12 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
            >

                <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 leading-tight">
                    Hi, I'm <span className="text-white">Satayesh</span>
                </h1>

                <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-xl">
                    🚀 Front-end Developer & Python Enthusiast <br />
                    Crafting modern, responsive websites with <span className="text-cyan-400 font-semibold">React</span> & <span className="text-blue-400 font-semibold">Tailwind CSS</span> <br />
                    Passionate about <span className="text-cyan-400 font-semibold">learning, and innovation</span>.
                </p>

                <div className="mt-6 flex justify-center md:justify-start gap-4">
                    <motion.a
                        href="#projects"
                        className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-2xl"
                        whileHover={{ scale: 1.05, rotateZ: 1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="px-6 py-3 border border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-black"
                        whileHover={{ scale: 1.05, rotateZ: -1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}