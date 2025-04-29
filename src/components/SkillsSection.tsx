
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "C++", "SQL", "HTML", "CSS", "C" , "Java"],
  },
  {
    name: "Libraries",
    skills: ["C++.STL"],
  },
  {
    name: "Data Analysis Tools",
    skills: ["Excel", "Tableau", "Power BI"],
  },
  {
    name: "Languages",
    skills: ["English", "Hindi"],
  },
  {
    name: "Concepts",
    skills: ["Competative Programming","Data Structures & Algorithms", "Operating Systems", "Object-Oriented Programming", "Database Management system", "Software Engineering", "Problem Solving"],
  },
  {
    name: "Soft Skills",
    skills: ["Problem Solving", "Self-Learning", "Team Collaboration", "LeaderShip" , "Conflict Resolution"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-tech-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-tech-light/70 max-w-2xl mx-auto">
            My technical toolkit and areas of expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="glass-card h-full p-6 hover:border-tech-purple/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-gradient">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 text-tech-light/90 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
