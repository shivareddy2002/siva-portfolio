import { GraduationCap, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      institution: "RGMCET",
      period: "2021 - 2025",
      score: "CGPA: 8.3",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "Intermediate",
      institution: "Junior College",
      period: "2019 - 2021",
      score: "93%",
      icon: <Award className="h-6 w-6" />,
    },
    {
      degree: "High School",
      institution: "Secondary School",
      period: "2018 - 2019",
      score: "GPA: 9.8",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6 animate-slide-in">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4 text-primary">
                  Professional Summary
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Aspiring Data Analyst seeking to leverage strong analytical skills, 
                  machine learning knowledge, and hands-on project experience to deliver 
                  data-driven insights and contribute to business growth. Passionate about 
                  transforming raw data into actionable intelligence through advanced 
                  analytics and visualization techniques.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl md:text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education Timeline
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-primary hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base md:text-lg text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-sm md:text-base text-muted-foreground">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-2 text-xs md:text-sm">
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                            {edu.period}
                          </span>
                          <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full font-medium">
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
