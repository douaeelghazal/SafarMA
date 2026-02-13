import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
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
  const [dark, setDark] = useState(false);
  const location = useLocation();

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
            <span className="text-sm font-bold text-deep-blue">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">SAFAR</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === l.path
                  ? "text-secondary bg-secondary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleDark} className="text-muted-foreground">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Link to="/contact">
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Request Demo
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleDark} className="text-muted-foreground">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === l.path
                  ? "text-secondary bg-secondary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button size="sm" className="mt-2 w-full bg-secondary text-secondary-foreground">
              Request Demo
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
