import { Camera, Volume2, MapPin, History } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";

const Demo = () => (
  <div className="pt-16">
    <section className="gradient-hero moroccan-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Découvrez SafarMA</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-xl font-light">Découvrez comment nos fonctionnalités IA opèrent en action.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-20 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          {/* Scan & Discover Demo */}
          <AnimatedSection>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C41E3A]/10 flex items-center justify-center mr-4">
                 <Camera className="h-6 w-6 text-[#C41E3A]" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-[#1B365D]">Scanner et Découvrir</h2>
            </div>
            
            <div className="bg-white rounded-[2.5rem] border-[8px] border-[#1B365D] overflow-hidden shadow-2xl relative">
              {/* Phone Status Bar */}
              <div className="bg-[#1B365D] text-white px-6 py-3 flex justify-between text-xs font-medium z-10 relative">
                 <span>9:41</span>
                 <div className="flex gap-1">
                    <div className="w-4 h-4 rounded-full bg-[#2E5A35]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#D4A017]"></div>
                 </div>
              </div>

              {/* Phone content */}
              <div className="bg-gradient-to-b from-[#1B365D] to-[#0f1e33] p-6 relative min-h-[500px] flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <p className="text-white/90 text-sm font-medium tracking-wider uppercase">Objectif SafarMA</p>
                  <Camera className="h-5 w-5 text-[#D4A017]" />
                </div>
                
                {/* Viewfinder */}
                <div className="flex-1 border-2 border-dashed border-[#D4A017]/50 rounded-3xl flex items-center justify-center relative bg-black/20 backdrop-blur-sm">
                  <div className="text-center z-10">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-[#D4A017]/20 border border-[#D4A017] flex items-center justify-center animate-pulse">
                      <span className="text-4xl text-[#D4A017]">❖</span>
                    </div>
                    <p className="text-white font-medium drop-shadow-md">Motif de Zellige Détecté</p>
                    <p className="text-white/60 text-xs mt-1">Analyse de la géométrie...</p>
                  </div>
                  
                  {/* Corner brackets */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#C41E3A] rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#C41E3A] rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#C41E3A] rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#C41E3A] rounded-br-lg" />
                </div>

                {/* Info popup */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-[#D4A017]/30 shadow-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                     <h4 className="font-bold text-[#1B365D] font-serif text-lg">Zellige Fassi</h4>
                     <span className="bg-[#2E5A35]/10 text-[#2E5A35] text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide">14ème siècle</span>
                  </div>
                  <p className="text-xs text-[#1B365D]/70 leading-relaxed">
                    Ce carrelage géométrique représente l'unité de l'existence. L'étoile à 8 branches symbolise la connexion entre le ciel et la terre.
                  </p>
                  <Button size="sm" className="w-full mt-3 bg-[#D4A017] hover:bg-[#b88a14] text-white text-xs font-bold h-8">
                     En savoir plus
                  </Button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Audio Tour Demo */}
          <AnimatedSection delay={0.2}>
             <div className="flex items-center mb-6 lg:justify-end">
               <h2 className="text-3xl font-bold font-serif text-[#1B365D] mr-4 text-right">Narration Intelligente</h2>
               <div className="w-12 h-12 rounded-full bg-[#1B365D]/10 flex items-center justify-center">
                  <Volume2 className="h-6 w-6 text-[#1B365D]" />
               </div>
             </div>
             
             <div className="bg-white rounded-[2.5rem] border-[8px] border-[#D4A017]/30 overflow-hidden shadow-xl p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A017]/10 rounded-bl-[100px] z-0"></div>
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                   <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4A017] shadow-md">
                      <img src="https://images.unsplash.com/photo-1549144511-2c06979509df?auto=format&fit=crop&q=80&w=200" alt="Guide" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 className="font-bold text-[#1B365D] text-lg">Guide de la Tour Hassan</h4>
                      <p className="text-[#2E5A35] text-sm font-medium">Historien IA • Rabat</p>
                   </div>
                </div>
                
                {/* Audio Waveform Visualization */}
                <div className="h-24 flex items-center justify-center gap-1 mb-6">
                   {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [16, 48, 16] }}
                        transition={{ 
                           repeat: Infinity, 
                           duration: 1.5, 
                           delay: i * 0.1,
                           ease: "easeInOut"
                        }}
                        className="w-2 rounded-full bg-gradient-to-t from-[#C41E3A] to-[#D4A017]"
                      />
                   ))}
                </div>
                
                <div className="bg-[#1B365D]/5 rounded-xl p-4 border border-[#1B365D]/10 relative">
                   <div className="absolute -top-3 left-6 bg-white px-2 py-0 text-2xl text-[#D4A017]">❝</div>
                   <p className="text-[#1B365D]/80 italic text-sm leading-relaxed pt-2">
                      "La construction a commencé en 1195. Regardez de plus près le treillis complexe sur la face nord..."
                   </p>
                </div>
             </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
);

export default Demo;
