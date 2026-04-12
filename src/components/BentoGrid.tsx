"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Figma, 
  Palette, 
  Layout, 
  Code2, 
  FileCode, 
  Braces,
  Sparkles,
  Zap,
  Globe,
  Database
} from "lucide-react";

const designSkills = [
  { icon: Figma, name: "Figma", level: 95, color: "accent-pink" },
  { icon: Palette, name: "UI/UX Design", level: 90, color: "accent-purple" },
  { icon: Layout, name: "Responsive Design", level: 92, color: "accent-cyan" },
];

const devSkills = [
  { icon: Code2, name: "React", level: 95, color: "accent-cyan" },
  { icon: FileCode, name: "Next.js", level: 90, color: "gold" },
  { icon: Braces, name: "TypeScript", level: 88, color: "accent-purple" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-12 xxs:py-16 xs:py-20 sm:py-24 md:py-32 px-3 xxs:px-4 xs:px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xxs:mb-10 xs:mb-12 sm:mb-16"
        >
          <p className="font-mono text-[9px] xxs:text-[10px] xs:text-xs sm:text-sm text-gold/80 tracking-[0.15em] xxs:tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] mb-2 xxs:mb-3 xs:mb-4 uppercase">
            Divine Abilities
          </p>
          <h2 className="font-display text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-marble">
            <span className="bg-gradient-to-r from-marble via-gold to-marble bg-clip-text text-transparent">
              Sacred Skills
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 xxs:gap-4 xs:gap-5 sm:gap-6"
        >
          {/* Design Card - Gradient border */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan rounded-lg xxs:rounded-xl xs:rounded-2xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-500" />
            <div className="relative bg-obsidian rounded-lg xxs:rounded-xl xs:rounded-2xl p-4 xxs:p-5 xs:p-6 sm:p-8 md:p-10 border border-accent-pink/20 group-hover:border-accent-pink/40 transition-all duration-500">
              <div className="flex items-center gap-2 xxs:gap-2.5 xs:gap-3 mb-4 xxs:mb-5 xs:mb-6 sm:mb-8">
                <div className="w-8 h-8 xxs:w-9 xxs:h-9 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-md xxs:rounded-lg xs:rounded-xl bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 flex items-center justify-center group-hover:from-accent-pink/30 group-hover:to-accent-purple/30 transition-colors">
                  <Sparkles className="w-4 h-4 xxs:w-4.5 xxs:h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-accent-pink" />
                </div>
                <div>
                  <h3 className="font-display text-base xxs:text-lg xs:text-xl sm:text-2xl font-semibold bg-gradient-to-r from-accent-pink to-accent-purple bg-clip-text text-transparent">
                    Design
                  </h3>
                  <p className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-marble/50 uppercase tracking-wider">
                    Stone Tablet • Divine Craft
                  </p>
                </div>
              </div>

              <p className="font-mono text-[10px] xxs:text-xs xs:text-sm text-marble/60 mb-4 xxs:mb-5 xs:mb-6 sm:mb-8 leading-relaxed">
                Crafting ethereal digital experiences through meticulous design. 
                Every pixel placed with the precision of ancient architects.
              </p>

              <div className="space-y-3 xxs:space-y-4 xs:space-y-5 sm:space-y-6">
                {designSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-1 xxs:mb-1.5 xs:mb-2">
                      <div className="flex items-center gap-1.5 xxs:gap-2 xs:gap-3">
                        <skill.icon className={`w-3 h-3 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4 text-${skill.color}`} />
                        <span className="font-mono text-[9px] xxs:text-[10px] xs:text-xs sm:text-sm text-marble/80">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-gold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-0.5 xxs:h-1 bg-obsidian-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className={`h-full rounded-full ${
                          skill.color === 'accent-pink' ? 'bg-gradient-to-r from-accent-pink to-accent-purple' :
                          skill.color === 'accent-purple' ? 'bg-gradient-to-r from-accent-purple to-accent-cyan' :
                          'bg-gradient-to-r from-accent-cyan to-gold'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Development Card - Gradient border */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan via-gold to-accent-orange opacity-30 group-hover:opacity-60 blur transition-opacity duration-500 rounded-lg xxs:rounded-xl xs:rounded-2xl" />
            <div className="relative bg-obsidian rounded-lg xxs:rounded-xl xs:rounded-2xl p-4 xxs:p-5 xs:p-6 sm:p-8 md:p-10 border border-accent-cyan/20 group-hover:border-accent-cyan/40 transition-all duration-500 overflow-hidden">
              {/* Holographic shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-cyan/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="flex items-center gap-2 xxs:gap-2.5 xs:gap-3 mb-4 xxs:mb-5 xs:mb-6 sm:mb-8 relative">
                <div className="w-8 h-8 xxs:w-9 xxs:h-9 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-md xxs:rounded-lg xs:rounded-xl bg-gradient-to-br from-accent-cyan/20 to-gold/20 flex items-center justify-center group-hover:from-accent-cyan/30 group-hover:to-gold/30 transition-colors">
                  <Zap className="w-4 h-4 xxs:w-4.5 xxs:h-4.5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="font-display text-base xxs:text-lg xs:text-xl sm:text-2xl font-semibold bg-gradient-to-r from-accent-cyan to-gold bg-clip-text text-transparent">
                    Development
                  </h3>
                  <p className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-gold/60 uppercase tracking-wider">
                    Holographic • Digital Sorcery
                  </p>
                </div>
              </div>

              <p className="font-mono text-[10px] xxs:text-xs xs:text-sm text-marble/60 mb-4 xxs:mb-5 xs:mb-6 sm:mb-8 leading-relaxed relative">
                Weaving digital spells through clean, performant code. 
                Transforming visions into interactive realities.
              </p>

              <div className="space-y-3 xxs:space-y-4 xs:space-y-5 sm:space-y-6 relative">
                {devSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-1 xxs:mb-1.5 xs:mb-2">
                      <div className="flex items-center gap-1.5 xxs:gap-2 xs:gap-3">
                        <skill.icon className={`w-3 h-3 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4 text-${skill.color}`} />
                        <span className="font-mono text-[9px] xxs:text-[10px] xs:text-xs sm:text-sm text-marble/80">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-gold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-0.5 xxs:h-1 bg-obsidian-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className={`h-full rounded-full ${
                          skill.color === 'accent-cyan' ? 'bg-gradient-to-r from-accent-cyan to-accent-emerald' :
                          skill.color === 'gold' ? 'bg-gradient-to-r from-gold to-accent-orange' :
                          'bg-gradient-to-r from-accent-purple to-accent-pink'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Code Snippet */}
              <div className="mt-4 xxs:mt-5 xs:mt-6 sm:mt-8 p-2.5 xxs:p-3 xs:p-4 bg-obsidian/50 rounded-md xxs:rounded-lg border border-accent-cyan/10 relative">
                <pre className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs overflow-x-auto">
                  <code>
                    <span className="text-accent-purple">const</span>{" "}
                    <span className="text-accent-cyan">createMagic</span>{" "}
                    <span className="text-gold">=</span>{" "}
                    <span className="text-accent-pink">()</span>{" "}
                    <span className="text-gold">=&gt;</span>{" "}
                    <span className="text-marble/40">{"{"}</span>
                    {"\n  "}
                    <span className="text-accent-purple">return</span>{" "}
                    <span className="text-gold">&lt;</span>
                    <span className="text-accent-cyan">SilverPrincessK</span>
                    <span className="text-gold"> /&gt;</span>
                    {"\n"}
                    <span className="text-marble/40">{"}"}</span>;
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards with gradient backgrounds */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-emerald to-accent-cyan opacity-30 group-hover:opacity-50 blur transition-opacity duration-500 rounded-lg xxs:rounded-xl xs:rounded-2xl" />
            <div className="relative bg-gradient-to-br from-accent-emerald/10 to-accent-cyan/5 rounded-lg xxs:rounded-xl xs:rounded-2xl p-3 xxs:p-4 xs:p-5 sm:p-6 flex items-center gap-3 xs:gap-4 border border-accent-emerald/20 group-hover:border-accent-emerald/40 transition-all duration-500">
              <div className="w-10 h-10 xxs:w-11 xxs:h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-md xxs:rounded-lg xs:rounded-xl bg-gradient-to-br from-accent-emerald/20 to-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 xxs:w-5.5 xxs:h-5.5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-accent-emerald" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-base xxs:text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-accent-emerald to-accent-cyan bg-clip-text text-transparent">5+ Years</p>
                <p className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-marble/60 uppercase tracking-wider truncate">
                  of Digital Mastery
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-orange to-accent-pink opacity-30 group-hover:opacity-50 blur transition-opacity duration-500 rounded-lg xxs:rounded-xl xs:rounded-2xl" />
            <div className="relative bg-gradient-to-br from-accent-orange/10 to-accent-pink/5 rounded-lg xxs:rounded-xl xs:rounded-2xl p-3 xxs:p-4 xs:p-5 sm:p-6 flex items-center gap-3 xs:gap-4 border border-accent-orange/20 group-hover:border-accent-orange/40 transition-all duration-500">
              <div className="w-10 h-10 xxs:w-11 xxs:h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-md xxs:rounded-lg xs:rounded-xl bg-gradient-to-br from-accent-orange/20 to-accent-pink/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 xxs:w-5.5 xxs:h-5.5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-accent-orange" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-base xxs:text-lg xs:text-xl sm:text-2xl font-bold bg-gradient-to-r from-accent-orange to-accent-pink bg-clip-text text-transparent">50+ Projects</p>
                <p className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-marble/60 uppercase tracking-wider truncate">
                  Divine Creations
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}