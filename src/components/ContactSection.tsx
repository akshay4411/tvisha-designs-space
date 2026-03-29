import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tvisha-bhardwaj-a349a630b/" },
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">Contact</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.85] tracking-tighter mb-16"
        >
          Let's
          <br />
          <span className="text-primary">Connect</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { label: "Name", type: "text", key: "name" as const, placeholder: "Your name" },
              { label: "Email", type: "email", key: "email" as const, placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors"
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <div>
              <label className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your idea..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading text-sm font-bold uppercase tracking-wider px-10 py-4 hover:opacity-90 transition-opacity"
            >
              Send Message
              <ArrowUpRight size={18} />
            </motion.button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
                Find me on
              </p>
              <div className="space-y-0">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-t border-border py-5 hover:bg-card/50 transition-colors px-2 -mx-2"
                  >
                    <span className="font-heading text-lg font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
                <div className="border-t border-border" />
              </div>
            </div>

            <p className="font-heading text-2xl md:text-3xl font-bold italic text-foreground/20 mt-12">
              "Every space has a story waiting to be designed."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
