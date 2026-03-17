import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  const projects = [
    {
      title: "Water Stress Prediction",
      description: "Advanced prediction system using CNN+LSTM+ML algorithms on IoT sensor data to forecast water stress levels in tomato plants with high accuracy.",
      tech: ["Python", "TensorFlow", "CNN", "LSTM", "IoT", "ML"],
      github: "https://github.com/shivareddy2002/classification-and-forecasting-of-water-stress-in-tomato-plant",
      demo: "https://classification-and-forecasting-of-water-stress-in-tomato-plant.streamlit.app/",
    },
    {
      title: "Rice Type Classifier",
      description: "Deep learning CNN model with interactive Streamlit web application for automated rice variety classification using image recognition.",
      tech: ["Python", "CNN", "Streamlit", "Deep Learning", "OpenCV"],
      github: "https://github.com/shivareddy2002/Rice-Grain-Classifier",
      demo: "https://rice-grain-classifier-project.streamlit.app/",
    },
    {
      title: "Word Search Chatbot",
      description: "Intelligent chatbot leveraging Wikipedia API to provide instant, accurate information retrieval and conversational responses.",
      tech: ["Python", "API Integration", "NLP", "Chatbot"],
      github: "https://github.com/shivareddy2002/Word-Search-Chatbot-Using-Wikipedia-",
      demo: "https://shivareddy2002.github.io/Word-Search-Chatbot-Using-Wikipedia-/",
    },
    {
      title: "Zomato Data Analysis Dashboard",
      description: "Analyzed restaurant dataset to identify patterns in ratings, food types, and pricing with interactive visualizations.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
      github: "https://github.com/shivareddy2002/Zomato-Data-Analysis-Dashboard",
      demo: "https://zomato-data-analysis-dashboard.streamlit.app/",
    },
    {
      title: "AutoPredict Pro - Car Price Prediction",
      description: "End-to-end ML & DL web app predicting used car market value using multiple features with dual-model approach.",
      tech: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Streamlit"],
      github: "https://github.com/shivareddy2002/AutoPredictPro",
      demo: "https://autopredictpro.streamlit.app/",
    },
    {
      title: "Credit Card Transaction Dashboard",
      description: "Interactive Power BI dashboard for credit card analytics with SQL database, DAX measures for KPIs.",
      tech: ["Power BI", "SQL", "DAX", "Data Modeling"],
      github: "https://github.com/shivareddy2002/Credit_Card_Transaction_Report",
      demo: "https://drive.google.com/drive/folders/16T65EOoXPGIZTcLpNTc-AbGHeKpTW9zG?usp=sharing",
    },
    {
      title: "Stroke Detection",
      description: "Deep learning web app predicting stroke type from CT and MRI scans using CNN + BiGRU hybrid modeling.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "Vercel"],
      github: "https://github.com/shivareddy2002/stroke-detection",
      demo: "https://stroke-detection.vercel.app/",
    },
    {
      title: "Emotion Detection",
      description: "NLP emotion detection app classifying six human emotions from text using BiLSTM with confidence-based predictions.",
      tech: ["Python", "TensorFlow", "Keras", "NLP", "Flask", "Vercel"],
      github: "https://github.com/shivareddy2002/Emotion-AI",
      demo: "https://emotion-ai-tan.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing hands-on experience in data science, machine learning, and analytics
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.04}>
              <Card className="group h-full flex flex-col card-lift border hover:border-primary/30 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="flex-1 p-4 pb-2">
                  <CardTitle className="text-sm md:text-base font-heading group-hover:text-primary transition-colors duration-300 leading-snug">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs mt-1.5 leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 p-4 pt-0">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0.5 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs h-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1 text-xs h-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Demo
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

export default Projects;
