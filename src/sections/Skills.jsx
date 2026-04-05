import { motion } from "framer-motion";

const skills = {
    Frontend: ["React.js", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MongoDB"],
    Tools: ["Git", "GitHub", "Vercel", "Postman"],
};

const Skills = () => {
    return (
        <section id="Skills" className="py-20 px-4 sm:px-4 bg-black/40 scroll-mt-20">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-blue-500">Skills</span>
                </h2>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
                        >

                            {/* Category */}
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">
                                {category}
                            </h3>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;