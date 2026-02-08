import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Validation Error", description: "Please fill in all fields.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_Siva",
        "template_1125r79",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "FfWlOU4le8NMIXMqN"
      );
      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ title: "Failed to Send", description: "Something went wrong. Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "lomadasivagangireddy3@gmail.com", href: "mailto:lomadasivagangireddy3@gmail.com" },
    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+91 9346493592", href: "tel:+919346493592" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/lomada-siva-gangi-reddy-a64197280/" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "View GitHub Profile", href: "https://github.com/shivareddy2002" },
    { icon: <MessageCircle className="h-5 w-5" />, label: "WhatsApp", value: "+91 9346493592", href: "https://wa.me/919346493592" },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how I can contribute to your team
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <ScrollReveal direction="left">
            <Card className="border h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-heading">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1.5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{info.label}</p>
                      <p className="font-medium text-sm md:text-base truncate group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <Card className="border h-full">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message..." value={formData.message} onChange={handleChange} required rows={2} className="resize-none" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-4 transition-opacity duration-300">
                    {isSubmitting ? "Sending..." : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
