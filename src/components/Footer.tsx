import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border">
    {/* Marquee */}
    <div className="overflow-hidden py-8 border-b border-border">
      <div className="marquee-reverse whitespace-nowrap">
        <span className="font-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tighter text-foreground/[0.03]">
          SUSTAINABLE DESIGN • URBAN SPACES • HUMAN-CENTERED • CREATIVE VISION • SPATIAL THINKING •&nbsp;
        </span>
        <span className="font-heading text-5xl md:text-7xl font-extrabold uppercase tracking-tighter text-foreground/[0.03]">
          SUSTAINABLE DESIGN • URBAN SPACES • HUMAN-CENTERED • CREATIVE VISION • SPATIAL THINKING •&nbsp;
        </span>
      </div>
    </div>

    <div className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-heading text-sm font-bold uppercase tracking-wider text-foreground"
      >
        Tvisha Bhardwaj<span className="text-primary">.</span>
      </motion.p>
      <p className="font-body text-xs tracking-wider text-muted-foreground">
        © 2026 — Designed with intention
      </p>
    </div>
  </footer>
);

export default Footer;
