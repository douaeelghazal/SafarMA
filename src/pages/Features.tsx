import { Map, Heart, History, Bell, Camera, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  { icon: Map, title: "AI Trip Planner", desc: "Budget-aware itinerary generation in 2 minutes. Automatic allocation: 30% lodging, 20% transport, 25% food, 15% activities, 10% reserve.", color: "bg-blue-500/10 text-blue-500" },
  { icon: Heart, title: "Empathy Guide", desc: "Mood-based recommendations with emotional check-ins. Detects fatigue, suggests wellness pauses, and adapts in real time.", color: "bg-rose-500/10 text-rose-500" },
  { icon: History, title: "Time Travel Guide", desc: "Historical timeline slider at each site. Chat with AI-powered historical figures and see before/after photo comparisons.", color: "bg-amber-500/10 text-amber-500" },
  { icon: Bell, title: "Smart Reminders", desc: "Magic moment alerts for sunsets and events. Crowd-avoidance notifications and optimal timing calculations.", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Camera, title: "Scan & Discover", desc: "Point your camera at zellige, carpets, food, or instruments — get history, symbolism, crafting process, and chat with an AI artisan.", color: "bg-purple-500/10 text-purple-500" },
  { icon: Wifi, title: "Offline Mode", desc: "Full functionality without internet. Pre-downloaded cultural data and maps for uninterrupted exploration.", color: "bg-cyan-500/10 text-cyan-500" },
];

const Features = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">The 5 Pillars of SAFAR</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">Each pillar is an AI-powered module designed to transform a different dimension of the travel experience.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-xl transition-all h-full"
              >
                <div className={`w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-5`}>
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Features;
