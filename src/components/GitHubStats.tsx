import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const GitHubStats = () => {
  const username = "shivareddy2002";
  
  const stats = [
    {
      title: "GitHub Profile Stats",
      url: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=3B82F6&icon_color=10B981&text_color=E5E7EB`,
      alt: "GitHub Stats",
    },
    {
      title: "Most Used Languages",
      url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=3B82F6&text_color=E5E7EB`,
      alt: "Top Languages",
    },
    {
      title: "GitHub Streak",
      url: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0D1117&ring=3B82F6&fire=10B981&currStreakLabel=E5E7EB`,
      alt: "GitHub Streak",
    },
  ];

  return (
    <section id="github" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="h-10 w-10 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">
              GitHub <span className="gradient-text">Statistics</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Live stats showcasing coding activity and contributions
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-semibold mb-4 text-center group-hover:text-primary transition-colors duration-300">
                    {stat.title}
                  </h3>
                  <div className="relative rounded-lg overflow-hidden bg-[#0D1117] p-4">
                    <img src={stat.url} alt={stat.alt} className="w-full h-auto" loading="lazy" />
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
          >
            <Github className="h-5 w-5" />
            View Full GitHub Profile
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GitHubStats;
