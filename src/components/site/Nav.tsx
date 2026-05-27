import { useEffect, useState } from "react";
import logo from "@/assets/ukusa-logo.jpg";

const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#events", label: "Events" },
  { href: "#locations", label: "Locations" },
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-[3px] w-full bg-black/30">
        <div
          className="h-full bg-racing"
          style={{ width: `${progress}%`, boxShadow: "0 0 12px #e8001c" }}
        />
      </div>
      <header
        className={`fixed left-0 right-0 top-[3px] z-40 transition-all ${
          scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Ukusa Rhino" className="h-9 w-9 rounded-full object-cover ring-1 ring-gold/40" />
            <span className="font-display text-xl tracking-widest text-foreground">
              UKUSA <span className="text-racing">RHINO</span>
            </span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm uppercase tracking-[0.2em] text-foreground/70 transition hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reserve"
            className="glow-red-hover rounded-sm border border-racing/80 bg-black/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition hover:bg-racing/10"
          >
            Reserve
          </a>
        </nav>
      </header>
    </>
  );
}
