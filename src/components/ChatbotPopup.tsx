import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatbotPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          <div className="gradient-hero p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
                <span className="text-xs font-bold text-deep-blue">AI</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">SAFAR Assistant</p>
                <p className="text-xs text-white/60">Powered by AI</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4 h-48 flex items-end">
            <div className="bg-muted rounded-xl rounded-bl-none p-3 text-sm text-foreground">
              👋 Marhaba! I'm your SAFAR AI guide. Ask me anything about smart tourism in Morocco!
            </div>
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              className="flex-1 text-sm bg-muted rounded-lg px-3 py-2 outline-none text-foreground placeholder:text-muted-foreground"
            />
            <Button size="icon" className="bg-secondary text-secondary-foreground rounded-lg shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      <Button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:scale-105 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default ChatbotPopup;
