import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: Eye, title: "Cultural Preservation", desc: "AI should protect and promote heritage, not replace it." },
  { icon: Heart, title: "Empathy-First Design", desc: "Technology adapts to the traveler's emotional state and needs." },
  { icon: Target, title: "Sustainability", desc: "Smart redistribution of visitors for responsible tourism." },
  { icon: Lightbulb, title: "Innovation", desc: "Pioneering the intersection of AI, AR, and cultural storytelling." },
];

const About = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About SAFAR</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Smart AI For Augmented Tourism — transforming how the world experiences culture.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <div className="bg-card rounded-2xl p-8 border border-border mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SAFAR reimagines tourism by combining artificial intelligence, computer vision, and augmented reality to create deeply personal, culturally rich travel experiences. We believe every monument has a story, every street has a secret, and every traveler deserves an experience that speaks to who they are.
            </p>
            <div className="bg-secondary/10 rounded-xl p-4 border border-secondary/20">
              <p className="text-secondary font-medium italic">
                "An intelligent, empathetic, and culturally immersive travel companion — powered by AI, designed for humanity."
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Our Values</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
