import { useEffect, useRef } from "react";
import {
  Coffee,
  Croissant,
  UtensilsCrossed,
  Sandwich,
  CakeSlice,
  Flag,
  Bike,
  Trophy,
  Users,
  MapPin,
  Phone,
  Instagram,
  MessageSquare,
} from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15 },
    );
    el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(30px)";
      node.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      io.observe(node);
    });
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px overflow-hidden">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-racing to-transparent"
          style={{ animation: "streak 3.5s linear infinite" }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-gold/80">
          Hyderabad • Motorsport Cafe
        </p>
        <h1 className="font-display text-5xl leading-[0.95] sm:text-7xl md:text-[7.5rem]">
          WHERE THE RACE ENDS,
          <br />
          <span className="text-racing">THE FLAVOR</span> BEGINS
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base text-foreground/70 md:text-lg">
          Hyderabad's first motorsport cafe. Coffee. Food. Speed.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="glow-red-hover rounded-sm border border-racing bg-racing px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition"
          >
            Explore Menu
          </a>
          <a
            href="#reserve"
            className="rounded-sm border border-gold/60 bg-black/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold transition hover:bg-gold/10"
          >
            Book a Table
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/40">
        Scroll · Start your lap
      </div>
    </section>
  );
}

export function Story() {
  const ref = useReveal();
  return (
    <section
      id="story"
      ref={ref}
      className="relative flex min-h-screen items-center px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <div data-reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-racing">Chapter 01 · The Founder</p>
          <h2 className="font-display text-5xl md:text-7xl">
            BORN FROM THE <span className="text-gold">RACETRACK</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-foreground/75 md:text-lg">
            6 national titles. Thousands of laps. One dream beyond the finish
            line. Sandeep Nadimpalli traded his racing leathers for a chef's
            haven — and Ukusa Rhino was born. A place where the thrill of speed
            meets the art of great food.
          </p>
          <div className="mt-10 flex items-center gap-4 border-l-2 border-racing pl-4">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gold/60 to-racing/60 ring-2 ring-gold/40" />
            <div>
              <p className="font-display text-lg tracking-wider">Sandeep Nadimpalli</p>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                National Racing Champion & Founder
              </p>
            </div>
          </div>
        </div>
        <div data-reveal className="grid grid-cols-2 gap-4">
          {[
            { n: "06", l: "National Titles" },
            { n: "10K+", l: "Race Laps" },
            { n: "02", l: "Locations" },
            { n: "∞", l: "Cups Brewed" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-sm border border-white/10 bg-surface/60 p-6 backdrop-blur transition hover:border-racing/60"
            >
              <p className="font-display text-5xl text-gold text-glow-gold">{s.n}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/60">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MENU = [
  {
    icon: Coffee,
    code: "01",
    name: "IGNITION",
    sub: "Coffees & Beverages",
    items: [
      "Roasted Hazelnut Coffee",
      "Peach Cold Brew",
      "Cold Brew · Cappuccino · Americano",
      "Flat White",
      "Smoothies · Fresh Juices",
      "Iced Teas · Lemonades · Milkshakes",
    ],
  },
  {
    icon: Croissant,
    code: "02",
    name: "COLD START",
    sub: "Breakfast",
    items: [
      "Hazelnut Pancakes — Maple & Whipped Cream",
      "Classic Pancakes · Plain Croissant",
      "Baked Beans Chilly Toast",
      "Veggie Breakfast Platter",
      "Iranian Breakfast Platter — Hummus, Tzatziki, Tabbouleh, Pita, Lamb Keema Omelette",
    ],
  },
  {
    icon: UtensilsCrossed,
    code: "03",
    name: "FULL THROTTLE",
    sub: "Mains & Pasta",
    items: [
      "Aglio Olio · Arrabiata · Alfredo",
      "Parma Rosa Pasta (Alfredo + Marinara)",
      "Grilled Chicken — Gravy & Mash",
      "Chicken Satay · Basil Lime Sauce",
      "Prawns · Chili Basil Dressing",
      "Barbecue Chicken Pizza",
    ],
  },
  {
    icon: Sandwich,
    code: "04",
    name: "PIT LANE BITES",
    sub: "Starters & Snacks",
    items: ["Signature Salads", "Stacked Sandwiches", "Slow-simmered Soups"],
  },
  {
    icon: CakeSlice,
    code: "05",
    name: "VICTORY LAP",
    sub: "Desserts & Sweets",
    items: ["Tres Leches", "Tiramisu", "Assorted Pastries", "Seasonal Specials"],
  },
];

export function Menu() {
  const ref = useReveal();
  return (
    <section id="menu" ref={ref} className="relative min-h-screen px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center" data-reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-racing">The Grid</p>
          <h2 className="font-display text-5xl md:text-7xl">THE PIT STOP MENU</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gold">Fuel up. Race on.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MENU.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-surface/70 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-racing/60 hover:shadow-[0_20px_60px_-10px_rgba(232,0,28,0.4)]"
              >
                <div className="absolute right-4 top-4 font-display text-5xl text-white/5">
                  {cat.code}
                </div>
                <Icon className="h-7 w-7 text-racing" />
                <h3 className="mt-5 font-display text-3xl tracking-wider">{cat.name}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-gold/80">{cat.sub}</p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/75">
                  {cat.items.map((it) => (
                    <li key={it} className="flex gap-2 border-b border-white/5 pb-2">
                      <span className="text-racing">›</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const EVENTS = [
  { icon: Flag, title: "F1 Race Nights", desc: "Watch every Grand Prix on our outdoor big screen. Pit lane seating. Race atmosphere." },
  { icon: Trophy, title: "IPL Screenings", desc: "Cricket fever, Ukusa style." },
  { icon: Bike, title: "Bike Meets", desc: "Ride in. Park up. Show off." },
  { icon: Users, title: "Private Events", desc: "Book the entire circuit for your crew." },
];

export function Events() {
  const ref = useReveal();
  return (
    <section id="events" ref={ref} className="relative min-h-screen px-6 py-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16" data-reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-racing">Live & Loud</p>
          <h2 className="font-display text-5xl md:text-7xl">THE GRID — LIVE EVENTS</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {EVENTS.map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={e.title}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group flex gap-5 rounded-sm border border-white/10 bg-black/50 p-7 backdrop-blur transition hover:border-gold/60"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-racing/40 bg-racing/10 text-racing transition group-hover:bg-racing group-hover:text-white">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider">{e.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{e.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const LOCATIONS = [
  {
    name: "Jubilee Hills",
    address: "Road No. 10, Plot 130, Jubilee Hills, Hyderabad",
    hours: "Mon–Fri 11AM–12AM · Sat–Sun 8AM–12AM",
  },
  {
    name: "HITEC City",
    address: "HITEC City, Hyderabad",
    hours: "Mon–Fri 11AM–12AM · Sat–Sun 8AM–12AM",
  },
];

export function Locations() {
  const ref = useReveal();
  return (
    <section id="locations" ref={ref} className="relative min-h-screen px-6 py-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 text-center" data-reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-racing">The Circuits</p>
          <h2 className="font-display text-5xl md:text-7xl">FIND YOUR CIRCUIT</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((l, i) => (
            <div
              key={l.name}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className="relative overflow-hidden rounded-sm border border-white/10 bg-surface/70 p-8 backdrop-blur transition hover:border-racing/60"
            >
              <MapPin className="h-8 w-8 text-racing" />
              <h3 className="mt-4 font-display text-4xl tracking-wider">{l.name}</h3>
              <p className="mt-3 text-sm text-foreground/75">{l.address}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold/80">{l.hours}</p>
              <div className="mt-6 flex gap-3">
                <a
                  href={`https://maps.google.com/?q=Ukusa+Rhino+${encodeURIComponent(l.name)}+Hyderabad`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold/10"
                >
                  Directions
                </a>
                <a
                  href="tel:9052462424"
                  className="rounded-sm border border-racing/60 bg-racing/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-foreground hover:bg-racing/20"
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
        <div id="reserve" className="mt-16 rounded-sm border border-racing/40 bg-black/60 p-10 text-center backdrop-blur" data-reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Reservations</p>
          <p className="mt-4 font-display text-4xl md:text-5xl">
            <Phone className="mr-3 inline h-7 w-7 text-racing" />
            +91 90524 62424
          </p>
          <a
            href="https://wa.me/919052462424"
            className="glow-red-hover mt-8 inline-block rounded-sm border border-racing bg-racing px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
          >
            Book Your Pit Stop
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/80 px-6 py-14 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-widest">
            UKUSA <span className="text-racing">RHINO</span>
          </p>
          <p className="mt-3 text-sm text-foreground/60">Speed. Flavor. Experience.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-[0.25em] text-foreground/70">
          <a href="#menu" className="hover:text-gold">Menu</a>
          <a href="#events" className="hover:text-gold">Events</a>
          <a href="#locations" className="hover:text-gold">Locations</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-gold">
            <Instagram size={14} /> Instagram
          </a>
          <a href="https://wa.me/919052462424" className="flex items-center gap-1 hover:text-gold">
            <MessageSquare size={14} /> WhatsApp
          </a>
        </div>
        <div className="text-xs text-foreground/50 md:text-right">
          © 2025 Ukusa Rhino. <br />
          Powered by <span className="text-gold">Talktiv AI</span>.
        </div>
      </div>
    </footer>
  );
}
