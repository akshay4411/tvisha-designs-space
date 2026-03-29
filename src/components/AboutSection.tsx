import { motion } from "framer-motion";
import tvishaPhoto from "@/assets/tvisha-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">About</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="relative overflow-hidden">
              <img
                src={tvishaPhoto}
                alt="Tvisha Bhardwaj"
                loading="lazy"
                width={400}
                height={400}
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            </div>
          </motion.div>

          {/* Text */}
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[0.9] tracking-tight mb-8"
            >
              Where
              <br />
              Creativity
              <br />
              <span className="text-primary">Meets</span>
              <br />
              Structure
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5 font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg"
            >
              <p>
                I'm Tvisha Bhardwaj — an architecture student at{" "}
                <span className="text-foreground">
                  MBS School of Planning and Architecture
                </span>
                , West Delhi. Driven by curiosity for how spaces shape human experiences.
              </p>
              <p>
                As a member of{" "}
                <span className="text-foreground">NASA India</span>, I've immersed
                myself in workshops, design competitions, and collaborative learning —
                including exposure at{" "}
                <span className="text-foreground">CP Kukreja Architects</span>.
              </p>
              <p>
                My work is guided by sustainable design, thoughtful urban planning, and
                human-centered spaces. Architecture isn't just structures — it's
                crafting environments that nurture, inspire, and endure.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-12 mt-10 pt-8 border-t border-border"
            >
              {[
                { num: "04+", label: "Projects" },
                { num: "02+", label: "Years" },
                { num: "∞", label: "Passion" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl md:text-3xl font-bold text-primary">
                    {stat.num}
                  </p>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
