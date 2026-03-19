import { Github, Linkedin, Mail, Phone, MessageCircle, ArrowUp } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/lomada-siva-gangi-reddy-a64197280/", icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", external: true },
    { href: "https://github.com/shivareddy2002", icon: <Github className="h-4 w-4" />, label: "GitHub", external: true },
    { href: "mailto:lomadasivagangireddy3@gmail.com", icon: <Mail className="h-4 w-4" />, label: "Email", external: false },
    { href: "tel:+919346493592", icon: <Phone className="h-4 w-4" />, label: "Phone", external: false },
    { href: "https://wa.me/919346493592", icon: <MessageCircle className="h-4 w-4" />, label: "WhatsApp", external: true },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#publications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">
          {/* Brand */}
          <ScrollReveal direction="left" delay={0}>
            <div>
              <h3 className="text-2xl font-heading font-bold gradient-text mb-3">LSGR</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Data Engineering Intern @ Boolean Data Systems.
                Aspiring Data Scientist passionate about transforming data into actionable insights through ML, DL & NLP.
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="none" delay={0.08}>
            <div>
              <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal direction="right" delay={0.16}>
            <div>
              <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider mb-4">Connect</h4>
              <div className="flex items-center gap-2.5 flex-wrap">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Divider & Copyright */}
        <ScrollReveal delay={0.2}>
          <div className="border-t border-border pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lomada Siva Gangi Reddy. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
