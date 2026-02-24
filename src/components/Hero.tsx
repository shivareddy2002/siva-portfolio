import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const fullText = "Aspiring Data Scientist | Python, SQL, ML, DL, NLP | Power BI, Excel";
  
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
      }
    }, 50);
    return () => clearInterval(timer);
  }, [showContent]);

  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Avatar */}
          <div
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "scale(1) translateY(0)" : "scale(0.85) translateY(16px)",
              filter: showContent ? "blur(0px)" : "blur(8px)",
              transition: `all 1s ${easing}`,
            }}
          >
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary/20 shadow-xl ring-4 ring-primary/5">
              <AvatarImage src={profileImage} alt="Lomada Siva Gangi Reddy" />
              <AvatarFallback className="text-4xl font-heading bg-gradient-to-br from-primary to-secondary text-white">
                LSGR
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <div
            className="space-y-4"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(24px)",
              filter: showContent ? "blur(0px)" : "blur(6px)",
              transition: `all 1s ${easing} 0.15s`,
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight leading-[1.1]">
              Lomada Siva Gangi Reddy
            </h1>
            
            {/* Typing animation */}
            <div className="h-8 sm:h-10 flex items-center justify-center">
              <p className="text-base sm:text-lg md:text-xl font-medium text-muted-foreground">
                {typedText}
                <span className="inline-block w-0.5 h-5 sm:h-6 md:h-7 bg-primary ml-1 animate-blink align-middle" />
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 pt-2"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(24px)",
              filter: showContent ? "blur(0px)" : "blur(6px)",
              transition: `all 1s ${easing} 0.35s`,
            }}
          >
            <Button
              size="lg"
              className="text-base md:text-lg px-8 py-6 font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl btn-glow"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1VPQAD8VTCP2l7Wyk8x9Bu6n5Z93om6iP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex gap-4 pt-2"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(20px)",
              filter: showContent ? "blur(0px)" : "blur(6px)",
              transition: `all 1s ${easing} 0.5s`,
            }}
          >
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/lomada-siva-gangi-reddy-a64197280/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/shivareddy2002"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
