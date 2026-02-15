import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Map, Camera, MessageSquare, Heart, Clock, Wifi } from "lucide-react";

const featuresList = [
  {
    icon: Map,
    title: "Planificateur Intelligent",
    description: "Créez des itinéraires sur mesure en quelques secondes. Notre IA prend en compte votre budget, vos centres d'intérêt et votre rythme de voyage pour optimiser chaque journée.",
    color: "text-[#1B365D]",
    bgColor: "bg-[#1B365D]/10",
    borderColor: "border-[#1B365D]"
  },
  {
    icon: Camera,
    title: "Scanner du Patrimoine",
    description: "Pointez votre caméra vers un monument, un plat ou un motif artisanal. L'application identifie l'objet et vous raconte son histoire, sa signification et ses secrets de fabrication.",
    color: "text-[#C41E3A]",
    bgColor: "bg-[#C41E3A]/10",
    borderColor: "border-[#C41E3A]"
  },
  {
    icon: MessageSquare,
    title: "Chatbot Culturel",
    description: "Dites adieu aux guides touristiques génériques. Discutez avec votre assistant local disponible 24/7 pour obtenir des recommandations de restaurants, des conseils pratiques ou des anecdotes historiques.",
    color: "text-[#D4A017]",
    bgColor: "bg-[#D4A017]/10",
    borderColor: "border-[#D4A017]"
  }
];

const Features = () => (
  <div className="pt-24 min-h-screen bg-[#FDFBF7]">
    <div className="container mx-auto px-4 pb-20">
      <AnimatedSection>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#1B365D] mb-6">Fonctionnalités Clés</h1>
          <p className="text-[#1B365D]/80 text-xl font-light">
            Découvrez comment SafarMA transforme votre expérience de voyage grâce à une intelligence artificielle éthique et culturelle.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresList.map((feature, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <motion.div 
              whileHover={{ y: -5 }}
              className={`h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-t-4 ${feature.borderColor}`}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className={`text-xl font-bold font-serif mb-4 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default Features;
