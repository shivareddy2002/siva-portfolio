import { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import About from "@/components/About";
import Internships from "@/components/Internships";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import CoreCompetencies from "@/components/CoreCompetencies";
import Blog from "@/components/Blog";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Add transitioning class for smooth theme switch, then remove after animation
    document.documentElement.classList.add("transitioning");
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTimeout(() => document.documentElement.classList.remove("transitioning"), 400);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Internships />
      <Projects />
      <Skills />
      <CoreCompetencies />
      <Publications />
      <Blog />
      <GitHubStats />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
