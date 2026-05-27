import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 overflow-hidden rounded-lg border border-racing/40 bg-surface/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
            <div>
              <p className="font-display text-sm tracking-widest text-gold">REX • PIT CREW</p>
              <p className="text-[10px] uppercase tracking-widest text-foreground/60">Talktiv AI</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-foreground/60 hover:text-racing">
              <X size={16} />
            </button>
          </div>
          <div className="space-y-3 p-4 text-sm">
            <div className="rounded-lg bg-black/40 p-3 text-foreground/90">
              Hey! I'm Rex, your pit crew assistant. Ready to book a table or explore our menu?
            </div>
            <div className="flex flex-wrap gap-2">
              {["Book a table", "View menu", "Race nights", "WhatsApp"].map((c) => (
                <button
                  key={c}
                  className="rounded-full border border-gold/40 px-3 py-1 text-xs text-gold hover:bg-gold/10"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-white/10 bg-black/40 p-3">
            <input
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
            />
            <button className="text-racing hover:text-foreground">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="pulse-red flex h-14 w-14 items-center justify-center rounded-full bg-racing text-white shadow-lg shadow-racing/50 transition hover:scale-105"
        aria-label="Chat with Rex"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
