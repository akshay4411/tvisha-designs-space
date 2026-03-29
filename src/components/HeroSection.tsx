import { motion } from "framer-motion";
import tvishaPhoto from "@/assets/tvisha-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-12 md:pb-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={tvishaPhoto}
          alt="Tvisha Bhardwaj"
          className="w-full h-full object-cover object-top"
          width={400}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Marquee ticker */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden opacity-[0.04] pointer-events-none">
        <div className="marquee whitespace-nowrap">
          <span className="font-heading text-[12rem] md:text-[20rem] font-extrabold uppercase tracking-tighter">
            ARCHITECTURE • DESIGN • SPACES • ARCHITECTURE • DESIGN • SPACES •&nbsp;
          </span>
          <span className="font-heading text-[12rem] md:text-[20rem] font-extrabold uppercase tracking-tighter">
            ARCHITECTURE • DESIGN • SPACES • ARCHITECTURE • DESIGN • SPACES •&nbsp;
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 md:mb-6"
        >
          Architecture Student • MBS School of Planning
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-[0.85] tracking-tighter text-foreground"
        >
          Tvisha
          <br />
          <span className="text-stroke-gold">Bhardwaj</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-6 mt-8 md:mt-12"
        >
          <div className="w-16 h-px bg-primary" />
          <p className="font-heading text-sm md:text-base italic text-foreground/80">
            Designing spaces that tell stories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.3em] uppercase text-primary hover:text-foreground transition-colors group"
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-lg"
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
