"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Code2, Palette, Zap } from "lucide-react";

export default function Hero() {
  const [particleCount, setParticleCount] = useState(8);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Reduce particles on mobile for better performance
    const updateParticleCount = () => {
      const width = window.innerWidth;
      if (width < 375) {
        setParticleCount(5);
      } else if (width < 640) {
        setParticleCount(8);
      } else if (width < 1024) {
        setParticleCount(12);
      } else {
        setParticleCount(20);
      }
    };

    updateParticleCount();
    window.addEventListener("resize", updateParticleCount);
    return () => window.removeEventListener("resize", updateParticleCount);
  }, []);

  // Floating icons for visual interest
  const floatingIcons = [
    { Icon: Code2, delay: 0, x: "10%", y: "20%", color: "accent-cyan" },
    { Icon: Palette, delay: 0.5, x: "85%", y: "25%", color: "accent-pink" },
    { Icon: Sparkles, delay: 1, x: "15%", y: "70%", color: "accent-purple" },
    { Icon: Zap, delay: 1.5, x: "80%", y: "75%", color: "accent-orange" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Purple Orb */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-64 xxs:w-80 xs:w-96 h-64 xxs:h-80 xs:h-96 bg-accent-purple/20 rounded-full blur-3xl"
        />
        {/* Cyan Orb */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-20 w-72 xxs:w-80 xs:w-96 h-72 xxs:h-80 xs:h-96 bg-accent-cyan/15 rounded-full blur-3xl"
        />
        {/* Pink Orb */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/4 w-60 xxs:w-72 xs:w-80 h-60 xxs:h-72 xs:h-80 bg-accent-pink/15 rounded-full blur-3xl"
        />
        {/* Gold Orb */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-48 xxs:w-56 xs:w-64 h-48 xxs:h-56 xs:h-64 bg-gold/10 rounded-full blur-3xl"
        />
      </div>

      {/* Animated Particles - Reduced on mobile for performance */}
      {mounted && (
        <div className="particles">
          {[...Array(particleCount)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Decorative Icons - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map(({ Icon, delay, x, y, color }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 1.5 + delay, duration: 0.5 }}
            className="absolute"
            style={{ left: x, top: y }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
              transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon className={`w-6 h-6 xl:w-8 xl:h-8 text-${color}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Greek Column Frames - Hidden on very small screens */}
      <div className="absolute inset-0 pointer-events-none hidden xs:block">
        {/* Left Column */}
        <div className="absolute left-3 xxs:left-4 xs:left-6 sm:left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-accent-purple/30 to-transparent" />
        <div className="absolute left-4 xxs:left-5 xs:left-8 sm:left-10 md:left-20 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        
        {/* Right Column */}
        <div className="absolute right-3 xxs:right-4 xs:right-6 sm:right-8 md:right-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-accent-cyan/30 to-transparent" />
        <div className="absolute right-4 xxs:right-5 xs:right-8 sm:right-10 md:right-20 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

        {/* Top Frieze with gradient */}
        <div className="absolute top-14 xxs:top-16 xs:top-20 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent-pink/30 to-transparent" />
        
        {/* Bottom Frieze */}
        <div className="absolute bottom-14 xxs:bottom-16 xs:bottom-20 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Decorative corner elements */}
        <div className="absolute top-20 left-4 w-8 h-8 border-l-2 border-t-2 border-gold/20 rounded-tl-lg" />
        <div className="absolute top-20 right-4 w-8 h-8 border-r-2 border-t-2 border-accent-cyan/20 rounded-tr-lg" />
        <div className="absolute bottom-20 left-4 w-8 h-8 border-l-2 border-b-2 border-accent-purple/20 rounded-bl-lg" />
        <div className="absolute bottom-20 right-4 w-8 h-8 border-r-2 border-b-2 border-accent-pink/20 rounded-br-lg" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-3 xxs:px-4 xs:px-6 sm:px-8 w-full max-w-4xl mx-auto">
        {/* Decorative element above title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="flex items-center justify-center gap-2 mb-4 xxs:mb-6"
        >
          <div className="w-8 xxs:w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <Sparkles className="w-3 h-3 xxs:w-4 xxs:h-4 text-gold" />
          <div className="w-8 xxs:w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[8px] xxs:text-[10px] xs:text-xs sm:text-sm md:text-base text-marble/60 tracking-[0.1em] xxs:tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.3em] mb-3 xxs:mb-4 xs:mb-6 uppercase"
        >
          Welcome to the Temple
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-1 xxs:mb-2 xs:mb-4 leading-tight"
        >
          <span className="text-marble">SILVER</span>
          <br />
          <span className="bg-gradient-to-r from-gold via-accent-orange to-accent-pink bg-clip-text text-transparent">
            PRINCESS K
          </span>
        </motion.h1>

        {/* Subtitle with accent */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-mono text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl text-marble/80 tracking-wide sm:tracking-wider mb-6 xxs:mb-8 xs:mb-10 sm:mb-12 px-2"
        >
          <span className="text-accent-cyan">Architect</span> of the{" "}
          <span className="text-accent-pink">Digital Era</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col gap-2.5 xxs:gap-3 xs:gap-4 justify-center items-center px-3 xxs:px-4"
        >
          <a
            href="#skills"
            className="w-full max-w-xs px-5 xxs:px-6 xs:px-8 py-3 xxs:py-3.5 xs:py-4 bg-gradient-to-r from-gold via-gold-bright to-gold text-obsidian font-mono text-[10px] xxs:text-xs xs:text-sm font-semibold tracking-wider hover:from-gold-bright hover:via-gold hover:to-gold-bright transition-all duration-300 shadow-lg shadow-gold/30 text-center active:scale-95 min-h-[44px] flex items-center justify-center"
          >
            EXPLORE SKILLS
          </a>
          <a
            href="#oracle"
            className="w-full max-w-xs px-5 xxs:px-6 xs:px-8 py-3 xxs:py-3.5 xs:py-4 border border-accent-cyan/50 text-accent-cyan font-mono text-[10px] xxs:text-xs xs:text-sm font-semibold tracking-wider hover:bg-accent-cyan/10 hover:border-accent-cyan active:bg-accent-cyan/20 transition-all duration-300 text-center active:scale-95 min-h-[44px] flex items-center justify-center"
          >
            CONSULT THE ORACLE
          </a>
        </motion.div>

        {/* Decorative element below buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-3 mt-8 xxs:mt-10"
        >
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-2 xxs:bottom-4 xs:bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-7 xxs:w-5 xxs:h-8 xs:w-6 xs:h-10 border-2 border-marble/30 rounded-full flex justify-center pt-1 xxs:pt-1.5 xs:pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 xxs:h-1.5 xs:h-2 bg-gradient-to-b from-gold to-accent-cyan rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}