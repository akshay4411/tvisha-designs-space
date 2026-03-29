import { motion } from "framer-motion";

const timeline = [
  {
    num: "01",
    title: "MBS School of Planning and Architecture",
    role: "Architecture Student",
    period: "Current",
    desc: "Pursuing architecture with focus on sustainable design and urban planning, West Delhi.",
  },
  {
    num: "02",
    title: "NASA India",
    role: "Active Member",
    period: "Current",
    desc: "Engaging with India's architecture student community through workshops, competitions, and design events.",
  },
  {
    num: "03",
    title: "CP Kukreja Architects",
    role: "Learning Exposure",
    period: "Experience",
    desc: "Gained hands-on insight into professional architectural practice at one of India's leading firms.",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">Experience</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-5xl md:text-7xl font-extrabold uppercase leading-[0.85] tracking-tighter mb-16"
        >
          The
          <br />
          <span className="text-stroke">Journey</span>
        </motion.h2>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group border-t border-border py-8 md:py-12 grid md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-card/50 transition-colors duration-300 px-2 -mx-2"
            >
              <span className="font-heading text-4xl md:text-5xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors md:col-span-2">
                {item.num}
              </span>
              <div className="md:col-span-4">
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mt-1">
                  {item.role}
                </p>
              </div>
              <div className="md:col-span-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
