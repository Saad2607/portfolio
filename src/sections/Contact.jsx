import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="Contact" className="py-20 px-4 sm:px-4 scroll-mt-20">
            <div className="max-w-4xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Get In <span className="text-blue-500">Touch</span>
                </h2>

                {/* Subtitle */}
                <p className="text-gray-400 mb-10">
                    I'm open to opportunities, collaborations, and freelance work.
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-10 text-2xl">
                    <a href="https://github.com/Saad2607" target="_blank" className="hover:text-blue-500">
                        <FaGithub />
                    </a>

                    <a href="https://linkedin.com/in/mohammed-saad-shaikh-18a3032bb/" target="_blank" className="hover:text-blue-500">
                        <FaLinkedin />
                    </a>

                    <a href="mailto:msaadbjs7@gmail.com" className="hover:text-blue-500">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Button */}
                <motion.a
                    href="mailto:msaadbjs7@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl transition"
                >
                    Send Email
                </motion.a>

            </div>
        </section>
    );
};

export default Contact;