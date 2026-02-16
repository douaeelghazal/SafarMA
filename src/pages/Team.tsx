import { User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const team = [
  { name: "Douae EL GHAZAL", role: "Spécialiste IA & Données", bio: "Ingénieure logiciel spécialisée dans la construction de systèmes de recommandation intelligents, de modèles d'apprentissage automatique et d'architecture axée sur les données pour SAFAR." },
  { name: "Doha EL FERKOUSS", role: "Développeuse Backend", bio: "Développeuse Full-stack spécialisée dans l'architecture API et l'infrastructure backend pour les applications de tourisme culturel." },
  { name: "Halima SEMLALI", role: "Designer UI/UX", bio: "Designer créative dédiée à la conception d'interfaces empathiques qui célèbrent le riche patrimoine culturel du Maroc." },
];

const Team = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Rencontrez Notre Équipe</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-xl font-light">Trois étudiantes talentueuses collaborant pour offrir une plateforme de tourisme intelligent pour le Maroc.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {team.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-white border border-[#D4A017]/20 hover:border-[#D4A017] hover:shadow-lg transition-all text-center group">
                <div className="w-20 h-20 rounded-full bg-[#1B365D]/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1B365D]/10 transition-colors">
                  <User className="h-8 w-8 text-[#1B365D]" />
                </div>
                <h3 className="font-bold font-serif text-[#C41E3A] text-xl mb-1">{t.name}</h3>
                <p className="text-sm text-[#D4A017] font-medium mb-3 uppercase tracking-wide">{t.role}</p>
                <p className="text-sm text-[#1B365D]/70 leading-relaxed font-sans">{t.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 border border-[#D4A017]/10 shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-[#1B365D] mb-4">Notre Mission</h2>
            <p className="text-[#1B365D]/70 leading-relaxed">
              En tant qu'équipe d'étudiantes passionnées, nous nous engageons à transformer le tourisme culturel grâce à l'IA et au design intelligent. SAFAR combine une technologie de pointe avec un profond respect pour le riche patrimoine du Maroc, créant des expériences personnalisées qui connectent les voyageurs aux histoires et aux traditions qui rendent notre pays unique.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Team;
