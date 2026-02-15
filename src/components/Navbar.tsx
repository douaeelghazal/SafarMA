import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Features", path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Demo", path: "/demo" },
  { label: "Impact", path: "/impact" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#FDFBF7]/90 backdrop-blur-md shadow-md border-b border-[#D4A017]/20 py-2" 
        : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 relative overflow-hidden rounded-lg border border-[#D4A017]/50 shadow-sm bg-white">
             <img 
               src="/SafarMA.png" 
               alt="SafarMA Brand" 
               className="w-full h-[180%] max-w-none object-cover object-top" 
             />
          </div>
          <span className={`text-2xl font-bold font-serif tracking-tight transition-colors ${
            scrolled || location.pathname !== "/" ? "text-[#1B365D]" : "text-[#1B365D] lg:text-white"
          }`}>
            Safar<span className="text-[#C41E3A]">MA</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-[#FDFBF7]/80 backdrop-blur-sm px-2 py-1 rounded-full border border-[#D4A017]/10 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-[#C41E3A] text-white shadow-md"
                  : "text-[#1B365D] hover:bg-[#D4A017]/10 hover:text-[#C41E3A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button className="bg-[#D4A017] hover:bg-[#b88a14] text-white font-bold px-6 rounded-full shadow-lg hover:shadow-xl transition-all border border-white/20">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`${scrolled || location.pathname !== "/" ? "text-[#1B365D]" : "text-white"}`}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FDFBF7] border-b-4 border-[#D4A017] shadow-2xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 text-base font-medium rounded-xl flex items-center justify-between ${
                location.pathname === link.path
                  ? "bg-[#1B365D] text-white"
                  : "text-[#1B365D] hover:bg-[#D4A017]/10"
              }`}
            >
              {link.label}
              {location.pathname === link.path && <div className="w-2 h-2 rounded-full bg-[#D4A017]" />}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-4">
            <Button className="w-full bg-[#C41E3A] text-white font-bold py-6 rounded-xl">
              Start Your Journey
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
