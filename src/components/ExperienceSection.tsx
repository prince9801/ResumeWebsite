
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    title: "Summer Training: Object-Oriented Programming",
    company: "Lovely Professional University",
    period: "8 June 2023 - 20 July",
    description: [
      "Learned core OOP concepts: classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
      "Built an interactive N-Queen Visualizer project demonstrating problem-solving and algorithm visualization using [Java/C++/Python]."
    ]
  },
  {
    title: "R Programming",
    company: "Coursera",
    period: "March 2024",
    description: [
      "Gained proficiency in R programming for statistical analysis, data manipulation, and visualization.",
      "Learned core concepts such as data frames, vectors, matrices, lists, and control structures.",
      "Applied R to perform data cleaning, exploratory data analysis (EDA), and create informative visualizations using libraries like ggplot2 and dplyr."
    ]
  },
  {
    title: "Data Analysis with Tableau",
    company: "Coursera",
    period: "November 2024",
    description: [
      "Learned to create interactive dashboards, visualizations, and reports using Tableau.",
      "Gained skills in data cleaning, trend analysis, and storytelling with data through charts, graphs, and maps.",
      "Applied Tableau functions to analyze datasets, identify patterns, and communicate insights effectively.",
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">CERTIFICATIONS</h2>
          <p className="text-tech-light/70 max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 overflow-hidden relative border-l-4 border-l-tech-purple">
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-tech-light">{exp.title}</h3>
                  <p className="text-tech-purple mt-1 mb-2">{exp.company}</p>
                  <p className="text-tech-light/60 text-sm mb-4">{exp.period}</p>

                  <ul className="space-y-2 ml-6 list-disc text-tech-light/80">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Timeline dot */}
                <div className="absolute top-6 -left-2 w-4 h-4 rounded-full bg-tech-purple"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-medium text-tech-light mb-2">Secured Global Rank 2137 out of 26,400</h4>
              <p className="text-tech-light/70">
                In LeetCode Contest 315. Proficiency in algorithms, solving DSA problems, problem-solving approach, and algorithmic thinking.
              </p>
            </Card>
            
            <Card className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <h4 className="text-lg font-medium text-tech-light mb-2">Earned Top 25% globally</h4>
              <p className="text-tech-light/70">
                With a LeetCode rating of 1681+, demonstrating competitive programming expertise.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
