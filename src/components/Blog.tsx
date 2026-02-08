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
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Coding Challenge Milestone",
      description: "Successfully solved 50+ coding challenges across LeetCode and GeeksforGeeks platforms, showcasing consistency in algorithmic problem-solving and data structures mastery.",
      icon: <Code className="h-6 w-6" />,
      badge: "Coding",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Continuous Learning Journey",
      description: "Actively expanding expertise in advanced machine learning techniques, deep learning frameworks, and modern data engineering practices through hands-on projects and certifications.",
      icon: <TrendingUp className="h-6 w-6" />,
      badge: "Growth",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section id="blog" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Recent <span className="gradient-text">Updates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest achievements and milestones in my data science journey
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {updates.map((update, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border overflow-hidden">
                <div className={`h-1.5 bg-gradient-to-r ${update.color}`} />
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${update.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
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
