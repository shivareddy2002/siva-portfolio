import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Publications = () => {
const certifications = [
  {
    title: "Data Analyst",
    issuer: "Simplilearn (Microsoft)",
    category: "Data Analytics",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjA0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTY4ODU0OF85OTU4MTE3XzE3Njc3Nzk5MjYyOTQucG5nIiwidXNlcm5hbWUiOiJMT01BREEgU0lWQSBHQU5HSSBSRUREWSJ9",
  },
  {
    title: "Data Science Course",
    issuer: "CEDLEARN",
    category: "Data Science",
    link: null,
  },
  {
    title: "AWS AI-ML",
    issuer: "EDU skills (Amazon Web Services)",
    category: "AIMl",
    link: "https://drive.google.com/file/d/1oVY-wRlsSZPbWT8ikkavb7l6JrnW0crp/view?usp=sharing",
  },
  {
    title: "AI Generalist Credential Certificate",
    issuer: "Digital Maven",
    category: "Artificial Intelligence",
    link: "https://cdn.certifier.io/3ac07c01-49db-4133-8a1f-2be972b1d5e7/credentials/01k8jtwww21n0bjbrhzcftcq45/designs/01k8jtrmcq2bhzctws0b0reswe/jZAQe4_axG.png",
  },
  {
    title: "Cloud Computing",
    issuer: "Infosys (Microsoft Azure)",
    category: "Cloud Computing",
    link: "https://drive.google.com/file/d/1Fd4IhpmPqzvWTVHlhIL5YfqmWdrYVA7t/view?usp=sharing",
  },
  {
    title: "Machine Learning Internship",
    issuer: "Skill Dzire",
    category: "Machine Learning",
    link: "https://drive.google.com/file/d/1e5K8sBKQ5eKzzb7rDWI15LyQ8hmRl8aD/view?usp=sharing",
  },
  {
    title: "C Programming",
    issuer: "Coding Ninjas",
    category: "Programming",
    link: "https://drive.google.com/file/d/1lujzTthCej8-_EbDkpPp-LH4P6QDhMIO/view?usp=sharing",
  },
  {
    title: "Data Science Guided Path",
    issuer: "Coding Ninjas",
    category: "Data Science",
    link: "https://drive.google.com/file/d/1lujzTthCej8-_EbDkpPp-LH4P6QDhMIO/view?usp=sharing",
  },
  {
    title: "Big Data & Hadoop",
    issuer: "edX",
    category: "Big Data",
    link: "https://courses.edx.org/certificates/ead235d82a6143f6873cfd10b9d6f6ec",
  },
  {
    title: "Java Full Stack Development",
    issuer: "Wipro",
    category: "Java",
    link: "https://drive.google.com/file/d/1mhaMJlc-neTrj2ywiQuDC4y90hCTXfXT/view?usp=sharing",
  },
  {
    title: "LLM Concepts",
    issuer: "DataCamp",
    category: "Generative AI",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/875e319a4be508360ddd8d4ae43bdaddf1fa8693",
  },
  {
    title: "Generative AI Concepts",
    issuer: "DataCamp",
    category: "Generative AI",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/7a07290d4619b51a6d2b8f41216eb4e2f9475a9d",
  },
  {
    title: "Power BI Fundamentals",
    issuer: "DataCamp",
    category: "Analytics",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a7836d11a5c6362f32cfb6bd5702781c73b0ca04",
  },
];

  return (
    <section id="publications" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Publications & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
        </ScrollReveal>

        <div className="grid gap-8 md:gap-12">
          {/* Certifications */}
          <ScrollReveal>
            <Card className="border hover:shadow-lg transition-all duration-300">
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
                      13 Certifications
                    </Badge>
                  </div>
                </div>
              </CardHeader>
<CardContent>
  <div className="grid sm:grid-cols-2 gap-3">
    {certifications.map((cert, index) => (
      <div
        key={index}
        className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors duration-300 group"
      >
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary
                        mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />

        <div className="flex-1 min-w-0">
          {cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <h5 className="font-semibold text-sm md:text-base leading-tight mb-1">
                {cert.title}
              </h5>
            </a>
          ) : (
            <h5 className="font-semibold text-sm md:text-base leading-tight mb-1">
              {cert.title}
            </h5>
          )}

          <p className="text-xs md:text-sm text-muted-foreground">
            {cert.issuer}
          </p>
        </div>

        <Badge variant="secondary" className="text-xs flex-shrink-0">
          {cert.category}
        </Badge>
      </div>
    ))}
  </div>
</CardContent>

            </Card>
          </ScrollReveal>

          {/* Publication */}
          <ScrollReveal delay={0.15}>
            <Card className="border hover:shadow-lg transition-all duration-300">
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
                  Classification and Forecasting of Water Stress in Tomato Plant
                </h4>
                <p className="text-muted-foreground text-sm md:text-base leading-[1.8]">
                  This project focuses on predicting and classifying water stress levels in tomato plants using IoT sensor data through a hybrid CNN-LSTM architecture. The model combines convolutional and sequential learning to extract both spatial and temporal features for high prediction accuracy. IoT sensors collect parameters like soil moisture, temperature, and humidity, which are processed for model training. The CNN component captures spatial correlations, while the LSTM layer identifies time-based dependencies. The hybrid model effectively predicts early signs of water stress, enabling data-driven irrigation management. Model evaluation using accuracy, F1-score, and RMSE confirmed its reliability. By integrating AI with IoT, the project supports precision agriculture and demonstrates how deep learning can improve sustainable farming practices.
                </p>
                <Button variant="outline" className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Publication (DOI)
                  </a>
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Publications;
