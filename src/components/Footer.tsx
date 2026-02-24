import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/lomada-siva-gangi-reddy-a64197280/", icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", external: true },
    { href: "https://github.com/shivareddy2002", icon: <Github className="h-4 w-4" />, label: "GitHub", external: true },
    { href: "mailto:lomadasivagangireddy3@gmail.com", icon: <Mail className="h-4 w-4" />, label: "Email", external: false },
    { href: "tel:+919346493592", icon: <Phone className="h-4 w-4" />, label: "Phone", external: false },
    { href: "https://wa.me/919346493592", icon: <MessageCircle className="h-4 w-4" />, label: "WhatsApp", external: true },
  ];

  return (
    <footer className="py-10 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold gradient-text mb-1">
              LSGR
            </h3>
            <p className="text-sm text-muted-foreground">
              Aspiring Data Analyst | Data Scientist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
