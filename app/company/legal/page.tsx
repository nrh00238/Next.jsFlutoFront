"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server } from "lucide-react";
import Footer from "@/components/Footer";
import { companyData } from "@/lib/company-data";
import GlobalHero from "@/components/layout/GlobalHero";

const getBadgeIcon = (name: string, className: string) => {
  if (name === "server") return <Server className={className} />;
  if (name === "lock") return <Lock className={className} />;
  return <ShieldCheck className={className} />;
};

export default function LegalPage() {
  const { legal } = companyData;

  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen text-gray-900 dark:text-gray-100">
      
      <GlobalHero 
        badgeText={legal.hero.badge}
        badgeIcon={<ShieldCheck className="w-4 h-4" />}
        titleTop={legal.hero.headingTop}
        titleGradient={legal.hero.headingGradient}
        description={legal.hero.subheading}
      >
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {legal.badges.map((badge, i) => (
            <span key={i} className="px-5 py-2.5 rounded-xl bg-white/80 dark:bg-white/[0.05] backdrop-blur-xl border border-indigo-100 dark:border-white/10 text-sm font-bold flex items-center gap-2 shadow-sm">
              {getBadgeIcon(badge.icon, "w-4 h-4 text-indigo-600 dark:text-indigo-400")} {badge.label}
            </span>
          ))}
        </div>
      </GlobalHero>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 relative items-start z-10">
        
        <aside className="w-full md:w-64 shrink-0 md:sticky top-32 hidden md:block">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0a0a0a] border border-gray-200/60 dark:border-white/5">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contents</h4>
            <nav className="space-y-3">
              {legal.sections.map(sec => (
                <a key={sec.id} href={`#${sec.id}`} className="block text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="flex-1 prose prose-indigo dark:prose-invert max-w-none">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-16">
            {legal.sections.map((sec) => (
              <div key={sec.id} id={sec.id} className="scroll-mt-32">
                <h2 className="text-3xl font-black mb-6 border-b border-gray-200 dark:border-white/10 pb-4">{sec.title}</h2>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300 font-medium">{sec.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}