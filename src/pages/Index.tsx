
import { useEffect } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingShape from "@/components/3DModel";

const Index = () => {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    const updateY = () => {
      const newY = window.scrollY;
      if (newY > 100) {
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    const unsubscribe = scrollY.onChange(() => updateY());
    return () => {
      unsubscribe();
    };
  }, [scrollY, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-tech-dark min-h-screen overflow-x-hidden">
      <Navbar />
      
      <HeroSection />
      
      <div className="relative z-10">
        {/* Modal graphic - positioned absolutely */}
        <div className="absolute top-40 right-20 w-32 h-32 lg:w-64 lg:h-64 hidden md:block">
          <FloatingShape />
        </div>
      
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-tech-purple/80 text-white p-3 rounded-full shadow-lg z-50 hover:bg-tech-purple transition-colors"
        initial={{ opacity: 0 }}
        animate={controls}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Index;
