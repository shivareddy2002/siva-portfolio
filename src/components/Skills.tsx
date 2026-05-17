import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, BarChart3, Database, Code2, MessageSquare, Server } from "lucide-react";
const Skills = () => {
const skillCategories = [
  {
    title: "Data Engineering",
    icon: <Database className="h-6 w-6" />,
    skills: [
      "Snowflake",
      "ETL Pipelines",
      "Data Warehousing",
      "Data Migration",
      // "CDC",
      // "Pipeline Automation",
      "Data Modeling",
    ],
    color: "from-primary to-secondary",
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      "Python",
      "SQL",
      "Java",
      "C",
      "HTML",
      "CSS",
    ],
    color: "from-secondary to-accent",
  },
  {
    title: "Data Science & ML",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      "ML",
      "DL",
      "AI",
      "TensorFlow",
      "Scikit-learn",
      "NLP",
      "LLM",
    ],
    color: "from-primary to-accent",
  },
  {
    title: "Data Analysis & Visualization",
    icon: <BarChart3 className="h-6 w-6" />,
    skills: [
      "Power BI",
      "Excel",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Streamlit",
    ],
    color: "from-secondary to-primary",
  },
  {
    title: "Databases & Tools",
    icon: <Server className="h-6 w-6" />,
    skills: [
      "MySQL",
      "Snowflake",
      "Git",
      "GitHub",
      "Jupyter",
      "VS Code",
    ],
    color: "from-accent to-primary",
  },
  {
    title: "Professional & Technical Skills",
    icon: <MessageSquare className="h-6 w-6" />,
    skills: [
      // "Feature Engineering",
      // "Model Evaluation",
      "Problem Solving",
      "Analytical Thinking",
      "Teamwork",
      "Communication",
      "Quick Learning",
      "Time Management",
    ],
    color: "from-primary to-secondary",
  },
];

  return (
    <section id="skills" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern data science tools and technologies
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.06}>
              <Card className="group h-full card-lift border overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
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
                        className="text-sm px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
