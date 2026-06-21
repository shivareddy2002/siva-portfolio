import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Snowflake } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const credentials = [
  {
    title: "SnowPro® Core Certification",
    type: "Certification",
    url: "https://achieve.snowflake.com/f20a4644-32de-45ca-8b82-742fee65df77#acc.N9bkGJnz",
    featured: true,
    badge: "Professional Certification",
  },
  {
    title: "Data Warehousing Workshop",
    type: "Hands-On Essentials",
    url: "https://achieve.snowflake.com/96f561a6-2862-493e-bc01-5086ae1c8347#acc.z5IlorWn",
    featured: false,
    badge: "Hands-On Essentials",
  },
  {
    title: "Collaboration, Marketplace & Cost Estimation Workshop",
    type: "Hands-On Essentials",
    url: "https://achieve.snowflake.com/d8c45d32-1fc8-4351-b0ad-876b5f631f7f#acc.QGvRkY9r",
    featured: false,
    badge: "Hands-On Essentials",
  },
  {
    title: "Data Application Builders Workshop",
    type: "Hands-On Essentials",
    url: "https://achieve.snowflake.com/db6331fa-1841-4b4e-9cb1-93f55dd65103#acc.wLstnQCT",
    featured: false,
    badge: "Hands-On Essentials",
  },
  {
    title: "Data Lake Workshop",
    type: "Hands-On Essentials",
    url: "https://achieve.snowflake.com/df962e2b-7e07-4d36-a4e1-d62362a05606#acc.C4rKNkbc",
    featured: false,
    badge: "Hands-On Essentials",
  },
  {
    title: "Data Engineering Workshop",
    type: "Hands-On Essentials",
    url: "https://achieve.snowflake.com/18020b9b-572e-4d9e-b3be-7503c01df9e4#acc.I9EYSTiO",
    featured: false,
    badge: "Hands-On Essentials",
  },
  {
    title: "Data Science Workshop",
    type: "Hands-On Essentials",
    url: "https://achieve.snowflake.com/d9997194-f88d-4828-835f-e73fde99eb35#acc.MXN5AjSe",
    featured: false,
    badge: "Hands-On Essentials",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const SnowflakeCertifications = () => {
  return (
    <section id="snowflake" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">
              Snowflake <span className="gradient-text">Certifications & Credentials</span>
            </h2>
          </div>
          <div className="section-divider" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Earned 7 Snowflake Credentials, including the prestigious SnowPro® Core Certification,
            demonstrating expertise in Snowflake architecture, data engineering, data warehousing, and
            modern cloud data platforms.
          </p>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {credentials.map((credential, index) => (
            <motion.div key={credential.title} variants={cardVariants}>
              <Card
                className={`group h-full card-lift border overflow-hidden ${
                  credential.featured
                    ? "ring-1 ring-primary/30 bg-gradient-to-br from-primary/5 via-card to-card dark:from-primary/10"
                    : ""
                }`}
              >
                <div
                  className={`h-1 bg-gradient-to-r from-primary to-secondary ${
                    credential.featured ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100 transition-opacity duration-500`}
                />
                <CardContent className="p-5 md:p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md ${
                        credential.featured
                          ? "bg-gradient-to-br from-primary to-secondary text-white"
                          : "bg-muted text-primary"
                      }`}
                    >
                      <Snowflake className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-heading font-semibold leading-snug group-hover:text-primary transition-colors duration-300 ${
                          credential.featured ? "text-base md:text-lg" : "text-sm md:text-base"
                        }`}
                      >
                        {credential.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">
                        Issued by: Snowflake University
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
                    <Badge
                      variant={credential.featured ? "default" : "secondary"}
                      className={`text-xs ${
                        credential.featured
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                          : ""
                      }`}
                    >
                      {credential.badge}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {credential.type}
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 h-9 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a
                      href={credential.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      View Credential
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <Button
            className="inline-flex items-center gap-2 px-6 py-3 h-auto bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl btn-glow text-sm"
            asChild
          >
            <a
              href="https://achieve.snowflake.com/profile/lomadasivagangireddy933566/wallet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Award className="h-4 w-4" />
              View Complete Snowflake Credential Wallet
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SnowflakeCertifications;
