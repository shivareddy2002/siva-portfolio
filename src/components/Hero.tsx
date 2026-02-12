import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@/assets/profile.png";
import HeroScene from "./HeroScene";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState("");
  const headline = "Agentic. Intelligent. Scalable.";

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showContent) return;
    let index = 0;
    const timer = setInterval(() => {
      if (index <= headline.length) {
        setTypedText(headline.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [showContent]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(222 47% 6%) 0%, hsl(217 50% 10%) 50%, hsl(222 47% 6%) 100%)",
      }}
    >
      {/* 3D Scene */}
      <HeroScene />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Pulse glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-[1] pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Avatar */}
          <div
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "scale(1)" : "scale(0.9)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <Avatar className="w-28 h-28 md:w-36 md:h-36 border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
              <AvatarImage src={profileImage} alt="Lomada Siva Gangi Reddy" />
              <AvatarFallback className="text-3xl font-heading bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                LSGR
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <div
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
            }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Lomada Siva Gangi Reddy
            </h1>
          </div>

          {/* Typing headline */}
          <div
            className="h-12 sm:h-14 flex items-center justify-center"
            style={{
              opacity: showContent ? 1 : 0,
              transition: "opacity 0.8s ease 0.3s",
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {typedText}
              <span className="inline-block w-0.5 h-8 sm:h-10 md:h-12 bg-cyan-400 ml-1 animate-blink align-middle" />
            </h2>
          </div>

          {/* Subheading */}
          <p
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.45s, transform 0.8s ease 0.45s",
            }}
          >
            I build AI-powered data systems that transform raw data into real business intelligence.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
            }}
          >
            <Button
              size="lg"
              className="text-base md:text-lg px-8 py-6 font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-300"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-8 py-6 font-semibold border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300"
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
            className="flex gap-4 mt-2"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s ease 0.75s, transform 0.8s ease 0.75s",
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/lomada-siva-gangi-reddy-a64197280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/shivareddy2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div
            className="mt-8 animate-float"
            style={{
              opacity: showContent ? 1 : 0,
              transition: "opacity 0.8s ease 0.9s",
            }}
          >
            <ArrowDown className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
