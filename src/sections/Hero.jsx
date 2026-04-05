import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <section id="Home" className="h-screen scroll-mt-20 flex items-center justify-center text-center px-6 py-20 px-4 sm:px-6">
            <div>

                {/* Intro */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        Hi, I'm{" "}
                        <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                            Mohammed Saad Shaikh
                        </span>
                    </h1>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer (MERN)",
                            2000,
                            "I build scalable web applications",
                            2000,
                            "I create modern UI/UX experiences",
                            2000,
                        ]}
                        wrapper="p"
                        speed={50}
                        repeat={Infinity}
                        className="mt-6 text-gray-400 text-lg"
                    />
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-500 rounded-xl transition transform hover:scale-105 hover:bg-blue-600"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 border border-gray-600 hover:border-white rounded-xl hover:scale-105 transition"
                    >
                        Contact Me
                    </a>

                    <a
                        href="/Resume.pdf"
                        download
                        className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:scale-105 hover:text-white rounded-xl transition"
                    >
                        Download Resume
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;