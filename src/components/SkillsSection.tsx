import { motion } from "framer-motion";
import { PenTool, Box, Building2, Image, Scissors, Lightbulb } from "lucide-react";

const skills = [
  { name: "AutoCAD", icon: PenTool },
  { name: "SketchUp", icon: Box },
  { name: "Revit", icon: Building2 },
  { name: "Photoshop", icon: Image },
  { name: "Model Making", icon: Scissors },
  { name: "Concept Design", icon: Lightbulb },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">Toolkit</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8 flex flex-col items-center justify-center gap-4 group hover:bg-card transition-colors duration-300 cursor-default"
            >
              <skill.icon
                size={28}
                strokeWidth={1.5}
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
              />
              <span className="font-heading text-xs md:text-sm font-bold uppercase tracking-wider text-foreground text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
