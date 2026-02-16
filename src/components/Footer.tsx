import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#1B365D] text-white py-16 border-t border-[#D4A017]/20">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8 gap-6">
        <div className="flex items-center gap-3">
          {/* Logo - Cropped to show only icon */}
          <div className="w-16 h-16 relative overflow-hidden rounded">
             <img 
               src="/SafarMA.png" 
               alt="SafarMA Logo" 
               className="w-full h-[200%] object-cover object-top drop-shadow-sm" 
             />
          </div>
          <div>
            <span className="text-3xl font-bold font-serif text-[#C41E3A] block leading-none">SafarMA</span>
            <span className="text-sm opacity-70 font-serif italic">Votre Compagnon IA</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-8 mb-12 text-sm">
        <div>
          <h4 className="font-bold mb-4 text-[#D4A017] uppercase tracking-wider text-xs">Navigation</h4>
          <div className="flex flex-col gap-2 opacity-80">
            <Link to="/" className="hover:text-[#D4A017] transition-colors">Accueil</Link>
            <Link to="/features" className="hover:text-[#D4A017] transition-colors">Fonctionnalités</Link>
            <Link to="/how-it-works" className="hover:text-[#D4A017] transition-colors">Comment ça marche</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#D4A017] uppercase tracking-wider text-xs">Découvrir</h4>
          <div className="flex flex-col gap-2 opacity-80">
            <Link to="/demo" className="hover:text-[#D4A017] transition-colors">Démo Interactive</Link>
            <Link to="/impact" className="hover:text-[#D4A017] transition-colors">Impact Social</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#D4A017] uppercase tracking-wider text-xs">À Propos</h4>
          <div className="flex flex-col gap-2 opacity-80">
            <Link to="/team" className="hover:text-[#D4A017] transition-colors">L'Équipe</Link>
            <Link to="/contact" className="hover:text-[#D4A017] transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-[#D4A017] uppercase tracking-wider text-xs">Légal</h4>
          <div className="flex flex-col gap-2 opacity-80">
            <Link to="#" className="hover:text-[#D4A017]">Confidentialité</Link>
            <Link to="#" className="hover:text-[#D4A017]">Conditions d'utilisation</Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs opacity-50 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; 2026 SafarMA. Tous droits réservés.</span>
        <span>Fait avec amour au Maroc</span>
      </div>
    </div>
  </footer>
);

export default Footer;
