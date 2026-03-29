import { motion } from "framer-motion";
import { useRef } from "react";
import projectResidential from "@/assets/project-residential.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectConcept from "@/assets/project-concept.jpg";
import projectSustainable from "@/assets/project-sustainable.jpg";

const projects = [
  {
    image: projectResidential,
    title: "Serene Dwelling",
    category: "Residential",
    year: "2025",
    desc: "A modern home harmonizing indoor-outdoor living through open plans and natural materials.",
  },
  {
    image: projectUrban,
    title: "Urban Commons",
    category: "Urban Design",
    year: "2024",
    desc: "Reimagining city plazas as vibrant pedestrian-first community spaces.",
  },
  {
    image: projectConcept,
    title: "Modular Living",
    category: "Conceptual",
    year: "2024",
    desc: "Interlocking modular units adapting to evolving family needs and sustainability.",
  },
  {
    image: projectSustainable,
    title: "Green Haven",
    category: "Sustainable",
    year: "2025",
    desc: "A community center integrating solar harvesting and biophilic design.",
  },
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      {/* Section label */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">Projects</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.85] tracking-tighter mb-16"
        >
          Selected
          <br />
          <span className="text-stroke">Work</span>
        </motion.h2>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw] snap-start group cursor-pointer"
          >
            <div className="relative overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
              
              {/* Overlay text on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-body text-sm text-foreground">{project.desc}</p>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                  {project.category}
                </p>
              </div>
              <span className="font-body text-xs text-primary mt-1">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
