"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Calculator, Zap, Heart, Calendar, Lock, Box, HeadphonesIcon, 
  Mail, LineChart, Code, Bot, Factory, Settings, Users, GraduationCap, 
  ChevronDown, ArrowRight, Briefcase, Building2
} from "lucide-react";
import { fadeUpVariant, staggerContainer, UI } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/Button";

const IconMap = ({ name, className }: { name: string, className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    shield: <ShieldCheck className={className} />,
    calculator: <Calculator className={className} />,
    zap: <Zap className={className} />,
    heart: <Heart className={className} />,
    calendar: <Calendar className={className} />,
    lock: <Lock className={className} />,
    box: <Box className={className} />,
    headphones: <HeadphonesIcon className={className} />,
    mail: <Mail className={className} />,
    chart: <LineChart className={className} />,
    code: <Code className={className} />,
    bot: <Bot className={className} />,
    factory: <Factory className={className} />,
    settings: <Settings className={className} />,
    users: <Users className={className} />,
    graduation: <GraduationCap className={className} />,
    briefcase: <Briefcase className={className} />,
  };
  return icons[name] || <Zap className={className} />;
};

export function IndustryClientHero({ badge, title, highlight, description }: any) {
  return (
    <section className="relative flex flex-col items-center pt-40 pb-24 px-4 sm:px-6 lg:px-8 w-full perspective-[2000px] overflow-hidden bg-gradient-to-br from-blue-100/60 via-sky-50/50 to-indigo-100/40 dark:from-[#03091e] dark:via-[#030303] dark:to-[#091738]">
      
      {/* Homepage Hero Aesthetic: Advanced Mesh Gradient & Grid Background */}
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
          {badge} Solutions
        </motion.div>

        <motion.h1 variants={fadeUpVariant} className={`${UI.heroHeading} ${UI.headingColor} mb-8 max-w-4xl`}>
          {title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">{highlight}</span>
        </motion.h1>

        <motion.p variants={fadeUpVariant} className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          {description}
        </motion.p>

        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Button href="/enterprise" variant="primary" size="md">
            Speak to our Experts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function IndustryClientStats({ stats }: { stats: any[] }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-10 relative z-20 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-8 rounded-[2rem] bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-xl text-center">
             <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400 mb-2">{stat.value}</div>
             <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function IndustryClientFeatures({ features }: { features: any[] }) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/[0.02] border border-gray-200/50 dark:border-white/5 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors group">
            <div className="w-14 h-14 bg-white dark:bg-[#111] rounded-2xl flex items-center justify-center border border-gray-200/80 dark:border-white/10 mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <IconMap name={feat.icon} className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feat.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function IndustryClientProducts({ products, badge }: { products: any[], badge: string }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 dark:border-white/5">
      <div className="text-center mb-16">
        <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>
          Recommended for {badge}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          The core Fluto modules most utilized by leaders in your sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <Link key={i} href={product.link}>
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUpVariant} 
              className="group p-8 rounded-[2rem] bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                <IconMap name={product.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 relative z-10">{product.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-8 relative z-10">{product.desc}</p>
              
              <div className="mt-auto flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors relative z-10">
                Explore Module <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function IndustryClientFAQ({ faqs }: { faqs: any[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className={`${UI.sectionHeading} ${UI.headingColor}`}>Industry FAQs</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200/80 dark:border-white/10 rounded-2xl bg-white dark:bg-[#0A0A0A] overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
            >
              <span className="font-bold text-gray-900 dark:text-white text-lg pr-4">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 shrink-0 text-indigo-500 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {openFaq === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}