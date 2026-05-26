import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Story } from "@/components/site/Story";
import { Gallery } from "@/components/site/Gallery";
import { Volunteer } from "@/components/site/Volunteer";
import { Footer } from "@/components/site/Footer";
import { MouseGlow } from "@/components/site/MouseGlow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "She Can! Foundation — Empowering Women, Transforming Futures" },
      { name: "description", content: "She Can! Foundation empowers women through education, leadership, skill development and health awareness." },
      { property: "og:title", content: "She Can! Foundation" },
      { property: "og:description", content: "Empowering Women. Transforming Futures." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Story />
      <Gallery />
      <Volunteer />
      <Footer />
    </main>
  );
}
