import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, MapPin, Leaf, Building, Globe, Accessibility } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const metrics = [
  { icon: TrendingUp, value: 40, suffix: "%", label: "Cultural engagement increase" },
  { icon: Users, value: 60, suffix: "%", label: "Crowd redistribution" },
  { icon: MapPin, value: 3, suffix: "x", label: "Hidden sites discovered" },
  { icon: Leaf, value: 50, suffix: "%", label: "Less planning waste" },
];

const sdgs = [
  { icon: Building, title: "Smart Cities", desc: "AI-driven visitor flow optimization for urban heritage sites." },
  { icon: Globe, title: "Sustainable Tourism", desc: "Promoting lesser-known sites to reduce over-tourism impact." },
  { icon: Accessibility, title: "Digital Inclusion", desc: "Multilingual, offline-capable, empathy-driven design for all." },
  { icon: Leaf, title: "Cultural Preservation", desc: "Documenting and sharing intangible heritage through AI storytelling." },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
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

  return <div ref={ref} className="text-4xl md:text-5xl font-bold text-secondary">{count}{suffix}</div>;
};

const Impact = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Measurable results for sustainable, intelligent tourism.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
          {metrics.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <m.icon className="h-7 w-7 text-secondary" />
              </div>
              <Counter target={m.value} suffix={m.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{m.label}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Sustainable Development Goals Alignment</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sdgs.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-colors text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Impact;
