import { Card, CardContent } from "@/components/ui/card";

const CoreCompetencies = () => {
  const competencies = [
    { name: "Python & Data Analysis", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "SQL & Database Management", level: 80 },
    { name: "Data Visualization", level: 85 },
    { name: "Deep Learning", level: 75 },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Core <span className="gradient-text">Competencies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
        </div>

        <Card className="border-2 animate-fade-in">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              {competencies.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm md:text-base">{skill.name}</span>
                    <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animation: `slide-in 1s ease-out ${index * 0.1}s both`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoreCompetencies;
