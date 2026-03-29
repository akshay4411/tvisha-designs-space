import { motion } from "framer-motion";
import { PenTool, Box, Building2, Image, Scissors, Lightbulb } from "lucide-react";

const skills = [
  { name: "AutoCAD", icon: PenTool, desc: "Technical drafting" },
  { name: "SketchUp", icon: Box, desc: "3D modeling" },
  { name: "Revit", icon: Building2, desc: "BIM workflows" },
  { name: "Photoshop", icon: Image, desc: "Visual storytelling" },
  { name: "Model Making", icon: Scissors, desc: "Physical prototyping" },
  { name: "Concept Design", icon: Lightbulb, desc: "Ideation & vision" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
            Toolkit
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
            Skills & <span className="italic text-primary">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent mb-4 group-hover:bg-sage-light transition-colors">
                <skill.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-base font-medium text-foreground mb-1">
                {skill.name}
              </h3>
              <p className="font-body text-xs text-muted-foreground">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
