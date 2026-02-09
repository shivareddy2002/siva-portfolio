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
    <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
  <div className="container mx-auto max-w-7xl">
    <ScrollReveal className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
        Core <span className="gradient-text">Competencies</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
    </ScrollReveal>

    <ScrollReveal>
      <Card className="border">
        <CardContent className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {competencies.map((skill, index) => (
              <ProgressBar
                key={index}
                name={skill.name}
                level={skill.level}
                index={index}
              />
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
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm md:text-base">{name}</span>
        <span className="text-sm font-semibold text-primary">{level}%</span>
      </div>
      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transition: `width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s`,
          }}
        />
      </div>
    </div>
  );
};

export default CoreCompetencies;
