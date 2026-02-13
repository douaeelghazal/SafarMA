import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, MapPin, Clock, Users, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const problems = [
  { icon: Clock, text: "10+ hours wasted planning trips manually" },
  { icon: MapPin, text: "Heritage sites lack digital engagement" },
  { icon: Users, text: "Overcrowded famous areas, hidden gems ignored" },
  { icon: Brain, text: "Generic recommendations miss personal interests" },
  { icon: Sparkles, text: "Missed magic moments — sunsets, events, stories" },
  { icon: Smartphone, text: "Cultural ignorance due to lack of context" },
];

const stats = [
  { value: "2 min", label: "Trip planning time" },
  { value: "40%", label: "More engagement" },
  { value: "5", label: "AI-powered pillars" },
  { value: "24/7", label: "Smart assistance" },
];

const Home = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="gradient-hero moroccan-pattern relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Smart AI For Augmented Tourism
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Reimagining Tourism Through{" "}
              <span className="text-gradient-gold">Artificial Intelligence</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-xl">
              SAFAR transforms cultural tourism into immersive, personalized, and intelligent experiences powered by AI, computer vision, and augmented storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/features">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-base">
                  Explore the Experience <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-base">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-64 h-[500px] bg-gradient-to-b from-white/10 to-white/5 rounded-[3rem] border border-white/20 backdrop-blur-sm p-3">
                <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-deep-blue/80 to-deep-blue overflow-hidden flex flex-col items-center justify-center gap-4 relative">
                  <div className="absolute inset-0 moroccan-pattern opacity-30" />
                  <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center z-10">
                    <Smartphone className="h-8 w-8 text-deep-blue" />
                  </div>
                  <p className="text-white/80 text-sm font-medium z-10">AR Monument Scanner</p>
                  <div className="w-40 h-24 rounded-xl border border-secondary/40 bg-secondary/10 flex items-center justify-center z-10">
                    <p className="text-secondary text-xs text-center px-2">Point camera at any monument to discover its story</p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-8 bg-card rounded-xl p-3 shadow-xl border border-border"
              >
                <p className="text-xs font-semibold text-foreground">🏛️ Koutoubia Mosque</p>
                <p className="text-xs text-muted-foreground">Built 1147 AD</p>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-8 bg-card rounded-xl p-3 shadow-xl border border-border"
              >
                <p className="text-xs font-semibold text-secondary">⭐ 98% Match</p>
                <p className="text-xs text-muted-foreground">Based on your interests</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <p className="text-3xl font-bold text-secondary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* The Challenge */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Challenge</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Tourism today is broken. Travelers face fragmented, impersonal experiences that fail to connect them with the rich culture around them.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <p.icon className="h-5 w-5 text-destructive" />
                </div>
                <p className="text-sm text-foreground">{p.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Our Solution */}
    <section className="py-20 bg-muted/50 moroccan-pattern">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Solution</h2>
          <p className="text-muted-foreground mb-8">
            SAFAR uses AI, computer vision, and augmented storytelling to transform every journey into a personalized, culturally rich adventure — while intelligently distributing visitor flow for sustainable tourism.
          </p>
          <Link to="/features">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
              Discover the 5 Pillars <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Home;
