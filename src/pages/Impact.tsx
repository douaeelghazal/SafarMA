import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, MapPin, Leaf, Building, Globe, Accessibility } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const metrics = [
  { icon: TrendingUp, value: 40, suffix: "%", label: "Augmentation de l'engagement culturel", color: "text-[#2E5A35] bg-[#2E5A35]/10" },
  { icon: Users, value: 60, suffix: "%", label: "Efficacité de la redistribution des foules", color: "text-[#1B365D] bg-[#1B365D]/10" },
  { icon: MapPin, value: 3, suffix: "x", label: "Sites cachés découverts", color: "text-[#D4A017] bg-[#D4A017]/10" },
  { icon: Leaf, value: 50, suffix: "%", label: "Réduction des pertes de planification", color: "text-[#C41E3A] bg-[#C41E3A]/10" },
];

const sdgs = [
  { icon: Building, title: "Villes Intelligentes", desc: "Optimisation de flux de visiteurs par IA pour les sites du patrimoine urbain.", color: "text-[#1B365D]" },
  { icon: Globe, title: "Tourisme Durable", desc: "Promotion des sites moins connus pour réduire l'impact du surtourisme.", color: "text-[#2E5A35]" },
  { icon: Accessibility, title: "Inclusion Numérique", desc: "Conception multilingue, hors ligne et empathique pour tous.", color: "text-[#C41E3A]" },
  { icon: Leaf, title: "Préservation Culturelle", desc: "Documentation et partage du patrimoine immatériel via la narration IA.", color: "text-[#D4A017]" },
];

const Counter = ({ target, suffix, className }: { target: number; suffix: string; className?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className={`text-4xl md:text-5xl font-bold font-serif ${className}`}>{count}{suffix}</div>;
};

const Impact = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Notre Impact</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-xl font-light">Des résultats mesurables pour un tourisme durable et intelligent.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <div className={`w-16 h-16 rounded-2xl ${m.color} flex items-center justify-center mx-auto mb-6 shadow-sm`}>
                <m.icon className="h-8 w-8" />
              </div>
              <Counter target={m.value} suffix={m.suffix} className={m.color.split(' ')[0]} />
              <p className="text-sm text-[#1B365D]/70 font-medium mt-3 uppercase tracking-wide">{m.label}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif text-[#1B365D] mb-4">Alignement avec les Objectifs de Développement Durable</h2>
          <div className="w-24 h-1 bg-[#D4A017] mx-auto rounded-full"></div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sdgs.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
               <div className="flex items-start gap-6 p-6 rounded-xl bg-white border border-[#D4A017]/10 hover:border-[#D4A017] transition-all shadow-sm hover:shadow-md h-full">
                 <div className={`mt-1 p-3 rounded-lg bg-gray-50 ${s.color}`}>
                   <s.icon className="h-6 w-6" />
                 </div>
                 <div>
                   <h3 className="font-bold font-serif text-[#1B365D] text-lg mb-2">{s.title}</h3>
                   <p className="text-[#1B365D]/70 text-sm leading-relaxed">{s.desc}</p>
                 </div>
               </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Impact;
