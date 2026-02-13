import { useState } from "react";
import { Send, Mail, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-16">
      <section className="gradient-hero moroccan-pattern py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">Interested in SAFAR? Let's talk about the future of intelligent tourism.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your interest in SAFAR..."
                    rows={5}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-8 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              <Mail className="h-4 w-4 inline mr-1" /> hello@safar.ai
            </p>
            <div className="flex justify-center gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
