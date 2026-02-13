import { MapPin, Brain, Sparkles, Play } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  { icon: MapPin, num: "01", title: "Enter Destination, Budget & Mood", desc: "Tell SAFAR where you want to go, your budget, and how you're feeling today." },
  { icon: Brain, num: "02", title: "AI Generates Personalized Itinerary", desc: "Our AI analyzes thousands of options in 2 minutes to craft your perfect trip." },
  { icon: Sparkles, num: "03", title: "Explore with AR, Scanning & Reminders", desc: "Experience real-time augmented reality, scan cultural objects, and get smart alerts." },
  { icon: Play, num: "04", title: "Relive Your Journey", desc: "Review your emotional journal, discoveries, and share your unique travel story." },
];

const HowItWorks = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">From planning to reliving — four simple steps to an unforgettable journey.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className={`flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <p className="text-sm font-bold text-secondary mb-1">{s.num}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <div className="hidden md:flex w-16 h-16 rounded-2xl bg-card border-2 border-secondary/30 items-center justify-center shrink-0 z-10">
                  <s.icon className="h-7 w-7 text-secondary" />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default HowItWorks;
