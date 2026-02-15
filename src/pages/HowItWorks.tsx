import { Download, Camera, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  { 
    icon: Download, 
    num: "01", 
    title: "Créez votre Profil & Planifiez", 
    desc: "Téléchargez l'application et définissez vos préférences (Budget, Mood, Intérêts). En 2 minutes, l'IA génère un itinéraire sur mesure optimisé pour votre rythme.", 
    color: "text-[#1B365D]",
    border: "border-[#1B365D]"
  },
  { 
    icon: Camera, 
    num: "02", 
    title: "Scannez votre Environnement", 
    desc: "Une fois sur place, utilisez la caméra pour scanner monuments, plats et artisanat. L'application reconnaît instantanément ce qui vous entoure.", 
    color: "text-[#C41E3A]",
    border: "border-[#C41E3A]"
  },
  { 
    icon: BookOpen, 
    num: "03", 
    title: "Vivez l'Histoire en Direct", 
    desc: "Interagissez avec le guide culturel AI pour poser des questions, écouter des récits audio immersifs et voir le passé en réalité augmentée.", 
    color: "text-[#D4A017]",
    border: "border-[#D4A017]"
  },
];

const HowItWorks = () => (
  <div className="pt-24 min-h-screen bg-[#FDFBF7]">
    <div className="container mx-auto px-4 text-center">
      <AnimatedSection>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#1B365D] mb-6">Comment ça marche ?</h1>
        <p className="text-[#1B365D]/80 max-w-2xl mx-auto text-xl font-light mb-20">
          Le Maroc à portée de main en 3 étapes simples.
        </p>
      </AnimatedSection>
    </div>

    <section className="bg-[#FDFBF7] pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#D4A017]/30 hidden md:block transform -translate-x-1/2" />
          
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                
                {/* Text Side */}
                <div className={`flex-1 text-center ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`text-6xl font-black font-serif opacity-20 mb-2 ${s.color}`}>{s.num}</div>
                  <h3 className={`text-2xl font-bold font-serif mb-4 relative z-10 ${s.color}`}>{s.title}</h3>
                  <p className="text-[#1B365D]/70 text-lg leading-relaxed">{s.desc}</p>
                </div>

                {/* Icon Center */}
                <div className={`relative z-10 flex items-center justify-center shrink-0`}>
                   <div className={`w-20 h-20 rounded-full bg-white border-4 ${s.border} shadow-xl flex items-center justify-center`}>
                      <s.icon className={`h-8 w-8 ${s.color}`} />
                   </div>
                </div>

                {/* Empty Side for balance */}
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
