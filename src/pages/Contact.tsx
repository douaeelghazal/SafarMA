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
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Get in Touch</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-xl font-light">Interested in SafarMA? Let's talk about the future of intelligent tourism.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[#D4A017]/20 shadow-md">
              <div className="space-y-6 mb-8">
                <div>
                  <label className="text-sm font-bold text-[#1B365D] mb-2 block uppercase tracking-wide">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="border-[#D4A017]/30 focus:border-[#D4A017] focus:ring-[#D4A017] bg-[#FDFBF7]"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-[#1B365D] mb-2 block uppercase tracking-wide">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    required
                    className="border-[#D4A017]/30 focus:border-[#D4A017] focus:ring-[#D4A017] bg-[#FDFBF7]"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-[#1B365D] mb-2 block uppercase tracking-wide">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your interest in SafarMA..."
                    required
                    className="min-h-[150px] border-[#D4A017]/30 focus:border-[#D4A017] focus:ring-[#D4A017] bg-[#FDFBF7]"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-[#C41E3A] hover:bg-[#A01830] text-white font-bold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all gap-2">
                <Send className="w-5 h-5" /> Send Message
              </Button>
            </form>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="mt-16 text-center">
             <div className="flex flex-col items-center justify-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1B365D]/5 text-[#1B365D] mb-2">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="text-[#1B365D] font-medium">hello@safarma.ma</p>
             </div>

            <div className="flex justify-center gap-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white border border-[#D4A017]/20 flex items-center justify-center text-[#1B365D] hover:bg-[#1B365D] hover:text-white hover:border-[#1B365D] transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
