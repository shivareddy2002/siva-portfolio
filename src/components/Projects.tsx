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
      title: "Zomato Data Analysis Dashboard & Recommendation System",
      description: "Analyzed restaurant dataset to identify patterns in ratings, food types, and pricing. Built visualizations for customer preferences and restaurant performance evaluation.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Streamlit"],
      github: "https://github.com/shivareddy2002/Zomato-Data-Analysis-Dashboard",
      demo: "https://zomato-data-analysis-dashboard.streamlit.app/",
    },
    {
      title: "AutoPredict Pro - Car Price Prediction",
      description: "End-to-end ML & DL web app predicting used car market value using mileage, year, fuel type, engine power, ownership history, and brand value with dual-model approach.",
      tech: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Streamlit"],
      github: "https://github.com/shivareddy2002/AutoPredictPro",
      demo: "https://autopredictpro.streamlit.app/",
    },
    {
      title: "Credit Card Transaction Dashboard",
      description: "Interactive Power BI dashboard for credit card analytics with SQL database, DAX measures for KPIs, and time intelligence providing weekly, quarterly, and YTD insights.",
      tech: ["Power BI", "SQL", "DAX", "Data Modeling", "Data Visualization"],
      github: "https://github.com/shivareddy2002/Credit_Card_Transaction_Report",
      demo: "https://drive.google.com/drive/folders/16T65EOoXPGIZTcLpNTc-AbGHeKpTW9zG?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing hands-on experience in data science, machine learning, and analytics
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Card className="group h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border hover:border-primary/30">
                <CardHeader className="flex-1">
                  <CardTitle className="text-lg md:text-xl font-heading group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base mt-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity duration-300" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
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
