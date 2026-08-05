"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Layers, Cpu } from "lucide-react";
import Link from "next/link";
import { UI, fadeUpVariant, staggerContainer, customEase } from "@/lib/constants";
import { HomeHeroData } from "@/types/api";
import { Button } from "@/components/Button";

export default function HeroSection({ heroData }: { heroData: HomeHeroData }) {
  return (
    <section className="relative flex flex-col items-center pt-40 pb-24 px-4 sm:px-6 lg:px-8 w-full perspective-[2000px] overflow-hidden bg-gradient-to-br from-blue-100/60 via-sky-50/50 to-indigo-100/40 dark:from-[#03091e] dark:via-[#030303] dark:to-[#091738]">

      {/* LOCKED ADVANCED BACKGROUND AESTHETICS */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1600px] h-[900px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/40 via-sky-600/30 to-transparent dark:from-blue-600/40 dark:via-sky-900/30 blur-[160px] pointer-events-none transition-all animate-[pulse_5s_ease-in-out_infinite] z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-500/25 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-[bounce_7s_ease-in-out_infinite] z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-sky-400/20 dark:bg-sky-600/20 rounded-full blur-[140px] pointer-events-none animate-[pulse_7s_ease-in-out_infinite] z-0"></div>

      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.25] dark:opacity-[0.15] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">

        <motion.div variants={fadeUpVariant} whileHover={{ scale: 1.05 }} className={`${UI.badge} mb-8 cursor-pointer group`}>
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 shadow-[0_0_10px_#6366f1]"></span>
          </span>
          {heroData.badgeText}
          <ArrowRight className="w-3.5 h-3.5 ml-1 text-indigo-500 group-hover:translate-x-1 transition-transform" />
        </motion.div>

        <motion.h1 variants={fadeUpVariant} className={`${UI.heroHeading} ${UI.headingColor} mb-8`}>
          {heroData.headingTop} <br className="hidden sm:inline" />
          {/* 🟢 RESTORED INDIGO/PURPLE GRADIENT FOR HEADING */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            {heroData.headingGradient}
          </span>
        </motion.h1>

        <motion.p variants={fadeUpVariant} className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          {heroData.subheading}
        </motion.p>

        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Button href={heroData.primaryCta.link} variant="primary" size="md">
            {heroData.primaryCta.label} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button href={heroData.secondaryCta.link} variant="secondary" size="md">
            <Sparkles className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" /> {heroData.secondaryCta.label}
          </Button>
        </motion.div>
      </motion.div>

      {/* 3D INTERACTIVE DASHBOARD WITH ANIMATED CHARTS */}
      <motion.div
        initial={{ opacity: 0, y: 120, rotateX: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: customEase }}
        className="relative z-10 mt-24 max-w-6xl w-full mx-auto px-4 perspective-[2000px]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent blur-[100px] pointer-events-none"></div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="rounded-[2rem] p-2 bg-gradient-to-b from-indigo-500/30 to-purple-500/10 dark:from-white/20 dark:to-transparent shadow-[0_40px_100px_rgba(79,70,229,0.2)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <div className="rounded-[1.5rem] bg-white/90 dark:bg-[#0A0A0A]/90 border border-indigo-200/50 dark:border-white/15 overflow-hidden relative backdrop-blur-2xl">
            <div className="bg-indigo-50/40 dark:bg-[#0F0F0F] px-4 py-3 flex items-center justify-between border-b border-indigo-100/50 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="text-[11px] font-mono text-gray-500 bg-white dark:bg-black px-4 py-1.5 rounded-md border border-gray-200 dark:border-white/5 shadow-sm flex items-center gap-2">
                <Activity className="w-3 h-3 text-indigo-500" /> account.fluto.com/workspace/dashboard/
              </div>
              <div className="w-12"></div>
            </div>

            <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-indigo-50/30 dark:bg-white/[0.02] border border-indigo-100/60 dark:border-white/5 shadow-inner">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Total Revenue</div>
                    <div className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">$1,284,500</div>
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold rounded-full">+24.5%</div>
                </div>

                <div className="flex items-end gap-2 sm:gap-4 h-32 border-b border-gray-200 dark:border-white/10 pb-1">
                  {[40, 65, 45, 90, 75, 100, 85].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: customEase }}
                      className="w-full bg-indigo-500/20 dark:bg-indigo-500/30 rounded-t-sm border-t-2 border-indigo-500 relative group"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${height}k
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="p-6 rounded-2xl bg-indigo-50/30 dark:bg-white/[0.02] border border-indigo-100/60 dark:border-white/5 h-full flex flex-col justify-center">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2"><Layers className="w-4 h-4" /> Active Apps</div>
                  <div className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">6<span className="text-lg text-gray-400 font-medium">/6</span></div>
                  <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 1 }} className="bg-indigo-500 h-full rounded-full"></motion.div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-indigo-50/30 dark:bg-white/[0.02] border border-indigo-100/60 dark:border-white/5 h-full flex flex-col justify-center">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2"><Cpu className="w-4 h-4" /> System Health</div>
                  <div className="text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-2">99.9%</div>
                  <div className="text-xs font-bold text-green-500 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Operational</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}