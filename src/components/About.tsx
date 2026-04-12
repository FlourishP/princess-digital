"use client";

import { motion } from "framer-motion";
import { Compass, Map, Star, Crown, Lightbulb, Rocket } from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description: "First steps into the digital realm, learning the sacred art of web creation.",
    icon: Compass,
    color: "accent-cyan",
  },
  {
    year: "2021",
    title: "The Awakening",
    description: "Mastered React and Next.js. Built the first temples of code.",
    icon: Crown,
    color: "gold",
  },
  {
    year: "2024",
    title: "The Ascension",
    description: "Now crafting experiences that blur the line between art and technology.",
    icon: Rocket,
    color: "accent-pink",
  },
];

export default function About() {
  return (
    <section id="odyssey" className="py-12 xxs:py-16 xs:py-20 sm:py-24 md:py-32 px-3 xxs:px-4 xs:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xxs:mb-10 xs:mb-12 sm:mb-16"
        >
          <p className="font-mono text-[9px] xxs:text-[10px] xs:text-xs sm:text-sm text-gold/80 tracking-[0.15em] xxs:tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] mb-2 xxs:mb-3 xs:mb-4 uppercase">
            My Journey
          </p>
          <h2 className="font-display text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-marble mb-3 xxs:mb-4 xs:mb-5 sm:mb-6">
            <span className="bg-gradient-to-r from-accent-cyan via-gold to-accent-pink bg-clip-text text-transparent">
              The Odyssey
            </span>
          </h2>
          <p className="font-mono text-[10px] xxs:text-xs xs:text-sm text-marble/60 max-w-2xl mx-auto leading-relaxed px-2">
            Every great temple begins with a single stone. My path from curious explorer 
            to digital architect has been marked by continuous learning, bold experiments, 
            and an unwavering pursuit of excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-gold/30 to-accent-pink/50 -translate-x-1/2" />
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-2.5 xxs:left-3 xs:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-gold/30 to-accent-pink/50" />

          <div className="space-y-5 xxs:space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-3 xxs:gap-4 xs:gap-6 sm:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                } ml-8 xxs:ml-10 xs:ml-12 sm:ml-14 md:ml-0`}>
                  <div className="relative group">
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                      item.color === 'accent-cyan' ? 'from-accent-cyan to-accent-emerald' :
                      item.color === 'gold' ? 'from-gold to-accent-orange' :
                      'from-accent-pink to-accent-purple'
                    } opacity-20 group-hover:opacity-40 blur transition-opacity duration-500 rounded-md xxs:rounded-lg xs:rounded-xl`} />
                    <div className="relative bg-obsidian rounded-md xxs:rounded-lg xs:rounded-xl p-3 xxs:p-4 xs:p-5 sm:p-6 border border-marble/10 group-hover:border-gold/20 transition-all duration-500 w-full md:w-auto inline-block">
                      <div className={`flex items-center gap-1.5 xxs:gap-2 xs:gap-3 mb-1.5 xxs:mb-2 xs:mb-3 ${
                        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}>
                        <item.icon className={`w-3 h-3 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4 text-${item.color}`} />
                        <span className={`font-mono text-[9px] xxs:text-[10px] xs:text-xs tracking-wider ${
                          item.color === 'accent-cyan' ? 'text-accent-cyan' :
                          item.color === 'gold' ? 'text-gold' :
                          'text-accent-pink'
                        }`}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-display text-sm xxs:text-base xs:text-lg sm:text-xl font-semibold text-marble mb-1 xxs:mb-1.5 xs:mb-2">
                        {item.title}
                      </h3>
                      <p className="font-mono text-[9px] xxs:text-[10px] xs:text-xs sm:text-sm text-marble/60 max-w-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Icon - Desktop */}
                <div className="relative z-10 hidden md:block">
                  <div className={`w-4 h-4 rounded-full border-4 border-obsidian ${
                    item.color === 'accent-cyan' ? 'bg-accent-cyan' :
                    item.color === 'gold' ? 'bg-gold' :
                    'bg-accent-pink'
                  }`} />
                </div>
                
                {/* Left Icon - Mobile */}
                <div className="absolute left-2.5 xxs:left-3 xs:left-4 z-10 md:hidden -translate-x-1/2">
                  <div className={`w-2.5 h-2.5 xxs:w-3 xxs:h-3 xs:w-3.5 xs:h-3.5 rounded-full border-[3px] xxs:border-4 border-obsidian ${
                    item.color === 'accent-cyan' ? 'bg-accent-cyan' :
                    item.color === 'gold' ? 'bg-gold' :
                    'bg-accent-pink'
                  }`} />
                </div>

                {/* Empty space for alignment - Desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 xxs:mt-10 xs:mt-12 sm:mt-16 text-center"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple via-gold to-accent-pink opacity-20 group-hover:opacity-30 blur transition-opacity duration-500 rounded-lg xxs:rounded-xl xs:rounded-2xl" />
            <div className="relative bg-obsidian rounded-lg xxs:rounded-xl xs:rounded-2xl p-4 xxs:p-5 xs:p-6 sm:p-8 md:p-10 max-w-2xl mx-auto border border-gold/10 group-hover:border-gold/20 transition-all duration-500">
              <Lightbulb className="w-5 h-5 xxs:w-6 xxs:h-6 text-gold/50 mx-auto mb-3 xxs:mb-4" />
              <p className="font-display text-sm xxs:text-base xs:text-lg sm:text-xl md:text-2xl text-marble/80 italic leading-relaxed">
                &ldquo;In the intersection of ancient wisdom and modern technology, 
                I find the blueprint for <span className="text-accent-cyan">digital excellence</span>.&rdquo;
              </p>
              <p className="font-mono text-[9px] xxs:text-[10px] xs:text-xs sm:text-sm text-gold/80 mt-4 xxs:mt-5 sm:mt-6 tracking-wider">
                — Silver Princess K
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}