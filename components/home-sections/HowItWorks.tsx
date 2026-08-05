"use client";

import { motion } from "framer-motion";
import { UserPlus, Asterisk, Rocket } from "lucide-react";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="py-24 mt-12 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/40 dark:from-[#04030f] dark:via-[#080414] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl rounded-[3rem] p-8 sm:p-16 border border-indigo-100 dark:border-white/5 relative overflow-hidden shadow-xl">

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_100%] pointer-events-none"></div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative z-10">
            <div className="text-center mb-16">
              <motion.div variants={fadeUpVariant} className={`${UI.badge} mb-4`}>
                Zero Friction
              </motion.div>
              <motion.h2 variants={fadeUpVariant} className={`${UI.sectionHeading} ${UI.headingColor}`}>
                From Signup to Scale in Minutes
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <motion.div variants={fadeUpVariant} className="bg-slate-50 dark:bg-[#111] p-10 rounded-3xl shadow-md border border-indigo-100/60 dark:border-white/5 text-center flex flex-col items-center h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                  <UserPlus className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-indigo-950 dark:text-white mb-3">Deploy your workspace</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                  Spin up your digital headquarters instantly and invite your entire team with zero friction.
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="bg-indigo-950 dark:bg-white p-10 rounded-3xl shadow-xl border border-indigo-900 dark:border-white/20 text-center flex flex-col items-center h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/10 dark:bg-black/5 flex items-center justify-center mb-6">
                  <Asterisk className="w-7 h-7 text-white dark:text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-white dark:text-indigo-950 mb-3">Connect your stack</h3>
                <p className="text-indigo-200 dark:text-gray-600 text-sm font-medium leading-relaxed">
                  Integrate your favorite tools and sync data from your existing software with zero downtime.
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="bg-slate-50 dark:bg-[#111] p-10 rounded-3xl shadow-md border border-indigo-100/60 dark:border-white/5 text-center flex flex-col items-center h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-indigo-950 dark:text-white mb-3">Automate everything</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                  Put your daily administrative operations on autopilot and watch your operational capacity scale.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}