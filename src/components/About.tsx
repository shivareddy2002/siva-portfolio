import { GraduationCap, Award, TrendingUp, Globe, Heart, MapPin } from "lucide-react";
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
                  Aspiring Data Scientist with hands-on experience in Machine Learning, Deep Learning, and NLP, passionate about transforming raw data into actionable insights. Skilled in Python, TensorFlow, Streamlit, and advanced data visualization tools like Power BI and Excel. Experienced in building and deploying real-world AI applications, analyzing complex datasets, and generating strategic recommendations. Dedicated to continuous learning, exploring innovative approaches in AI and data science, and solving challenging problems through data-driven solutions. Committed to contributing to impactful projects that drive decision-making, optimize processes, and support business growth. Eager to apply analytical and AI expertise in real-world business and research challenges.
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

        {/* Personal Info Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {/* Languages */}
          <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Telugu"].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Interests
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Playing Chess", "Watching Cricket"].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Location
                </h3>
              </div>
              <p className="text-muted-foreground font-medium">
                Kadapa, Andhra Pradesh
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
