import { GraduationCap, Award, TrendingUp, Globe, Heart, MapPin, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (Data Science)",
      institution: "RGMCET, Nandyal",
      period: "2021 - 2025",
      score: "CGPA: 8.3",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College, Vijayawada",
      period: "2019 - 2021",
      score: "Percentage: 93%",
      icon: <Award className="h-5 w-5" />,
    },
    {
      degree: "High School",
      institution: "Geethanjali High School, Proddatur",
      period: "2018 - 2019",
      score: "GPA: 9.8",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  return (
    <section id="about" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </ScrollReveal>

        {/* Main container with glassmorphism */}
        <ScrollReveal direction="none" delay={0.05}>
          <div className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-[0_0_30px_hsl(var(--primary)/0.06)] p-5 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              {/* Left – Professional Summary */}
              <ScrollReveal direction="left" delay={0.1}>
                <div className="rounded-xl bg-muted/40 border border-border/60 p-5 md:p-6 h-full backdrop-blur-sm">
                  <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Professional Summary
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-[1.8]">
                    Aspiring Data Scientist with hands-on experience in Machine Learning, Deep Learning, and NLP, passionate about transforming raw data into actionable insights. Skilled in Python, TensorFlow, Streamlit, and advanced data visualization tools like Power BI and Excel. Experienced in building and deploying real-world AI applications, analyzing complex datasets, and generating strategic recommendations. Dedicated to continuous learning, exploring innovative approaches in AI and data science, and solving challenging problems through data-driven solutions. Committed to contributing to impactful projects that drive decision-making, optimize processes, and support business growth. Eager to apply analytical and AI expertise in real-world business and research challenges.
                  </p>
                </div>
              </ScrollReveal>

              {/* Right – Education Timeline */}
              <ScrollReveal direction="right" delay={0.15}>
                <div className="rounded-xl bg-muted/40 border border-border/60 p-5 md:p-6 h-full backdrop-blur-sm">
                  <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education Timeline
                  </h3>
                  <div className="space-y-3">
                    {education.map((edu, index) => (
                      <ScrollReveal key={index} delay={0.15 + index * 0.1}>
                        <div className="rounded-lg border border-border/50 border-l-[3px] border-l-primary bg-card/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_hsl(var(--primary)/0.1)] group">
                          <div className="flex gap-3 items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground mt-0.5">
                              {edu.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-sm md:text-base text-foreground leading-snug">
                                {edu.degree}
                              </h4>
                              <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                                {edu.institution}
                              </p>
                              <div className="flex flex-wrap items-center gap-1.5 mt-2">
                                <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium transition-colors duration-300 hover:bg-primary/20">
                                  {edu.period}
                                </span>
                                <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded-full text-xs font-semibold transition-colors duration-300 hover:bg-secondary/20">
                                  {edu.score}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>

        {/* Personal Info Section */}
        <div className="grid md:grid-cols-3 gap-4 mt-5">
          {[
            {
              icon: <Globe className="h-4 w-4 text-primary-foreground" />,
              title: "Languages",
              content: (
                <div className="flex flex-wrap gap-1.5">
                  {["English", "Hindi", "Telugu"].map((lang) => (
                    <span key={lang} className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              ),
            },
            {
              icon: <Heart className="h-4 w-4 text-primary-foreground" />,
              title: "Interests",
              content: (
                <div className="flex flex-wrap gap-1.5">
                  {["Playing Chess", "Watching Cricket"].map((interest) => (
                    <span key={interest} className="px-2.5 py-0.5 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              ),
            },
            {
              icon: <MapPin className="h-4 w-4 text-primary-foreground" />,
              title: "Location",
              content: <p className="text-muted-foreground text-sm font-medium">Andhra Pradesh, India</p>,
            },
          ].map((item, index) => (
            <ScrollReveal key={item.title} delay={0.1 * index}>
              <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_hsl(var(--primary)/0.08)] h-full">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                {item.content}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
