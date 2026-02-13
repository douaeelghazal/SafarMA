import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
              <span className="text-sm font-bold text-deep-blue">S</span>
            </div>
            <span className="text-xl font-bold">SAFAR</span>
          </div>
          <p className="text-sm opacity-70">Smart AI For Augmented Tourism. Reimagining cultural experiences through artificial intelligence.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-secondary">Platform</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/features" className="hover:opacity-100 transition-opacity">Features</Link>
            <Link to="/how-it-works" className="hover:opacity-100 transition-opacity">How It Works</Link>
            <Link to="/demo" className="hover:opacity-100 transition-opacity">Demo</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-secondary">Company</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
            <Link to="/team" className="hover:opacity-100 transition-opacity">Team</Link>
            <Link to="/impact" className="hover:opacity-100 transition-opacity">Impact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-secondary">Connect</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
            <span>hello@safar.ai</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
        <span>© 2026 SAFAR. All rights reserved.</span>
        <span className="px-3 py-1 rounded-full border border-secondary/30 text-secondary text-xs font-medium">
          Built for RamadaIA Hackathon
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
