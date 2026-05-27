import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Nav from "@/components/site/Nav";
import ChatWidget from "@/components/site/ChatWidget";
import { Hero, Story, Menu, Events, Locations, Footer } from "@/components/site/Sections";

const SceneBackground = lazy(() => import("@/components/scene/SceneBackground"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ukusa Rhino — Hyderabad's First Motorsport Cafe" },
      {
        name: "description",
        content:
          "Coffee, food and high-octane culture. Founded by national racing champion Sandeep Nadimpalli. Jubilee Hills & HITEC City, Hyderabad.",
      },
      { property: "og:title", content: "Ukusa Rhino — Where the Race Ends, the Flavor Begins" },
      {
        property: "og:description",
        content: "Hyderabad's first motorsport cafe. Coffee. Food. Speed.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Racing+Sans+One&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 z-0 bg-black" />}>
        <SceneBackground />
      </Suspense>
      <main className="relative z-10">
        <Nav />
        <Hero />
        <Story />
        <Menu />
        <Events />
        <Locations />
        <Footer />
        <ChatWidget />
      </main>
    </>
  );
}
