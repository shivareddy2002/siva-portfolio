import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Water Stress Prediction",
      description: "Advanced prediction system using CNN+LSTM+ML algorithms on IoT sensor data to forecast water stress levels in tomato plants with high accuracy.",
      tech: ["Python", "TensorFlow", "CNN", "LSTM", "IoT", "ML"],
      github: "https://github.com/shivareddy2002",
      demo: "#",
    },
    {
      title: "Rice Type Classifier",
      description: "Deep learning CNN model with interactive Streamlit web application for automated rice variety classification using image recognition.",
      tech: ["Python", "CNN", "Streamlit", "Deep Learning", "OpenCV"],
      github: "https://github.com/shivareddy2002",
      demo: "#",
    },
    {
      title: "Text Generation Model",
      description: "GRU-based RNN implementation with Streamlit interface for generating contextual text sequences using advanced natural language processing.",
      tech: ["Python", "GRU", "RNN", "NLP", "Streamlit"],
      github: "https://github.com/shivareddy2002",
      demo: "#",
    },
    {
      title: "Word Search Chatbot",
      description: "Intelligent chatbot leveraging Wikipedia API to provide instant, accurate information retrieval and conversational responses.",
      tech: ["Python", "API Integration", "NLP", "Chatbot"],
      github: "https://github.com/shivareddy2002",
      demo: "#",
    },
    {
      title: "Zomato Data Analysis",
      description: "Comprehensive exploratory data analysis of Zomato restaurant data with interactive visualizations revealing customer behavior and market trends.",
      tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "Data Analysis"],
      github: "https://github.com/shivareddy2002",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing hands-on experience in data science, machine learning, and analytics
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
