"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Briefcase, Calculator, HeadphonesIcon, Box, Building2, ArrowRight } from "lucide-react";
import { fadeUpVariant, staggerContainer, UI } from "@/lib/constants";
import { AppModuleData, TestimonialData } from "@/types/api";

const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    mail: <Mail className={className} />,
    briefcase: <Briefcase className={className} />,
    calculator: <Calculator className={className} />,
    headphones: <HeadphonesIcon className={className} />,
    box: <Box className={className} />,
    building: <Building2 className={className} />
  };
  return icons[name] || <Box className={className} />;
};

export function HomeModules({ modules }: { modules: AppModuleData[] }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-white/5 relative z-10">
      <div className="text-center mb-16">
        <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>Enterprise Modules</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Pick the apps you need, seamlessly integrated from day one.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod) => (
          <Link key={mod.id} href={mod.link}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-14 h-14 bg-white dark:bg-[#111] rounded-2xl flex items-center justify-center border border-gray-200/80 dark:border-white/10 shadow-sm group-hover:scale-110 transition-transform">
                  <DynamicIcon name={mod.iconName} className="w-6 h-6 text-indigo-500" />
                </div>
                <span className="px-3 py-1 bg-white dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 rounded-full border border-gray-200/50 dark:border-white/5">
                  {mod.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">{mod.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-6 flex-1 relative z-10">{mod.desc}</p>
              <div className="mt-auto flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors relative z-10">
                Explore {mod.name} <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomeTestimonials({ testimonials }: { testimonials: TestimonialData[] }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>Trusted by Leaders</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test) => (
          <motion.div key={test.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-8 rounded-[2rem] bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-lg flex flex-col">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">"{test.quote}"</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8 flex-1">{test.desc}</p>
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-white/5">
              <img src={test.avatar} alt={test.author} className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-white/10" />
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{test.author}</div>
                <div className="text-xs text-gray-500">{test.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}