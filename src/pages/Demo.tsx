import { Camera, Volume2, MapPin, History } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const Demo = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience SAFAR</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">See how our AI-powered features work in action.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Scan & Discover Demo */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground mb-6">📸 Scan & Discover</h2>
            <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
              {/* Phone screen */}
              <div className="bg-gradient-to-b from-deep-blue to-primary p-6 relative min-h-[400px] flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white/80 text-sm font-medium">SAFAR Camera</p>
                  <Camera className="h-5 w-5 text-white/60" />
                </div>
                {/* Viewfinder */}
                <div className="flex-1 border-2 border-dashed border-secondary/40 rounded-2xl flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <span className="text-3xl">◆</span>
                    </div>
                    <p className="text-white/60 text-sm">Zellige tile detected</p>
                  </div>
                  {/* Corner brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-secondary rounded-tl" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-secondary rounded-tr" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-secondary rounded-bl" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-secondary rounded-br" />
                </div>
                {/* Info popup */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 bg-card rounded-2xl p-4 border border-border"
                >
                  <h3 className="font-bold text-foreground mb-1">Zellige Mosaic — Fez</h3>
                  <p className="text-xs text-muted-foreground mb-3">A traditional geometric tilework dating to the 10th century. Each piece is hand-chiseled by master craftsmen (maâlems).</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-secondary text-secondary-foreground text-xs gap-1">
                      <Volume2 className="h-3 w-3" /> Audio Guide
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs gap-1">
                      <MapPin className="h-3 w-3" /> Where to Buy
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Time Travel Demo */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-2xl font-bold text-foreground mb-6">⏳ Time Travel Guide</h2>
            <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
              <div className="bg-gradient-to-b from-deep-blue to-primary p-6 min-h-[400px] flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white/80 text-sm font-medium">Time Travel Mode</p>
                  <History className="h-5 w-5 text-white/60" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-6">
                  <div className="w-32 h-32 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-5xl">🕌</span>
                  </div>
                  <p className="text-white font-semibold">Koutoubia Mosque</p>
                  {/* Timeline slider */}
                  <div className="w-full bg-white/10 rounded-full p-1">
                    <div className="flex justify-between text-xs text-white/60 px-2 mb-2">
                      <span>1147</span>
                      <span>1500</span>
                      <span>1800</span>
                      <span>Today</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full relative">
                      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary border-2 border-white shadow-lg" />
                      <div className="h-full w-1/3 bg-secondary/60 rounded-full" />
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="mt-4 bg-card rounded-2xl p-4 border border-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-lg shrink-0">👳</div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Yacoub El Mansour</p>
                      <p className="text-xs text-muted-foreground">"I commissioned this mosque in 1147 to mark our dynasty's power..."</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
);

export default Demo;
