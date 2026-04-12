"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@silverprincessk.dev", color: "accent-cyan" },
    { icon: MapPin, label: "Location", value: "Digital Realm", color: "accent-pink" },
    { icon: Clock, label: "Response", value: "Within 24 hours", color: "accent-purple" },
  ];

  return (
    <section id="oracle" className="py-12 xxs:py-16 xs:py-20 sm:py-24 md:py-32 px-3 xxs:px-4 xs:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
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
          <div className="flex items-center justify-center gap-1 xxs:gap-1.5 xs:gap-2 mb-2 xxs:mb-3 xs:mb-4">
            <Sparkles className="w-3 h-3 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent-cyan" />
            <p className="font-mono text-[9px] xxs:text-[10px] xs:text-xs sm:text-sm text-gold/80 tracking-[0.15em] xxs:tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] uppercase">
              Divine Communication
            </p>
            <Sparkles className="w-3 h-3 xxs:w-3.5 xxs:h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-accent-pink" />
          </div>
          <h2 className="font-display text-xl xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-marble mb-3 xxs:mb-4 xs:mb-5 sm:mb-6">
            <span className="bg-gradient-to-r from-accent-cyan via-gold to-accent-pink bg-clip-text text-transparent">
              Consult the Oracle
            </span>
          </h2>
          <p className="font-mono text-[10px] xxs:text-xs xs:text-sm text-marble/60 max-w-xl mx-auto px-2">
            Seek wisdom, propose collaboration, or simply share your thoughts. 
            The Oracle awaits your message.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 xs:grid-cols-3 gap-3 xxs:gap-4 mb-6 xxs:mb-8 xs:mb-10"
        >
          {contactInfo.map((info, index) => (
            <div
              key={info.label}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                info.color === 'accent-cyan' ? 'from-accent-cyan to-accent-emerald' :
                info.color === 'accent-pink' ? 'from-accent-pink to-accent-purple' :
                'from-accent-purple to-gold'
              } opacity-20 group-hover:opacity-40 blur transition-opacity duration-500 rounded-lg xxs:rounded-xl`} />
              <div className="relative bg-obsidian/80 backdrop-blur-sm rounded-lg xxs:rounded-xl p-3 xxs:p-4 border border-marble/10 group-hover:border-gold/20 transition-all duration-500 text-center">
                <info.icon className={`w-4 h-4 xxs:w-5 xxs:h-5 mx-auto mb-1.5 xxs:mb-2 text-${info.color}`} />
                <p className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] text-marble/50 uppercase tracking-wider mb-0.5">
                  {info.label}
                </p>
                <p className="font-mono text-[10px] xxs:text-xs xs:text-sm text-marble/80">
                  {info.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan via-gold to-accent-pink opacity-30 group-hover:opacity-50 blur transition-opacity duration-500 rounded-lg xxs:rounded-xl xs:rounded-2xl" />
          <div className="relative bg-obsidian/90 backdrop-blur-sm rounded-lg xxs:rounded-xl xs:rounded-2xl p-4 xxs:p-5 xs:p-6 sm:p-8 md:p-10 border border-gold/10 group-hover:border-gold/20 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-3 xxs:space-y-4 xs:space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xxs:gap-4 xs:gap-5 sm:gap-6">
                {/* Name Input */}
                <div className="space-y-1 xxs:space-y-1.5 xs:space-y-2">
                  <label className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-marble/60 uppercase tracking-wider flex items-center gap-1 xxs:gap-1.5 xs:gap-2">
                    <span className="text-accent-cyan">I.</span>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="oracle-input w-full px-2.5 xxs:px-3 xs:px-4 py-2 xxs:py-2.5 xs:py-3 rounded-md xxs:rounded-lg text-xs xxs:text-sm xs:text-base bg-obsidian-light/50 border-accent-cyan/30 focus:border-accent-cyan"
                    placeholder="Enter your name..."
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1 xxs:space-y-1.5 xs:space-y-2">
                  <label className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-marble/60 uppercase tracking-wider flex items-center gap-1 xxs:gap-1.5 xs:gap-2">
                    <span className="text-accent-pink">II.</span>
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="oracle-input w-full px-2.5 xxs:px-3 xs:px-4 py-2 xxs:py-2.5 xs:py-3 rounded-md xxs:rounded-lg text-xs xxs:text-sm xs:text-base bg-obsidian-light/50 border-accent-pink/30 focus:border-accent-pink"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-1 xxs:space-y-1.5 xs:space-y-2">
                <label className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-marble/60 uppercase tracking-wider flex items-center gap-1 xxs:gap-1.5 xs:gap-2">
                  <span className="text-accent-purple">III.</span>
                  Your Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="oracle-input w-full px-2.5 xxs:px-3 xs:px-4 py-2 xxs:py-2.5 xs:py-3 rounded-md xxs:rounded-lg resize-none text-xs xxs:text-sm xs:text-base bg-obsidian-light/50 border-accent-purple/30 focus:border-accent-purple"
                  placeholder="Speak your truth..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 xxs:py-4 xs:py-4 sm:py-4 rounded-md xxs:rounded-lg font-mono text-[10px] xxs:text-xs xs:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 xxs:gap-2 xs:gap-3 min-h-[44px] ${
                  isSubmitted
                    ? "bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/50"
                    : "bg-gradient-to-r from-accent-cyan via-gold to-accent-pink text-obsidian hover:shadow-lg hover:shadow-gold/30"
                }`}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-3.5 h-3.5 xxs:w-4 xxs:h-4 xs:w-5 xs:h-5" />
                  </motion.div>
                ) : isSubmitted ? (
                  <>
                    <MessageCircle className="w-3.5 h-3.5 xxs:w-4 xxs:h-4 xs:w-5 xs:h-5" />
                    MESSAGE RECEIVED
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 xxs:w-4 xxs:h-4 xs:w-5 xs:h-5" />
                    SEND TO THE ORACLE
                  </>
                )}
              </motion.button>
            </form>

            {/* Decorative Elements */}
            <div className="mt-4 xxs:mt-5 xs:mt-6 sm:mt-8 pt-4 xxs:pt-5 xs:pt-6 sm:pt-8 border-t border-marble/10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
              </div>
              <p className="font-mono text-[8px] xxs:text-[9px] xs:text-[10px] sm:text-xs text-marble/40 text-center">
                Or reach out directly at{" "}
                <a
                  href="mailto:hello@silverprincessk.dev"
                  className="text-accent-cyan hover:text-gold transition-colors"
                >
                  hello@silverprincessk.dev
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}