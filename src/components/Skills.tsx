import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, BarChart3, Brain, MessageSquare } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Python", "SQL", "Java", "C", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Science & ML",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Machine Learning", "Deep Learning", "TensorFlow", "Scikit-learn", "NLP"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ["Power BI", "Excel", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Databases & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "Git", "GitHub", "Jupyter", "VS Code"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Other Technical Skills",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Data Preprocessing", "Feature Engineering", "Model Evaluation", "Data Visualization Dashboards"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: ["Teamwork", "Problem Solving", "Communication", "Quick Learning", "Time Management", "Analytical Thinking"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern data science tools and technologies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Progression Visual */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-heading font-semibold mb-6 text-center">
                Core Competencies
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Python & Data Analysis", level: 90 },
                  { name: "Machine Learning", level: 85 },
                  { name: "SQL & Database Management", level: 80 },
                  { name: "Data Visualization", level: 85 },
                  { name: "Deep Learning", level: 75 },
                ].map((skill, index) => (
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
      </div>
    </section>
  );
};

export default Skills;
