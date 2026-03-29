import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-sage-light/50 -rotate-3" />
              <img
                src={profilePhoto}
                alt="Tvisha Bhardwaj"
                width={400}
                height={400}
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
              About Me
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
              Where Creativity
              <br />
              <span className="italic text-primary">Meets Structure</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                I'm Tvisha Bhardwaj — an architecture student at{" "}
                <span className="text-foreground font-medium">
                  MBS School of Planning and Architecture
                </span>
                , West Delhi, driven by a deep curiosity for how spaces shape human experiences.
              </p>
              <p>
                As a proud member of{" "}
                <span className="text-foreground font-medium">NASA India</span>
                , I've immersed myself in the broader architecture community,
                participating in workshops, design competitions, and collaborative
                learning experiences — including an enriching exposure at{" "}
                <span className="text-foreground font-medium">
                  CP Kukreja Architects
                </span>
                .
              </p>
              <p>
                My work is guided by a commitment to sustainable design, thoughtful
                urban planning, and human-centered spaces. I believe architecture
                isn't just about structures — it's about crafting environments that
                nurture, inspire, and endure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
