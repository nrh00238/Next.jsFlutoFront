"use client";

import { motion } from "framer-motion";
import { Sparkles, Database, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";

export default function FlutoOnePitch() {
  return (
    <section className="relative w-full py-32 lg:py-40 bg-gradient-to-br from-[#1B0B3B] via-[#110629] to-[#05010e] overflow-hidden border-y border-[#2A1351]/50">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8155FF]/20 via-indigo-600/10 to-transparent pointer-events-none translate-x-1/3 -translate-y-1/3 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6B33FF]/15 via-transparent to-transparent pointer-events-none -translate-x-1/3 translate-y-1/3 blur-[100px]"></div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-7">
            <motion.div variants={fadeUpVariant} className={`${UI.badgeDark} mb-8`}>
              <Sparkles className="w-3.5 h-3.5" /> THE ULTIMATE ADVANTAGE
            </motion.div>

            <motion.h2 variants={fadeUpVariant} className={`${UI.sectionHeading} ${UI.darkSectionColor} mb-8`}>
              Fluto One. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Infinite operational power.
              </span>
            </motion.h2>

            <motion.p variants={fadeUpVariant} className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed mb-10 max-w-2xl">
              Why pay for scattered subscriptions and unpredictable pricing? Unlock the full suite of <strong>Fluto apps</strong>, enterprise-grade security, and unlimited workflows under one highly predictable plan.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#180A33] border border-[#2A1351] hover:bg-[#200E40] transition-colors shadow-sm">
                <Database className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold text-sm mb-1">Unified Data Core</div>
                  <div className="text-xs text-gray-400 leading-relaxed">Zero data silos between sales, finance, & support workflows.</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#180A33] border border-[#2A1351] hover:bg-[#200E40] transition-colors shadow-sm">
                <Cpu className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold text-sm mb-1">Single Sign-On (SSO)</div>
                  <div className="text-xs text-gray-400 leading-relaxed">Enterprise-grade security across all company tools & apps.</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
              <Button href="/fluto-one" variant="primary" size="md">
                Upgrade to Fluto One <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/pricing" variant="secondary" size="md">
                <Sparkles className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" /> View Transparent Pricing
              </Button>
            </motion.div>
          </div>

          <motion.div variants={fadeUpVariant} whileHover={{ scale: 1.02 }} className="lg:col-span-5 bg-[#160833] border border-[#2A1351] rounded-[2rem] p-8 sm:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8155FF]/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <div className="text-[11px] font-bold text-[#8155FF] uppercase tracking-widest mb-8">Included in Fluto One</div>
              
              <div className="space-y-5 mb-10">
                {[
                  "All 6 Enterprise Apps Included", 
                  "Unified Admin & Permission Console", 
                  "Advanced AI Automation Engine", 
                  "Priority 24/7 Enterprise Support",
                  "Custom Domain & White-labeling"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-[#8155FF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-[#0D041C] border border-[#200E40] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-inner">
                <div>
                  <div className="text-[10px] font-bold text-[#8155FF] uppercase tracking-wider mb-1">Flat Per-User Rate</div>
                  <div className="text-3xl font-bold text-white">$39<span className="text-sm font-medium text-gray-400">/user/mo</span></div>
                </div>

                <Button href="/pricing" variant="primary" size="md">
                  View Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}