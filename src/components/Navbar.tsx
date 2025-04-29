import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
};

const links: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-card"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold text-gradient">
          Aditya<span className="text-tech-light">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-tech-light/80 hover:text-tech-light transition-colors duration-300 text-sm font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-tech-purple after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Download Resume Button */}
        <Button
          variant="ghost"
          size="sm"
          className="hidden md:flex border border-tech-purple/30 text-tech-purple hover:text-tech-light hover:bg-tech-purple/80"
          asChild
        >
          <a href="/AdityaUpdatedCv.pdf" download>
            Download Resume
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-tech-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-tech-dark/95 backdrop-blur-lg border-t border-white/10 py-4"
        >
          <ul className="flex flex-col space-y-3 px-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-tech-light/80 hover:text-tech-light transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              {/* Mobile Download Resume Button */}
              <Button
                variant="ghost"
                size="sm"
                className="w-full border border-tech-purple/30 text-tech-purple hover:text-tech-light hover:bg-tech-purple/80"
                asChild
              >
                <a href="/resume.pdf" download onClick={() => setIsMenuOpen(false)}>
                  Download Resume
                </a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
