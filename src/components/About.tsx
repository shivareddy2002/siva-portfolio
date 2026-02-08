import { GraduationCap, Award, TrendingUp, Globe, Heart, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      institution: "RGMCET, Nandyal",
      period: "2021 - 2025",
      score: "CGPA: 8.3",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College, Vijayawada",
      period: "2019 - 2021",
      score: "Percentage: 93%",
      icon: <Award className="h-6 w-6" />,
    },
    {
      degree: "High School",
      institution: "Geethanjali High School, Proddatur ",
      period: "2018 - 2019",
      score: "GPA: 9.8",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Bio */}
          <ScrollReveal direction="left">
            <h3 className="text-xl md:text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Professional Summary
            </h3>
            <Card className="border hover:shadow-lg transition-all duration-400">
              <CardContent className="p-6 md:p-8">
                <p className="text-base md:text-lg text-muted-foreground leading-[1.8]">
                  Aspiring Data Scientist with hands-on experience in Machine Learning, Deep Learning, and NLP, passionate about transforming raw data into actionable insights. Skilled in Python, TensorFlow, Streamlit, and advanced data visualization tools like Power BI and Excel. Experienced in building and deploying real-world AI applications, analyzing complex datasets, and generating strategic recommendations. Dedicated to continuous learning, exploring innovative approaches in AI and data science, and solving challenging problems through data-driven solutions. Committed to contributing to impactful projects that drive decision-making, optimize processes, and support business growth. Eager to apply analytical and AI expertise in real-world business and research challenges.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Education Timeline */}
          <ScrollReveal direction="right" delay={0.15}>
            <h3 className="text-xl md:text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education Timeline
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <ScrollReveal key={index} delay={0.1 + index * 0.12}>
                  <Card className="border-l-4 border-l-primary hover:shadow-md transition-all duration-300 hover:-translate-y-1">
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
                            <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full font-semibold">
                              {edu.score}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Personal Info Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-7">
          {[
            {
              icon: <Globe className="h-5 w-5 text-white" />,
              title: "Languages",
              content: (
                <div className="flex flex-wrap gap-2">
                  {["English", "Hindi", "Telugu"].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              ),
            },
            {
              icon: <Heart className="h-5 w-5 text-white" />,
              title: "Interests",
              content: (
                <div className="flex flex-wrap gap-2">
                  {["Playing Chess", "Watching Cricket"].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              ),
            },
            {
              icon: <MapPin className="h-5 w-5 text-white" />,
              title: "Location",
              content: <p className="text-muted-foreground font-medium">Andhra Pradesh, India</p>,
            },
          ].map((item, index) => (
            <ScrollReveal key={item.title} delay={0.1 * index}>
              <Card className="border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  {item.content}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
