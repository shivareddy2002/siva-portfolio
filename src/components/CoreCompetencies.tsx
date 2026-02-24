import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, useScrollReveal } from "@/hooks/useScrollReveal";

const CoreCompetencies = () => {
  const competencies = [
    { name: "Python", level: 90 },
    { name: "Data Analysis", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Visualization", level: 85 },
    { name: "SQL & Database Management", level: 80 },
    { name: "Deep Learning", level: 75 },
    { name: "Power BI & Excel", level: 70 },
    { name: "Natural Language Processing", level: 65 },
    { name: "Java", level: 65 },
  ];

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Core <span className="gradient-text">Competencies</span>
          </h2>
          <div className="section-divider" />
        </ScrollReveal>

        <ScrollReveal>
          <Card className="border">
            <CardContent className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {competencies.map((skill, index) => (
                  <ProgressBar key={index} name={skill.name} level={skill.level} index={index} />
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ProgressBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="space-y-2.5">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm md:text-base">{name}</span>
        <span
          className="text-sm font-semibold text-primary tabular-nums"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: `opacity 0.6s ease ${index * 0.15 + 0.4}s`,
          }}
        >
          {level}%
        </span>
      </div>
      <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transition: `width 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default CoreCompetencies;
