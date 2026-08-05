"use client";

import { motion } from "framer-motion";
import { Rocket, Globe, Aperture, Box } from "lucide-react";
import { UI } from "@/lib/constants";

export default function TrustBanner() {
  return (
    <section className="py-24 sm:py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center dark:from-[#0a0518] dark:via-[#04030f] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-transparent blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
        >
          <div className="w-24 h-24 rounded-full border border-dashed border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center">
            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-500/20 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Rocket className="w-4 h-4 text-indigo-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute top-1/3 left-4 lg:left-12 hidden sm:block pointer-events-none"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-500 shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center">
            <Globe className="w-6 h-6 text-white opacity-90" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -15, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 right-4 lg:right-12 hidden sm:block pointer-events-none"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-bl from-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center">
            <Aperture className="w-5 h-5 text-white opacity-90" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-38 mb-24 text-center max-w-4xl relative z-10"
        >
          <h2 className={`${UI.sectionHeading} ${UI.headingColor}`}>
            The central nervous system for your entire business.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full rounded-[2.5rem] p-10 sm:p-16 relative overflow-hidden bg-white/80 dark:bg-[#0A0A0A]/90 backdrop-blur-xl border border-indigo-100 dark:border-white/10 shadow-xl"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[150%] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-200/40 dark:from-indigo-800/10 via-transparent to-transparent blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-200/40 dark:bg-purple-800/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <p className="text-sm font-bold text-gray-800 dark:text-gray-400 mb-10 text-center uppercase tracking-widest">
              Trusted by High-Growth Teams Worldwide
            </p>

            <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 text-gray-400 dark:text-gray-600 transition-all duration-500">
              <span className="text-2xl sm:text-3xl font-black tracking-tighter flex items-center gap-1 font-sans hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
                <span className="text-indigo-500">Z</span>illow
              </span>
              <span className="text-2xl sm:text-3xl font-black tracking-tight font-serif hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
                Medium
              </span>
              <span className="text-2xl sm:text-3xl font-bold flex items-center gap-2 font-sans tracking-tight hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
                <Box className="w-6 h-6 sm:w-8 sm:h-8" /> Dropbox
              </span>
              <span className="text-2xl sm:text-3xl font-bold tracking-tight font-sans hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
                HubSpot
              </span>
              <span className="text-2xl sm:text-3xl font-bold font-serif hover:text-gray-900 dark:hover:text-white transition-colors cursor-default">
                Quora
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}