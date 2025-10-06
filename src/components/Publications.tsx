import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Publications = () => {
  const certifications = [
    {
      title: "Data Science Guided Path",
      issuer: "Coding Ninjas",
      category: "Data Science",
    },
    {
      title: "Big Data & Hadoop",
      issuer: "edX",
      category: "Big Data",
    },
    {
      title: "SQL Certification",
      issuer: "Online Platform",
      category: "Database",
    },
    {
      title: "Machine Learning Internship",
      issuer: "Industry Partner",
      category: "ML",
    },
    {
      title: "Wipro Java Full Stack",
      issuer: "Wipro",
      category: "Development",
    },
  ];

  return (
    <section id="publications" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Publications & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Publication */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-in">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0">
                  <BookOpen className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl md:text-2xl font-heading mb-2">
                    Research Publication
                  </CardTitle>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    Published Research
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-lg md:text-xl leading-relaxed">
                Enhanced CNN-Based Classification and Forecasting of Water Stress in Tomato Plant
              </h4>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                A comprehensive research study utilizing advanced convolutional neural networks 
                combined with LSTM architectures to predict and classify water stress levels in 
                tomato plants using IoT sensor data, contributing to precision agriculture solutions.
              </p>
              <Button
                variant="outline"
                className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Publication (DOI)
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white flex-shrink-0">
                  <Award className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl md:text-2xl font-heading mb-2">
                    Professional Certifications
                  </CardTitle>
                  <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                    5 Certifications
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-sm md:text-base leading-tight mb-1">
                        {cert.title}
                      </h5>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs flex-shrink-0"
                    >
                      {cert.category}
                    </Badge>
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

export default Publications;
