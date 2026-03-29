import { motion } from "framer-motion";
import { GraduationCap, Users, Building } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "MBS School of Planning and Architecture",
    role: "Architecture Student",
    period: "Current",
    desc: "Pursuing a degree in architecture with a focus on sustainable design and urban planning in West Delhi.",
  },
  {
    icon: Users,
    title: "NASA India",
    role: "Active Member",
    period: "Current",
    desc: "Engaging with India's architecture student community through workshops, competitions, and collaborative design events.",
  },
  {
    icon: Building,
    title: "CP Kukreja Architects",
    role: "Learning Exposure",
    period: "Experience",
    desc: "Gained hands-on insight into professional architectural practice at one of India's leading firms.",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
            Experience
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
            My <span className="italic text-primary">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-6 z-10" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <span className="font-body text-xs tracking-wider uppercase text-secondary">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm font-medium text-primary mb-2">
                      {item.role}
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
