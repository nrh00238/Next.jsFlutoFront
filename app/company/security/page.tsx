"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Cloud, Key, Database, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { companyData } from "@/lib/company-data";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";
import GlobalHero from "@/components/layout/GlobalHero";
import { Button } from "@/components/Button";

const getIcon = (name: string, className: string) => {
  switch(name) {
    case "lock": return <Lock className={className} />;
    case "cloud": return <Cloud className={className} />;
    case "key": return <Key className={className} />;
    case "database": return <Database className={className} />;
    default: return <Shield className={className} />;
  }
};

export default function SecurityPage() {
  const { security } = companyData;

  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen text-gray-900 dark:text-white">
      
      <GlobalHero 
        badgeText={security.hero.badge}
        badgeIcon={<Shield className="w-4 h-4" />}
        titleTop={security.hero.headingTop}
        titleGradient={security.hero.headingGradient}
        description={security.hero.subheading}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          {/* 🟢 FIX: Added the missing badge here before the heading */}
          <div className={`${UI.badge} mb-4`}><ShieldCheck className="w-4 h-4" /> Infrastructure</div>
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>Security Architecture</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">How we protect your operations at every layer.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {security.pillars.map((pillar, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-8 rounded-[2rem] bg-slate-50 dark:bg-[#0a0a0a] border border-gray-200/60 dark:border-white/5 shadow-sm group hover:border-indigo-500/30 transition-colors flex flex-col h-full">
              {getIcon(pillar.icon, "w-10 h-10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform")}
              <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed flex-1">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-200/60 dark:border-white/5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
            <div>
              <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4 text-left`}>Continuous Protection</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Security is not a checkbox; it's a continuous process of monitoring, updating, and improving.</p>
            </div>
            
            <div className="space-y-6">
              {security.features.map((feat, i) => (
                <motion.div variants={fadeUpVariant} key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feat.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUpVariant} className="pt-4">
              <Button href="/company/contact" variant="primary" size="md">
                Report a Security Issue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[400px] flex items-center justify-center bg-slate-50 dark:bg-white/[0.02] rounded-[2.5rem] border border-gray-200/60 dark:border-white/5 overflow-hidden">
            <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
            <div className="relative w-48 h-48 bg-white/80 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-full flex items-center justify-center backdrop-blur-xl shadow-2xl">
              <ShieldCheck className="w-20 h-20 text-indigo-600 dark:text-indigo-400" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}