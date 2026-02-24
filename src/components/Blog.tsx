import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Code, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Blog = () => {
  const updates = [
    {
      title: "Naukri Campus Young Turks Achievement",
      description: "Secured impressive 93.91 percentile in the competitive Naukri Campus Young Turks assessment, demonstrating strong analytical and problem-solving capabilities.",
      icon: <Trophy className="h-6 w-6" />,
      badge: "Achievement",
      color: "from-primary to-accent",
    },
    {
      title: "Coding Challenge Milestone",
      description: "Successfully solved 50+ coding challenges across LeetCode and GeeksforGeeks platforms, showcasing consistency in algorithmic problem-solving and data structures mastery.",
      icon: <Code className="h-6 w-6" />,
      badge: "Coding",
      color: "from-secondary to-primary",
    },
    {
      title: "Continuous Learning Journey",
      description: "Actively expanding expertise in advanced machine learning techniques, deep learning frameworks, and modern data engineering practices through hands-on projects and certifications.",
      icon: <TrendingUp className="h-6 w-6" />,
      badge: "Growth",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section id="blog" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Recent <span className="gradient-text">Updates</span>
          </h2>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest achievements and milestones in my data science journey
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {updates.map((update, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Card className="group h-full card-lift border overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${update.color} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${update.color} flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {update.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">{update.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg md:text-xl font-heading group-hover:text-primary transition-colors duration-300">
                    {update.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {update.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
