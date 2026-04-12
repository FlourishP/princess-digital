"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/FlourishP",
    label: "Code Repository",
    color: "accent-purple",
    hoverColor: "hover:text-accent-purple",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/silverprincessk",
    label: "Professional Network",
    color: "accent-cyan",
    hoverColor: "hover:text-accent-cyan",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/silverprincessk",
    label: "Digital Thoughts",
    color: "accent-pink",
    hoverColor: "hover:text-accent-pink",
  },
];

export default function Socials() {
  return (
    <>
      {/* Desktop Floating Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 xl:gap-4"
      >
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 + index * 0.1 }}
            className="group relative"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${
              social.color === 'accent-purple' ? 'from-accent-purple to-accent-pink' :
              social.color === 'accent-cyan' ? 'from-accent-cyan to-accent-emerald' :
              'from-accent-pink to-accent-orange'
            } opacity-0 group-hover:opacity-60 blur transition-opacity duration-300 rounded-lg xl:rounded-xl`} />
            <div className="relative w-10 h-10 xl:w-12 xl:h-12 glass rounded-lg xl:rounded-xl flex items-center justify-center group-hover:glass-gold transition-all duration-300 border border-marble/10 group-hover:border-gold/30">
              <social.icon className={`w-4 h-4 xl:w-5 xl:h-5 text-marble/70 ${social.hoverColor} transition-colors`} />
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-2 xl:mr-3 px-2 xl:px-3 py-1 bg-obsidian border border-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              <span className="font-mono text-[10px] xl:text-xs text-marble/80">{social.label}</span>
            </div>
          </motion.a>
        ))}
        
        {/* Vertical Line */}
        <div className="w-px h-16 xl:h-20 bg-gradient-to-b from-transparent via-gold/30 to-transparent mx-auto" />
      </motion.div>

      {/* Mobile Footer */}
      <footer className="lg:hidden py-6 xxs:py-8 xs:py-10 sm:py-12 px-3 xxs:px-4 xs:px-6 border-t border-marble/10 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-accent-purple/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-accent-cyan/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <p className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-marble/40 mb-3 xxs:mb-4 xs:mb-6 uppercase tracking-wider">
            Connect with the Divine
          </p>
          
          {/* Social Icons with gradient backgrounds */}
          <div className="flex justify-center gap-2.5 xxs:gap-3 xs:gap-4 mb-4 xxs:mb-6 xs:mb-8">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                  social.color === 'accent-purple' ? 'from-accent-purple to-accent-pink' :
                  social.color === 'accent-cyan' ? 'from-accent-cyan to-accent-emerald' :
                  'from-accent-pink to-accent-orange'
                } opacity-30 group-hover:opacity-60 blur transition-opacity duration-300 rounded-md xxs:rounded-lg xs:rounded-xl`} />
                <div className="relative w-9 h-9 xxs:w-10 xxs:h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 bg-obsidian/80 backdrop-blur-sm rounded-md xxs:rounded-lg xs:rounded-xl flex items-center justify-center border border-marble/10 group-hover:border-gold/30 transition-all duration-300 active:scale-95">
                  <social.icon className={`w-3.5 h-3.5 xxs:w-4 xxs:h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-marble/70 ${social.hoverColor} transition-colors`} />
                </div>
              </a>
            ))}
          </div>

          {/* Decorative dots */}
          <div className="flex items-center justify-center gap-2 mb-3 xxs:mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
          </div>

          <p className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-marble/30 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-accent-pink" /> by Silver Princess K
          </p>
          <p className="font-mono text-[7px] xxs:text-[8px] xs:text-[9px] sm:text-[10px] text-marble/20 mt-1">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}