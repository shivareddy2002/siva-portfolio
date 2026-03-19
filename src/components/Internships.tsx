import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Internships = () => {
  const internships = [
    {
      role: "Data Engineering Intern",
      company: "Boolean Data Private Limited",
      location: "Remote",
      period: "Mar 2026 – Present",
      description: "Working on scalable data pipelines, ETL workflows, data migration, and performance optimization using Snowflake.",
      project: "Data Engineering",
      achievements: [
        "Building scalable data pipelines for real-world data problems.",
        "Developing ETL and data processing workflows across systems.",
        "Performing data migration and optimizing performance using Snowflake features.",
      ],
      tech: ["Snowflake", "SQL", "Python", "ETL", "Data Pipelines", "Data Migration", "Data Engineering"],
      website: "https://booleandata.ai/",
    },
    {
      role: "Data Science Intern",
      company: "CeduraTech",
      location: "Hyderabad",
      period: "Oct 2025 – Feb 2026",
      description: "Worked on Text Generation using GRU, applying deep learning techniques and natural language processing.",
      project: "Text Generation Model",
      achievements: [
        "Preprocessed and analyzed text datasets for sequence learning and model optimization.",
        "Developed and trained a GRU-based neural network using TensorFlow and Keras to generate coherent text.",
        "Deployed the trained model as an interactive web app using Streamlit, demonstrating end-to-end project execution.",
      ],
      tech: ["Python", "Deep Learning", "GRU", "RNN", "NLP", "Tokenization", "Data Cleaning", "Streamlit", "TensorFlow", "Keras"],
      github: "https://github.com/shivareddy2002/GRU-Text-Generation",
      demo: "https://text-generation-using-gru-model.streamlit.app/",
    },
  ];

  return (
    <section id="internships" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on industry experience in data engineering, data science, and AI development
          </p>
        </ScrollReveal>

        <div className="w-full max-w-4xl mx-auto space-y-6">
          {internships.map((internship, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="group card-lift border hover:border-primary/30 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl md:text-2xl font-heading group-hover:text-primary transition-colors duration-300">
                        {internship.role}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-2">
                        <p className="text-base sm:text-lg font-semibold text-foreground">
                          {internship.company}, {internship.location}
                        </p>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <Badge variant="secondary" className="w-fit text-xs">
                          {internship.period}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm md:text-base mt-4 ml-0 md:ml-[60px]">
                    {internship.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 ml-0 md:ml-[60px]">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Key Achievements:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0" />
                          <span className="text-sm md:text-base leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {internship.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {internship.github && (
                      <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                        <a href={internship.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {internship.demo && (
                      <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300" asChild>
                        <a href={internship.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {internship.website && (
                      <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300" asChild>
                        <a href={internship.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Company Website
                        </a>
                      </Button>
                    )}
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

export default Internships;
