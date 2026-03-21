import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "internships", "projects", "skills", "publications", "blog", "github", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#publications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="text-2xl md:text-3xl font-heading font-bold gradient-text hover:opacity-80 transition-all duration-400"
          >
            LSGR
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 relative group ${
                    isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-400 ease-out ${
                      isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </a>
              );
            })}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 hover:bg-primary/10 transition-all duration-300 hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center md:hidden space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="hover:rotate-12 transition-all duration-300">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <X className={`h-6 w-6 absolute transition-all duration-400 ${isMobileMenuOpen ? "rotate-0 opacity-100 scale-100" : "rotate-90 opacity-0 scale-75"}`} />
                <Menu className={`h-6 w-6 absolute transition-all duration-400 ${isMobileMenuOpen ? "-rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 bg-background/95 backdrop-blur-xl border-t border-border/50 rounded-b-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
