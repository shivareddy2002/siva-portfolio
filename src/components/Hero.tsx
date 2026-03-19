import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [typingDone, setTypingDone] = useState(false);

  const fullText =
    "Data Engineering Intern @ Boolean Data Systems\nAspiring Data Scientist / Data Engineer | Python, SQL, ML, DL, NLP, Power BI";

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showContent) return;
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTypingDone(true);
      }
    }, 35);
    return () => clearInterval(timer);
  }, [showContent]);

  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

  const stagger = (delay: number) => ({
    opacity: showContent ? 1 : 0,
    transform: showContent ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8s ${ease} ${delay}s, transform 0.8s ${ease} ${delay}s`,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center gap-7">

          {/* Avatar with ring animation */}
          <div
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "scale(1)" : "scale(0.8)",
              transition: `opacity 0.9s ${ease}, transform 0.9s ${ease}`,
            }}
          >
            <div className="relative">
              <Avatar className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 border-4 border-primary/20 shadow-2xl ring-4 ring-primary/10 [&>img]:object-cover [&>img]:object-top">
                <AvatarImage src={profileImage} alt="Lomada Siva Gangi Reddy" className="object-cover" />
                <AvatarFallback className="text-4xl font-heading bg-gradient-to-br from-primary to-secondary text-white">
                  LSGR
                </AvatarFallback>
              </Avatar>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
            </div>
          </div>

          {/* Name */}
          <div style={stagger(0.1)}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight leading-tight">
              Lomada Siva Gangi Reddy
            </h1>
          </div>

          {/* Typing animation */}
          <div style={stagger(0.15)} className="w-full max-w-2xl">
            <div className="min-h-[56px] flex items-center justify-center">
              <p className="text-sm sm:text-base md:text-lg font-medium text-muted-foreground whitespace-pre-line leading-relaxed text-center">
                {typedText}
                <span
                  className={`inline-block w-[2px] h-5 sm:h-6 bg-primary ml-1 align-middle ${typingDone ? "animate-blink" : "opacity-100"}`}
                />
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4" style={stagger(0.3)}>
            <Button
              size="lg"
              className="text-sm md:text-base px-7 py-5 font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl btn-glow"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1pAFCovAml0tfgLPa-qMXpn1sulbQAvJH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-sm md:text-base px-7 py-5 font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </a>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3" style={stagger(0.45)}>
            {[
              { href: "https://www.linkedin.com/in/lomada-siva-gangi-reddy-a64197280/", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              { href: "https://github.com/shivareddy2002", icon: <Github className="h-5 w-5" />, label: "GitHub" },
            ].map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>

          {/* Scroll indicator */}
          <div
            className="mt-4"
            style={{
              opacity: showContent ? 0.5 : 0,
              transition: `opacity 1s ${ease} 1.5s`,
            }}
          >
            <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors duration-300">
              <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
