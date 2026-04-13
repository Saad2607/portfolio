import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

const projects = [
    {
        title: "🩸 Blood Bank Management System",
        description:
            "A MERN-based blood bank management system that streamlines donor registration, blood inventory tracking, and request handling. Built to improve data organization and ensure efficient access to critical healthcare resources.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        features: [
            "Donor management",
            "Inventory tracking",
            "Request handling"
        ],
        github: "https://github.com/Saad2607/blood-bank-management-system",
        live: "#",
    },
    {
        title: "🛒 E-commerce Website",
        description:
            "A full-stack MERN e-commerce platform featuring user authentication, product management, and a dynamic shopping cart system. Designed with scalable architecture and responsive UI, the application supports seamless user experience and efficient state management.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        features: [
            "User authentication",
            "Cart system",
            "Product listing",
        ],
        github: "https://github.com/Saad2607/E-Commerce",
        live: "https://quickkart-sigma.vercel.app/",
    },
    {
        title: "🔐 SecureVault - Cloud File Storage",
        description: "A full-stack cloud file storage platform with secure authentication, file upload, sharing, and storage management features similar to Google Drive.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
        features: [
            "🔐 Secure JWT Authentication",
            "📂 File Upload & Cloud Storage",
            "⭐ Favorites & Trash System",
            "🔗 File Sharing via Link",
            "📊 Storage Usage Tracking",
            "👤 Profile & Avatar Upload"
        ],
        github: "https://github.com/Saad2607/securevault",
        live: "https://secure-file-vault-sigma.vercel.app/",
    },
    {
        title: "🏠 Interior Design Website",
        description:
            "A responsive and visually engaging website showcasing modern interior design concepts. Focused on UI/UX principles, the project demonstrates clean layout structuring and mobile-friendly design.",
        tech: ["HTML", "CSS", "JavaScript"],
        features: [
            "Responsive layout",
            "Modern UI",
            "Smooth navigation"
        ],
        github: "https://github.com/Saad2607/interior-designing",
        live: "https://saad2607.github.io/interior-designing/",
    },
];

const Projects = () => {
    return (
        <section id="Projects" className="py-20 px-4 sm:px-4 scroll-mt-20">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My <span className="text-blue-500">Projects</span>
                </h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300"
                        >

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4">
                                {project.description}
                            </p>

                            {/* Features */}
                            <ul className="text-xs text-gray-400 mb-4 space-y-1">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <FaCheckCircle className="text-blue-500 text-xs" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-gray-800 px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm hover:text-blue-500"
                                >
                                    <FaGithub /> Code
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm hover:text-blue-500"
                                >
                                    <FaExternalLinkAlt /> Live
                                </a>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;