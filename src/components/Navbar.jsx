import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = ["Home", "Projects", "Skills", "Contact"];

    return (
        <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <a href="/" className="text-xl font-bold text-white">
                    Saad<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a key={item} href={`#${item}`} className="hover:text-blue-500">
                            {item}
                        </a>
                    ))}
                </ul>

                {/* Mobile Icons */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg hover:text-blue-500"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;