import { User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const team = [
  { name: "Douae EL GHAZAL", role: "AI & Data Specialist", bio: "Software engineer focused on building intelligent recommendation systems, machine learning models, and data-driven architecture for SAFAR." },
  { name: "Doha EL FERKOUSS", role: "Backend Developer", bio: "Full-stack developer specializing in API architecture and backend infrastructure for cultural tourism applications." },
  { name: "Halima SEMLALI", role: "UI/UX Designer", bio: "Creative designer dedicated to crafting empathetic interfaces that celebrate Morocco's rich cultural heritage." },
];

const Team = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Three talented students collaborating to deliver an intelligent tourism platform for Morocco.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {team.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-[#D4A017]/20 hover:border-[#D4A017] hover:shadow-lg transition-all text-center group">
                <div className="w-20 h-20 rounded-full bg-[#1B365D]/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1B365D]/10 transition-colors">
                  <User className="h-8 w-8 text-[#1B365D]" />
                </div>
                <h3 className="font-bold font-serif text-[#C41E3A] text-xl mb-1">{t.name}</h3>
                <p className="text-sm text-[#D4A017] font-medium mb-3 uppercase tracking-wide">{t.role}</p>
                <p className="text-sm text-foreground/70 leading-relaxed font-sans">{t.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              As a team of passionate students, we're committed to transforming cultural tourism through AI and intelligent design. SAFAR combines cutting-edge technology with deep respect for Morocco's rich heritage, creating personalized experiences that connect travelers to the stories and traditions that make our country unique.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Team;
