import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: Eye, title: "Préservation Culturelle", desc: "L'IA doit protéger et promouvoir le patrimoine, pas le remplacer.", color: "text-[#2E5A35] bg-[#2E5A35]/10" },
  { icon: Heart, title: "Conception Centrée sur l'Empathie", desc: "La technologie s'adapte à l'état émotionnel et aux besoins du voyageur.", color: "text-[#C41E3A] bg-[#C41E3A]/10" },
  { icon: Target, title: "Durabilité", desc: "Redistribution intelligente des visiteurs pour un tourisme responsable.", color: "text-[#2E5A35] bg-[#2E5A35]/10" },
  { icon: Lightbulb, title: "Innovation", desc: "Pionnier à l'intersection de l'IA, de la RA et de la narration culturelle.", color: "text-[#D4A017] bg-[#D4A017]/10" },
];

const About = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">À propos de SafarMA</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-xl font-light">Smart AI For Augmented Tourism — transformer la façon dont le monde découvre la culture au Maroc.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-8 border border-[#D4A017]/20 shadow-sm mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C41E3A] via-[#D4A017] to-[#2E5A35]"></div>
            <h2 className="text-3xl font-bold font-serif text-[#1B365D] mb-6">Notre Mission</h2>
            <p className="text-[#1B365D]/80 leading-relaxed mb-8 text-lg">
              SafarMA réinvente le tourisme au Maroc en combinant l'intelligence artificielle, la vision par ordinateur et la réalité augmentée pour créer des expériences de voyage profondément personnelles et culturellement riches. Nous croyons que chaque monument a une histoire, chaque rue a un secret et chaque voyageur mérite une expérience qui lui parle.
            </p>
            <div className="bg-[#2E5A35]/5 rounded-xl p-6 border border-[#2E5A35]/10 border-l-4 border-l-[#2E5A35]">
              <p className="text-[#2E5A35] font-medium italic text-lg">
                "Un compagnon de voyage intelligent, empathique et culturellement immersif — propulsé par l'IA, conçu pour l'humanité."
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-3xl font-bold font-serif text-[#1B365D] mb-10 text-center">Nos Valeurs</h2>
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
