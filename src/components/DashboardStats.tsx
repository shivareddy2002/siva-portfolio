import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FolderGit2, Brain, Award, GitCommit } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ target, suffix = "", duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const DashboardStats = () => {
  const stats = [
    {
      label: "Projects Completed",
      value: 6,
      suffix: "+",
      icon: <FolderGit2 className="h-6 w-6" />,
      glow: "from-cyan-500/20 to-blue-500/20",
    },
    {
      label: "ML Models Built",
      value: 10,
      suffix: "+",
      icon: <Brain className="h-6 w-6" />,
      glow: "from-blue-500/20 to-indigo-500/20",
    },
    {
      label: "Certifications",
      value: 5,
      suffix: "+",
      icon: <Award className="h-6 w-6" />,
      glow: "from-indigo-500/20 to-purple-500/20",
    },
    {
      label: "GitHub Contributions",
      value: 200,
      suffix: "+",
      icon: <GitCommit className="h-6 w-6" />,
      glow: "from-purple-500/20 to-cyan-500/20",
    },
  ];

  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Dashboard <span className="gradient-text">Overview</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="relative p-5 md:p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;
