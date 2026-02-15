import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: Eye, title: "Cultural Preservation", desc: "AI should protect and promote heritage, not replace it.", color: "text-[#2E5A35] bg-[#2E5A35]/10" },
  { icon: Heart, title: "Empathy-First Design", desc: "Technology adapts to the traveler's emotional state and needs.", color: "text-[#C41E3A] bg-[#C41E3A]/10" },
  { icon: Target, title: "Sustainability", desc: "Smart redistribution of visitors for responsible tourism.", color: "text-[#2E5A35] bg-[#2E5A35]/10" },
  { icon: Lightbulb, title: "Innovation", desc: "Pioneering the intersection of AI, AR, and cultural storytelling.", color: "text-[#D4A017] bg-[#D4A017]/10" },
];

const About = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">About SafarMA</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-xl font-light">Smart AI For Augmented Tourism — transforming how the world experiences culture in Morocco.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-8 border border-[#D4A017]/20 shadow-sm mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C41E3A] via-[#D4A017] to-[#2E5A35]"></div>
            <h2 className="text-3xl font-bold font-serif text-[#1B365D] mb-6">Our Mission</h2>
            <p className="text-[#1B365D]/80 leading-relaxed mb-8 text-lg">
              SafarMA reimagines tourism in Morocco by combining artificial intelligence, computer vision, and augmented reality to create deeply personal, culturally rich travel experiences. We believe every monument has a story, every street has a secret, and every traveler deserves an experience that speaks to who they are.
            </p>
            <div className="bg-[#2E5A35]/5 rounded-xl p-6 border border-[#2E5A35]/10 border-l-4 border-l-[#2E5A35]">
              <p className="text-[#2E5A35] font-medium italic text-lg">
                "An intelligent, empathetic, and culturally immersive travel companion — powered by AI, designed for humanity."
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-3xl font-bold font-serif text-[#1B365D] mb-10 text-center">Our Values</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-8 rounded-xl bg-white border border-[#D4A017]/10 hover:border-[#D4A017] hover:shadow-md transition-all group h-full">
                <div className={`w-14 h-14 rounded-full ${v.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold font-serif text-[#1B365D] text-xl mb-3">{v.title}</h3>
                <p className="text-[#1B365D]/70 leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
