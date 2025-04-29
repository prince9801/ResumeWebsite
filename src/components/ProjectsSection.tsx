import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Zomato-Dashboard",
    description: "Designed and developed an interactive and visually compelling dashboard for Zomato data using Power BI and Tableau. Extracted, cleaned, and transformed large datasets to uncover insights into restaurant ratings, customer reviews, pricing trends, and food delivery patterns.",
    tags: ["Tableau", "PowerBi"],
    imageUrl: "/image.png",
    githubUrl: "https://github.com",
    demoUrl: "https://app.powerbi.com/groups/me/reports/e893db4a-5aaa-4dc4-98cd-9c5003207c51/294dbece42256321c7d4?experience=power-bi"
  },
  {
    title: "Railway Ticket Booking",
    description: "Developed a mobile-responsive railway booking website, improving booking efficiency by 30% with streamlined workflows and seamless cross-platform compatibility (100% responsiveness).",
    tags: ["Html", "Css", "JavaScript", "Bootstrap"],
    imageUrl: "/train.jpg",
    githubUrl: "https://github.com/ajaditya00/RailwayTicketingWebsite",
    demoUrl: "https://ajaditya00.github.io/RailwayTicketingWebsite/"
  },
  {
    title: "N Queen Visualizer",
    description: "Built a web-based N-Queen visualizer featuring real-time step-by-step visualization using a recursive backtracking algorithm. Designed an intuitive UI with adjustable board sizes and controls to start, pause, and reset the visualization, making algorithmic concepts easy to understand.",
    tags: ["Html", "Css", "TypeScript", "JavaScript"],
    imageUrl: "/NQueen.jpg",
    githubUrl: "https://github.com/ajaditya00/NQueen",
    demoUrl: "https://ajaditya00.github.io/NQueen/"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="glass-card overflow-hidden h-full flex flex-col hover:border-tech-purple/50 transition-all duration-300">
        <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-tech-blue/10 via-tech-purple/10 to-tech-pink/10">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-tech-light">{project.title}</h3>
          <p className="text-tech-light/70 mb-4 flex-grow">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-tech-purple/20 text-tech-light/90 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              asChild
              disabled={!project.githubUrl}
            >
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                  Code
                </a>
              ) : (
                <span className="flex items-center gap-2">
                  <Github size={16} />
                  Code
                </span>
              )}
            </Button>

            <Button
              size="sm"
              className="bg-tech-purple hover:bg-tech-purple/90"
              asChild
              disabled={!project.demoUrl}
            >
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              ) : (
                <span className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  Live Demo
                </span>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-tech-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Projects & Work</h2>
          <p className="text-tech-light/70 max-w-2xl mx-auto">
            A showcase of my technical projects and professional work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-tech-light/70 mb-4">
            Along with these featured projects, I've also worked on various other technical initiatives.
          </p>
          <Button
            variant="outline"
            className="border-tech-purple/30 text-tech-purple hover:text-tech-light hover:bg-tech-purple/80"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
