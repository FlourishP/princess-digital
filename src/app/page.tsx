import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-obsidian overflow-hidden">
      {/* Marble Background Overlay */}
      <div className="fixed inset-0 marble-overlay pointer-events-none z-0" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <BentoGrid />
        <About />
        <Contact />
        <Socials />
      </div>
    </main>
  );
}
