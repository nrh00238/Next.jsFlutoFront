"use client";

import { motion } from "framer-motion";
import { Globe, Users, Zap, Shield, Target, Lightbulb } from "lucide-react";
import Footer from "@/components/Footer";
import { companyData } from "@/lib/company-data";
import { UI, fadeUpVariant } from "@/lib/constants";
import GlobalHero from "@/components/layout/GlobalHero";

const getIcon = (name: string, className: string) => {
  switch(name) {
    case "target": return <Target className={className} />;
    case "shield": return <Shield className={className} />;
    case "zap": return <Zap className={className} />;
    case "lightbulb": return <Lightbulb className={className} />;
    default: return <Globe className={className} />;
  }
};

export default function AboutPage() {
  const { about } = companyData;

  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen text-gray-900 dark:text-white">
      
      <GlobalHero 
        badgeText={about.hero.badge}
        badgeIcon={<Globe className="w-4 h-4" />}
        titleTop={about.hero.headingTop}
        titleGradient={about.hero.headingGradient}
        description={about.hero.subheading}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
          {about.metrics.map((metric, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.02] border border-indigo-100 dark:border-white/5 backdrop-blur-xl shadow-lg">
              <div className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">{metric.value}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>
      </GlobalHero>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className={`${UI.badge} mb-4`}><Target className="w-4 h-4" /> Core Values</div>
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>The Pillars of Fluto</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">The core values driving our engineering and culture.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.values.map((val, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className={`${val.colSpan} p-8 rounded-[2rem] bg-slate-50 dark:bg-[#0a0a0a] border border-gray-200/60 dark:border-white/5 shadow-sm group hover:border-indigo-500/30 transition-colors`}>
              {getIcon(val.icon, "w-10 h-10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform")}
              <h3 className="text-2xl font-bold mb-3">{val.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/60 dark:border-white/5 relative z-10">
        <div className="mb-16 text-center">
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>Leadership Team</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Architects of the Fluto ecosystem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.leaders.map((leader, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="group relative rounded-3xl overflow-hidden bg-slate-50 dark:bg-[#0a0a0a] border border-gray-200/60 dark:border-white/5">
              <div className="aspect-[4/3] bg-gray-200 dark:bg-white/5 relative overflow-hidden flex items-center justify-center text-gray-400">
                <Users className="w-16 h-16 opacity-50 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <div className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">{leader.role}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{leader.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}