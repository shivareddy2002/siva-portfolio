import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

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
    { href: "#contact", label: "Contact" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold gradient-text mb-2">LSGR</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Aspiring Data Scientist passionate about transforming data into actionable insights through ML, DL & NLP.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider mb-3">Connect</h4>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full border border-border hover:border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lomada Siva Gangi Reddy. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;