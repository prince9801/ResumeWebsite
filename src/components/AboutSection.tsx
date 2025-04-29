
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import  HerokaPhoto  from "../components/Herokaphoto.jpg";
const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-tech-light/70 max-w-2xl mx-auto">
            A passionate Software Engineer with expertise in building modern web applications and data-driven solutions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <Card className="glass-card p-1">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-tech-blue/20 via-tech-purple/20 to-tech-pink/20 flex items-center justify-center">
                <img
                  src={HerokaPhoto}
                  alt="Aditya Raj"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-xl font-semibold text-tech-light">Who I Am</h3>
            <p className="text-tech-light/80">
              I'm Aditya Raj, a Software Engineer and Data Scientist based in Siwan, Bihar. With a background in Computer Science and Engineering (CGPA 6.23), 
              I specialize in creating efficient and scalable applications that solve real-world problems.
            </p>
            <p className="text-tech-light/80">
              My expertise spans across  Data Scientist, Data analytics. I have experience working with diverse technologies 
              including PowerBI,Tableau,MS Excel,Python, C++, SQL, and various database management systems.
            </p>
            <p className="text-tech-light/80">
              Beyond technical skills, I excel in problem-solving, self-learning,team collaboration, and negotiation - which I consider essential for creating 
              successful software solutions in today's fast-paced industry.
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-medium text-tech-light mb-3">Education</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-tech-light">Bachelor of Technology - Computer Science and Engineering</p>
                  <p className="text-tech-light/70">Lovely Professional University, Jalandhar,Punjab | CGPA 6.23 | Aug 2022 - Present</p>
                </div>
                <div>
                  <p className="font-medium text-tech-light">Senior Secondary</p>
                  <p className="text-tech-light/70">English, Mathematics, Chemistry and Physics | Apr 2020 - 2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
