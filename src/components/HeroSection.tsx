
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import ThreeScene from "./ThreeScene";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center">
      <ThreeScene />
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-tech-purple mb-2"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-tech-light"
          >
            Aditya Raj
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold mb-6 text-gradient"
          >
            Software Engineer & Data Scientist
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-tech-light/70 text-lg mb-8 max-w-2xl"
          >
            Passionate about crafting efficient, scalable solutions. Specialized in Data Science ,Web development, 
            Data analytics.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              className="bg-tech-purple hover:bg-tech-purple/90 text-white"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button 
              variant="outline" 
              className="border-tech-light/20 hover:border-tech-light/50 text-tech-light"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-8"
          >
            <a 
              href="https://github.com/ajaditya00/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-light/70 hover:text-tech-light transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/aditya-raj-4081782b9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-tech-light/70 hover:text-tech-light transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            
            <a 
              href="mailto:adityasingh841238@gmail.com" 
              className="text-tech-light/70 hover:text-tech-light transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-tech-light/50 hover:text-tech-light transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
