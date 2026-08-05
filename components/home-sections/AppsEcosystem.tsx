"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import { UI, fadeUpVariant, staggerContainer, apps } from "@/lib/constants";

export default function AppsEcosystem() {
  return (
    <section id="apps" className="py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-purple-50/40 to-slate-50/50 dark:from-[#070316] dark:via-[#04030a] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div variants={fadeUpVariant}>
            <div className={`${UI.badge} mb-6`}>
              <Layers className="w-3.5 h-3.5 text-indigo-500" /> World-Class Ecosystem
            </div>
            <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-6`}>
              World-Class Apps. <br />One Seamless Ecosystem.
            </h2>
          </motion.div>
          <motion.p variants={fadeUpVariant} className="text-gray-500 dark:text-gray-400 max-w-md text-base font-medium leading-relaxed">
            Everything you need to operate, manage, and scale—natively connected to eliminate silos and accelerate output.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariant} 
              whileHover={{ y: -5, scale: 1.01 }} 
              className="relative rounded-3xl bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/5 overflow-hidden group transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] cursor-pointer"
            >
              <Link href={app.link} className="relative z-10 flex flex-col justify-between h-full p-8 w-full">
                
                {/* Visual hover effect moved behind the link context securely */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={app.iconbg + " w-14 h-14 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-white/5 group-hover:bg-indigo-50 dark:group-hover:border-indigo-500/30 transition-colors shadow-inner"}>
                      {app.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/5">
                      {app.badge}
                    </span>
                  </div>
                  <div className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-2">{app.tagline}</div>
                  <h3 className="text-2xl font-bold text-indigo-950 dark:text-white mb-3 tracking-tight">{app.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 font-medium leading-relaxed">{app.desc}</p>
                </div>

                <div className="relative z-10 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between mt-auto">
                  <div className="text-xs font-bold text-gray-900 dark:text-white flex items-center gap-1 group-hover:text-indigo-500 transition-colors">
                    Explore app <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}