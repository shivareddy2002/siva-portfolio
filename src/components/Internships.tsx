import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Internships = () => {
  const internships = [
    {
      role: "Data Science Intern",
      company: "CeduraTech",
      location: "Hyderabad",  
      period: "Oct 2025 – Dec 2025",
      description: "Worked on Text Generation using GRU, applying deep learning techniques and natural language processing.",
      project: "Text Generation Model",
      achievements: [
        "Preprocessed and analyzed text datasets for sequence learning and model optimization.",
        "Developed and trained a GRU-based neural network using TensorFlow and Keras to generate coherent text.",
        "Deployed the trained model as an interactive web app using Streamlit, demonstrating end-to-end project execution.",
      ],
      tech: ["Python","Deep Learning", "GRU", "RNN", "NLP", "Tokenization","Data Cleaning", "Streamlit", "TensorFlow", "Keras"],
      github: "https://github.com/shivareddy2002/GRU-Text-Generation",
      demo: "https://text-generation-using-gru-model.streamlit.app/",
    },
  ];

  return (
    <section id="internships" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on industry experience in data science and AI development
          </p>
        </ScrollReveal>

        <div className="w-full">
          {internships.map((internship, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="group hover:shadow-lg transition-all duration-300 border hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl font-heading group-hover:text-primary transition-colors duration-300">
                        {internship.role}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                        <p className="text-lg font-semibold text-foreground">
                          {internship.company}, {internship.location}
                        </p>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <p className="text-sm text-muted-foreground">
                          {internship.period}
                        </p>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm md:text-base mt-4 pl-16">
                    {internship.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pl-16">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-primary mt-1">◦</span>
                          <span className="text-sm md:text-base leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
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
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-initial hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                      <a href={internship.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1 sm:flex-initial bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity duration-300" asChild>
                      <a href={internship.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
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
