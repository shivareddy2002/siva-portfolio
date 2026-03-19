import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const GitHubStats = () => {
  const username = "shivareddy2002";

  const stats = [
    {
      title: "Profile Stats",
      url: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=3B82F6&icon_color=10B981&text_color=E5E7EB`,
      alt: "GitHub Stats",
    },
    {
      title: "Streak",
      url: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical&hide_border=true&background=0D1117&ring=3B82F6&fire=10B981&currStreakLabel=E5E7EB`,
      alt: "GitHub Streak",
    },
    {
      title: "Top Languages",
      url: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=3B82F6&text_color=E5E7EB`,
      alt: "Top Languages",
    },
  ];

  return (
    <section id="github" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">
              GitHub <span className="gradient-text">Statistics</span>
            </h2>
          </div>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Live stats showcasing coding activity and contributions
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.08}>
              <Card className="group h-full card-lift border overflow-hidden">
                <CardContent className="p-4 md:p-5 flex flex-col h-full">
                  <h3 className="text-sm font-heading font-semibold mb-3 text-center group-hover:text-primary transition-colors duration-300">
                    {stat.title}
                  </h3>
                  <div className="relative rounded-lg overflow-hidden bg-[hsl(222,30%,8%)] flex-1 flex items-center justify-center p-2 min-h-[160px]">
                    <img
                      src={stat.url}
                      alt={stat.alt}
                      className="w-full h-auto max-h-[200px] object-contain"
                      loading="lazy"
                    />
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl btn-glow text-sm"
          >
            <Github className="h-4 w-4" />
            View Full GitHub Profile
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GitHubStats;
