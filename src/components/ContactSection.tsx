import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Instagram, Globe } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with backend later
    alert("Thank you for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
            Let's <span className="italic text-primary">Connect</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-5 gap-12"
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                placeholder="Tell me about your idea..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send size={16} />
            </motion.button>
          </form>

          {/* Social */}
          <div className="md:col-span-2 flex flex-col justify-center gap-4">
            <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2">
              Find me on
            </p>
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tvisha-bhardwaj-a349a630b/" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Globe, label: "Behance", href: "#" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <social.icon size={18} />
                </div>
                <span className="font-body text-sm">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
