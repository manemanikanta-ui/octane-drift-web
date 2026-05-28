import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as Coffee, a as Croissant, U as UtensilsCrossed, S as Sandwich, b as CakeSlice, F as Flag, T as Trophy, B as Bike, c as Users, M as MapPin, P as Phone, I as Instagram, d as MessageSquare, X, e as Send, f as MessageCircle } from "../_libs/lucide-react.mjs";
const logo = "/assets/ukusa-logo-BHV2cCwI.jpg";
const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#events", label: "Events" },
  { href: "#locations", label: "Locations" }
];
function Nav() {
  const [progress, setProgress] = reactExports.useState(0);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h * 100 : 0);
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed left-0 top-0 z-50 h-[3px] w-full bg-black/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-full bg-racing",
        style: { width: `${progress}%`, boxShadow: "0 0 12px #e8001c" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed left-0 right-0 top-[3px] z-40 transition-all ${scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Ukusa Rhino", className: "h-9 w-9 rounded-full object-cover ring-1 ring-gold/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl tracking-widest text-foreground", children: [
              "UKUSA ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-racing", children: "RHINO" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-8 md:flex", children: LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-sm uppercase tracking-[0.2em] text-foreground/70 transition hover:text-gold",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#reserve",
              className: "glow-red-hover rounded-sm border border-racing/80 bg-black/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground transition hover:bg-racing/10",
              children: "Reserve"
            }
          )
        ] })
      }
    )
  ] });
}
function ChatWidget() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-50", children: [
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 w-80 overflow-hidden rounded-lg border border-racing/40 bg-surface/95 shadow-2xl backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm tracking-widest text-gold", children: "REX • PIT CREW" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-foreground/60", children: "Talktiv AI" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "text-foreground/60 hover:text-racing", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-black/40 p-3 text-foreground/90", children: "Hey! I'm Rex, your pit crew assistant. Ready to book a table or explore our menu?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Book a table", "View menu", "Race nights", "WhatsApp"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "rounded-full border border-gold/40 px-3 py-1 text-xs text-gold hover:bg-gold/10",
            children: c
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-t border-white/10 bg-black/40 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            placeholder: "Type a message...",
            className: "flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-racing hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setOpen((o) => !o),
        className: "pulse-red flex h-14 w-14 items-center justify-center rounded-full bg-racing text-white shadow-lg shadow-racing/50 transition hover:scale-105",
        "aria-label": "Chat with Rex",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 24 })
      }
    )
  ] });
}
function useReveal() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15 }
    );
    el.querySelectorAll("[data-reveal]").forEach((node) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(30px)";
      node.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      io.observe(node);
    });
    return () => io.disconnect();
  }, []);
  return ref;
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative flex min-h-screen items-center justify-center px-6 pt-24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-1/2 h-px overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full w-1/3 bg-gradient-to-r from-transparent via-racing to-transparent",
            style: { animation: "streak 3.5s linear infinite" }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 text-xs uppercase tracking-[0.5em] text-gold/80", children: "Hyderabad • Motorsport Cafe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl leading-[0.95] sm:text-7xl md:text-[7.5rem]", children: [
            "WHERE THE RACE ENDS,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-racing", children: "THE FLAVOR" }),
            " BEGINS"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-xl text-base text-foreground/70 md:text-lg", children: "Hyderabad's first motorsport cafe. Coffee. Food. Speed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#menu",
                className: "glow-red-hover rounded-sm border border-racing bg-racing px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition",
                children: "Explore Menu"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#reserve",
                className: "rounded-sm border border-gold/60 bg-black/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold transition hover:bg-gold/10",
                children: "Book a Table"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/40", children: "Scroll · Start your lap" })
      ]
    }
  );
}
function Story() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "story",
      ref,
      className: "relative flex min-h-screen items-center px-6 py-24",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.4em] text-racing", children: "Chapter 01 · The Founder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-5xl md:text-7xl", children: [
            "BORN FROM THE ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "RACETRACK" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-base leading-relaxed text-foreground/75 md:text-lg", children: "6 national titles. Thousands of laps. One dream beyond the finish line. Sandeep Nadimpalli traded his racing leathers for a chef's haven — and Ukusa Rhino was born. A place where the thrill of speed meets the art of great food." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-4 border-l-2 border-racing pl-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-gradient-to-br from-gold/60 to-racing/60 ring-2 ring-gold/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg tracking-wider", children: "Sandeep Nadimpalli" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-foreground/60", children: "National Racing Champion & Founder" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-reveal": true, className: "grid grid-cols-2 gap-4", children: [
          { n: "06", l: "National Titles" },
          { n: "10K+", l: "Race Laps" },
          { n: "02", l: "Locations" },
          { n: "∞", l: "Cups Brewed" }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-sm border border-white/10 bg-surface/60 p-6 backdrop-blur transition hover:border-racing/60",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-5xl text-gold text-glow-gold", children: s.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/60", children: s.l })
            ]
          },
          s.l
        )) })
      ] })
    }
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
      "Iced Teas · Lemonades · Milkshakes"
    ]
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
      "Iranian Breakfast Platter — Hummus, Tzatziki, Tabbouleh, Pita, Lamb Keema Omelette"
    ]
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
      "Barbecue Chicken Pizza"
    ]
  },
  {
    icon: Sandwich,
    code: "04",
    name: "PIT LANE BITES",
    sub: "Starters & Snacks",
    items: ["Signature Salads", "Stacked Sandwiches", "Slow-simmered Soups"]
  },
  {
    icon: CakeSlice,
    code: "05",
    name: "VICTORY LAP",
    sub: "Desserts & Sweets",
    items: ["Tres Leches", "Tiramisu", "Assorted Pastries", "Seasonal Specials"]
  }
];
function Menu() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "menu", ref, className: "relative min-h-screen px-6 py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", "data-reveal": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.4em] text-racing", children: "The Grid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl", children: "THE PIT STOP MENU" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm uppercase tracking-[0.3em] text-gold", children: "Fuel up. Race on." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: MENU.map((cat, i) => {
      const Icon = cat.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-reveal": true,
          style: { transitionDelay: `${i * 80}ms` },
          className: "group relative overflow-hidden rounded-sm border border-white/10 bg-surface/70 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-racing/60 hover:shadow-[0_20px_60px_-10px_rgba(232,0,28,0.4)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4 font-display text-5xl text-white/5", children: cat.code }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-racing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-3xl tracking-wider", children: cat.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold/80", children: cat.sub }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2 text-sm text-foreground/75", children: cat.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 border-b border-white/5 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-racing", children: "›" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it })
            ] }, it)) })
          ]
        },
        cat.name
      );
    }) })
  ] }) });
}
const EVENTS = [
  { icon: Flag, title: "F1 Race Nights", desc: "Watch every Grand Prix on our outdoor big screen. Pit lane seating. Race atmosphere." },
  { icon: Trophy, title: "IPL Screenings", desc: "Cricket fever, Ukusa style." },
  { icon: Bike, title: "Bike Meets", desc: "Ride in. Park up. Show off." },
  { icon: Users, title: "Private Events", desc: "Book the entire circuit for your crew." }
];
function Events() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "events", ref, className: "relative min-h-screen px-6 py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.4em] text-racing", children: "Live & Loud" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl", children: "THE GRID — LIVE EVENTS" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: EVENTS.map((e, i) => {
        const Icon = e.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-reveal": true,
            style: { transitionDelay: `${i * 80}ms` },
            className: "group flex gap-5 rounded-sm border border-white/10 bg-black/50 p-7 backdrop-blur transition hover:border-gold/60",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-racing/40 bg-racing/10 text-racing transition group-hover:bg-racing group-hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl tracking-wider", children: e.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-foreground/70", children: e.desc })
              ] })
            ]
          },
          e.title
        );
      }) })
    ] })
  ] });
}
const LOCATIONS = [
  {
    name: "Jubilee Hills",
    address: "Road No. 10, Plot 130, Jubilee Hills, Hyderabad",
    hours: "Mon–Fri 11AM–12AM · Sat–Sun 8AM–12AM"
  },
  {
    name: "HITEC City",
    address: "HITEC City, Hyderabad",
    hours: "Mon–Fri 11AM–12AM · Sat–Sun 8AM–12AM"
  }
];
function Locations() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "locations", ref, className: "relative min-h-screen px-6 py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 text-center", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs uppercase tracking-[0.4em] text-racing", children: "The Circuits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-7xl", children: "FIND YOUR CIRCUIT" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: LOCATIONS.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-reveal": true,
          style: { transitionDelay: `${i * 100}ms` },
          className: "relative overflow-hidden rounded-sm border border-white/10 bg-surface/70 p-8 backdrop-blur transition hover:border-racing/60",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-8 w-8 text-racing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-4xl tracking-wider", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/75", children: l.address }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.2em] text-gold/80", children: l.hours }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `https://maps.google.com/?q=Ukusa+Rhino+${encodeURIComponent(l.name)}+Hyderabad`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "rounded-sm border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold/10",
                  children: "Directions"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "tel:9052462424",
                  className: "rounded-sm border border-racing/60 bg-racing/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-foreground hover:bg-racing/20",
                  children: "Call"
                }
              )
            ] })
          ]
        },
        l.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "reserve", className: "mt-16 rounded-sm border border-racing/40 bg-black/60 p-10 text-center backdrop-blur", "data-reveal": true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-gold", children: "Reservations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-3 inline h-7 w-7 text-racing" }),
          "+91 90524 62424"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://wa.me/919052462424",
            className: "glow-red-hover mt-8 inline-block rounded-sm border border-racing bg-racing px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white",
            children: "Book Your Pit Stop"
          }
        )
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-white/10 bg-black/80 px-6 py-14 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 md:grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl tracking-widest", children: [
        "UKUSA ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-racing", children: "RHINO" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-foreground/60", children: "Speed. Flavor. Experience." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-[0.25em] text-foreground/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#menu", className: "hover:text-gold", children: "Menu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#events", className: "hover:text-gold", children: "Events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#locations", className: "hover:text-gold", children: "Locations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer", className: "flex items-center gap-1 hover:text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 14 }),
        " Instagram"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/919052462424", className: "flex items-center gap-1 hover:text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { size: 14 }),
        " WhatsApp"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-foreground/50 md:text-right", children: [
      "© 2025 Ukusa Rhino. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Powered by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Talktiv AI" }),
      "."
    ] })
  ] }) });
}
const SceneBackground = reactExports.lazy(() => import("./SceneBackground-AU_47n4O.mjs"));
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-0 bg-black" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(SceneBackground, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Events, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Locations, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChatWidget, {})
    ] })
  ] });
}
export {
  Index as component
};
