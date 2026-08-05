"use client";

import React from "react";
import { motion } from "framer-motion";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";

interface GlobalHeroProps {
  badgeText: string;
  badgeIcon?: React.ReactNode;
  titleTop: string;
  titleGradient: string;
  description: string;
  children?: React.ReactNode; 
}

export default function GlobalHero({ badgeText, badgeIcon, titleTop, titleGradient, description, children }: GlobalHeroProps) {
  return (
    <section className="relative flex flex-col items-center pt-40 pb-24 px-4 sm:px-6 lg:px-8 w-full perspective-[2000px] overflow-hidden bg-gradient-to-br from-blue-100/60 via-sky-50/50 to-indigo-100/40 dark:from-[#03091e] dark:via-[#030303] dark:to-[#091738]">
      
      {/* LOCKED ADVANCED BACKGROUND AESTHETICS */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1600px] h-[900px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/40 via-sky-600/30 to-transparent dark:from-blue-600/40 dark:via-sky-900/30 blur-[160px] pointer-events-none transition-all animate-[pulse_5s_ease-in-out_infinite] z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-500/25 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-[bounce_7s_ease-in-out_infinite] z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-sky-400/20 dark:bg-sky-600/20 rounded-full blur-[140px] pointer-events-none animate-[pulse_7s_ease-in-out_infinite] z-0"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.25] dark:opacity-[0.15] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div variants={fadeUpVariant} className={`${UI.badge} mb-8`}>
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 shadow-[0_0_10px_#6366f1]"></span>
          </span>
          {badgeIcon && <span className="mr-1">{badgeIcon}</span>}
          {badgeText}
        </motion.div>

        <motion.h1 variants={fadeUpVariant} className={`${UI.heroHeading} ${UI.headingColor} mb-8 max-w-4xl`}>
          {titleTop} <br className="hidden sm:block" />
          {/* 🟢 RESTORED INDIGO/PURPLE GRADIENT FOR HEADING */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            {titleGradient}
          </span>
        </motion.h1>

        <motion.p variants={fadeUpVariant} className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          {description}
        </motion.p>

        <motion.div variants={fadeUpVariant} className="w-full flex justify-center">
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}