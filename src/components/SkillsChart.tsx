import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/hooks/useScrollReveal";

interface SkillBarProps {
  label: string;
  value: number;
  color: string;
  delay: number;
}

const SkillBar = ({ label, value, color, delay }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(value), delay * 1000);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
};

const DonutSegment = ({ percentage, color, offset, label }: { percentage: number; color: string; offset: number; label: string }) => {
  const [animated, setAnimated] = useState(false);
  const circumference = 2 * Math.PI * 60;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
  const strokeDashoffset = -offset * (circumference / 100);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 300);
  }, []);

  return (
    <circle
      cx="80"
      cy="80"
      r="60"
      fill="none"
      stroke={color}
      strokeWidth="16"
      strokeDasharray={animated ? strokeDasharray : `0 ${circumference}`}
      strokeDashoffset={strokeDashoffset}
      strokeLinecap="round"
      className="transition-all duration-1000 ease-out"
      style={{ transformOrigin: "80px 80px", transform: "rotate(-90deg)" }}
    >
      <title>{label}: {percentage}%</title>
    </circle>
  );
};

const SkillsChart = () => {
  const skills = [
    { label: "Python", value: 90, color: "linear-gradient(90deg, #06b6d4, #3b82f6)" },
    { label: "Machine Learning", value: 85, color: "linear-gradient(90deg, #3b82f6, #6366f1)" },
    { label: "Deep Learning", value: 80, color: "linear-gradient(90deg, #6366f1, #8b5cf6)" },
    { label: "SQL", value: 85, color: "linear-gradient(90deg, #8b5cf6, #a855f7)" },
    { label: "Power BI", value: 80, color: "linear-gradient(90deg, #a855f7, #06b6d4)" },
    { label: "NLP", value: 75, color: "linear-gradient(90deg, #06b6d4, #14b8a6)" },
  ];

  const techStack = [
    { label: "Data Science", percentage: 35, color: "#06b6d4" },
    { label: "ML/DL", percentage: 25, color: "#3b82f6" },
    { label: "Analytics", percentage: 20, color: "#6366f1" },
    { label: "Web Dev", percentage: 10, color: "#8b5cf6" },
    { label: "Other", percentage: 10, color: "#a855f7" },
  ];

  let cumulativeOffset = 0;

  return (
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Skills <span className="gradient-text">Analytics</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <ScrollReveal delay={0.1}>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-heading">Skills Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.label} {...skill} delay={i * 0.15} />
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Donut Chart */}
          <ScrollReveal delay={0.2}>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-heading">Tech Stack Usage</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <svg width="160" height="160" viewBox="0 0 160 160" className="mb-4">
                  {techStack.map((segment) => {
                    const el = (
                      <DonutSegment
                        key={segment.label}
                        percentage={segment.percentage}
                        color={segment.color}
                        offset={cumulativeOffset}
                        label={segment.label}
                      />
                    );
                    cumulativeOffset += segment.percentage;
                    return el;
                  })}
                </svg>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {techStack.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="text-foreground font-medium ml-auto">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;
