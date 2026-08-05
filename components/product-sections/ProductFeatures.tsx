"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Filter, Zap, LayoutDashboard, Fingerprint, Box, Building2, Calculator, BrainCircuit, Target, Users, Calendar, Settings, Database } from "lucide-react";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";
import { FeatureData } from "@/lib/product-data";

const IconRenderer = ({ name }: { name: string }) => {
  const icons: Record<string, ReactNode> = {
    filter: <Filter />, zap: <Zap />, dashboard: <LayoutDashboard />, fingerprint: <Fingerprint />,
    box: <Box />, building: <Building2 />, calculator: <Calculator />, brain: <BrainCircuit />,
    target: <Target />, users: <Users />, calendar: <Calendar />, settings: <Settings />, database: <Database />
  };
  return icons[name] || <Zap />; 
};

export default function ProductFeatures({ heading, subheading, features }: { heading: string, subheading: string, features: FeatureData[] }) {
  return (
    <section className="py-24 sm:py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50/50 via-indigo-50/40 to-blue-50/50 dark:from-[#0a0518] dark:via-[#04030f] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-transparent blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>{heading}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">{subheading}</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className={`p-8 rounded-[2rem] bg-white/80 dark:bg-[#0A0A0A]/90 backdrop-blur-xl border border-gray-200/60 dark:border-white/5 shadow-sm group hover:shadow-lg transition-all ${feature.colSpan}`}>
              <div className="w-12 h-12 bg-indigo-50 dark:bg-[#151515] rounded-xl flex items-center justify-center border border-indigo-100/50 dark:border-white/10 mb-6 text-indigo-500 shadow-sm group-hover:scale-110 transition-transform">
                <IconRenderer name={feature.icon} />
              </div>
              <h3 className="text-xl font-bold text-indigo-950 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}