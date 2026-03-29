import { motion } from "framer-motion";
import projectResidential from "@/assets/project-residential.jpg";
import projectUrban from "@/assets/project-urban.jpg";
import projectConcept from "@/assets/project-concept.jpg";
import projectSustainable from "@/assets/project-sustainable.jpg";

const projects = [
  {
    image: projectResidential,
    title: "Serene Dwelling",
    category: "Residential Design",
    desc: "A modern home that harmonizes indoor-outdoor living through open floor plans and natural materials.",
  },
  {
    image: projectUrban,
    title: "Urban Commons",
    category: "Urban Design",
    desc: "Reimagining a city plaza as a vibrant pedestrian-first community space with green corridors.",
  },
  {
    image: projectConcept,
    title: "Modular Living",
    category: "Conceptual Work",
    desc: "An exploration of interlocking modular units that adapt to evolving family needs and sustainability goals.",
  },
  {
    image: projectSustainable,
    title: "Green Haven Center",
    category: "Sustainable Design",
    desc: "A community center integrating solar harvesting, rainwater collection, and biophilic design principles.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
            Selected Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
            Design <span className="italic text-primary">Projects</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-background border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="font-body text-xs tracking-wider uppercase bg-background/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
