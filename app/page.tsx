import { readFile } from "node:fs/promises";
import path from "node:path";
import Script from "next/script";
import Prelude from "./components/home/prelude";
import Hero from "./components/home/hero";
import About from "./components/home/about";
import Skills from "./components/home/skills";
import Journey from "./components/home/journey";
import CodingStats from "./components/home/coding-stats";
import Projects from "./components/home/projects";
import EducationAchievements from "./components/home/education-achievements";
import Reports from "./components/home/reports";
import Contact from "./components/home/contact";
import Footer from "./components/home/footer";
import HomeEffects from "./components/home/home-effects";

const tailwindConfig = `tailwind.config = {
  theme: {
    extend: {
      colors: {
        'neo-yellow': '#FBFF48',
        'neo-pink': '#FF70A6',
        'neo-blue': '#3B82F6',
        'neo-green': '#33FF57',
        'neo-purple': '#A855F7',
        'neo-orange': '#FF9F1C',
        'neo-red': '#FF2A2A',
        'neo-white': '#FFFDF5',
        'neo-black': '#121212',
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px #000',
        'hard-sm': '2px 2px 0px 0px #000',
        'hard-lg': '8px 8px 0px 0px #000',
        'hard-xl': '12px 12px 0px 0px #000',
      }
    }
  }
};`;

export default async function Home() {
  const cssParts = await Promise.all([
    readFile(path.join(process.cwd(), "content/home-styles/01-core.css"), "utf8"),
    readFile(path.join(process.cwd(), "content/home-styles/02-layout.css"), "utf8"),
    readFile(path.join(process.cwd(), "content/home-styles/03-effects.css"), "utf8"),
  ]);
  const inlineCss = cssParts.join("\n");

  return (
    <main className="text-neo-black font-display antialiased selection:bg-neo-black selection:text-neo-yellow">
      <Script id="tailwind-config" strategy="beforeInteractive">
        {tailwindConfig}
      </Script>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" strategy="afterInteractive" />
      <style dangerouslySetInnerHTML={{ __html: inlineCss }} />
      <Prelude />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <CodingStats />
      <Projects />
      <EducationAchievements />
      <Reports />
      <Contact />
      <Footer />
      <HomeEffects />
    </main>
  );
}
