import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold gradient-text mb-2">
              LSGR
            </h3>
            <p className="text-sm text-muted-foreground">
              Aspiring Data Analyst | Data Scientist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/lomada-siva-gangi-reddy-a64197280/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/shivareddy2002"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:lomadasivagangireddy3@gmail.com"
              className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+919346493592"
              className="w-10 h-10 rounded-full border-2 border-border hover:border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lomada Siva Gangi Reddy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
