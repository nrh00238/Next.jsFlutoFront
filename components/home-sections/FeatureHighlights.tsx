"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Users, LineChart, Smartphone, Monitor, Tablet, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { UI, fadeUpVariant, staggerContainer, customEase } from "@/lib/constants";

export default function FeatureHighlights() {
  return (
    <section className="py-24 sm:py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-purple-50/40 via-indigo-50/50 to-blue-50/40 dark:from-[#060312] dark:via-[#04030a] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="w-full max-w-7xl mx-auto relative z-10">

        {/* Feature Row 1: Simplify Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="order-2 lg:order-1">
            <motion.div variants={fadeUpVariant} className={`${UI.badge} mb-6`}>
              Orchestration
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className={`${UI.sectionHeading} ${UI.headingColor} mb-6`}>
              Orchestrate Workflows with Precision
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed mb-8">
              Automate the operational heavy lifting. Build custom logic, set intelligent routing rules, and keep your teams perfectly aligned without writing a single line of code. Move faster, together.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
              <Button href="/register" variant="primary" size="md">
                Explore Automations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="order-1 lg:order-2 relative w-full h-[450px] flex items-center justify-center lg:justify-end">
            <div className="absolute top-0 right-0 w-[80%] h-full bg-indigo-50/50 dark:bg-white/[0.02] rounded-[3rem] border border-indigo-100/50 dark:border-white/5 z-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-[3rem] opacity-50"></div>
            </div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="relative z-10 w-full max-w-[400px] bg-white dark:bg-[#0A0A0A] rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-white/10 p-6 sm:p-8 -ml-8 lg:ml-0 mt-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-indigo-950 dark:text-white">Performance by Device</h3>
                <div className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-1">Today <ChevronDown className="w-3 h-3" /></div>
              </div>

              <div className="flex items-center gap-8 mb-8">
                <div className="relative w-32 h-32 rounded-full flex items-center justify-center shadow-inner" style={{ background: 'conic-gradient(#6366f1 0% 50%, #1e1b4b 50% 65%, #c7d2fe 65% 100%)' }}>
                  <div className="absolute inset-2 bg-white dark:bg-[#0A0A0A] rounded-full flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">100%</span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Total Device</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-bold mb-1 uppercase tracking-wider"><Users className="w-4 h-4" /> Total User</div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">145,231K</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-full"><LineChart className="w-3 h-3" /> +13%</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 border border-gray-100 dark:border-white/5 text-center">
                  <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-gray-500 mb-1 uppercase"><div className="w-2 h-2 rounded-full bg-indigo-500"></div> 50k</div>
                  <div className="font-semibold text-xs text-gray-900 dark:text-white flex items-center justify-center gap-1"><Smartphone className="w-3 h-3" /> Phone</div>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 border border-gray-100 dark:border-white/5 text-center">
                  <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-gray-500 mb-1 uppercase"><div className="w-2 h-2 rounded-full bg-indigo-200"></div> 35k</div>
                  <div className="font-semibold text-xs text-gray-900 dark:text-white flex items-center justify-center gap-1"><Monitor className="w-3 h-3" /> Laptop</div>
                </div>
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3 border border-gray-100 dark:border-white/5 text-center">
                  <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-gray-500 mb-1 uppercase"><div className="w-2 h-2 rounded-full bg-indigo-950"></div> 15k</div>
                  <div className="font-semibold text-xs text-gray-900 dark:text-white flex items-center justify-center gap-1"><Tablet className="w-3 h-3" /> Tablet</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature Row 2: Analytics Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="relative w-full h-[450px] flex items-center justify-center lg:justify-start">
            <div className="absolute top-0 left-0 w-[80%] h-full bg-indigo-50/50 dark:bg-white/[0.02] rounded-[3rem] border border-indigo-100/50 dark:border-white/5 z-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-[3rem] opacity-50"></div>
            </div>

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} className="relative z-10 w-full max-w-[400px] bg-white dark:bg-[#0A0A0A] rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-white/10 p-6 sm:p-8 ml-8 lg:ml-0 mt-8">
              <h3 className="font-bold text-lg text-indigo-950 dark:text-white mb-8">Overview Income</h3>

              <div className="space-y-6 relative">
                <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20 dark:opacity-10 px-2 pt-2 pb-6">
                  <div className="border-l-2 border-dotted border-gray-400 h-full"></div>
                  <div className="border-l-2 border-dotted border-gray-400 h-full"></div>
                  <div className="border-l-2 border-dotted border-gray-400 h-full"></div>
                  <div className="border-l-2 border-dotted border-gray-400 h-full"></div>
                </div>

                {[
                  { width: "52%", label: "52%", value: "$56,7k", bg: "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900" },
                  { width: "71%", label: "71%", value: "$123,456k", bg: "bg-indigo-500 text-white" },
                  { width: "37%", label: "37%", value: "$126.5k", bg: "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900" },
                  { width: "52%", label: "52%", value: "$56,7k", bg: "bg-indigo-500 text-white" }
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-3 relative z-10">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: bar.width }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} className={`h-8 rounded-md flex items-center px-3 text-xs font-bold ${bar.bg}`}>
                      {bar.label}
                    </motion.div>
                    <div className="text-xs font-bold text-gray-600 dark:text-gray-300 bg-white dark:bg-[#111] shadow-sm border border-gray-100 dark:border-white/5 px-2 py-1 rounded">
                      {bar.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-6 px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.div variants={fadeUpVariant} className={`${UI.badge} mb-6`}>
              Intelligence
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className={`${UI.sectionHeading} ${UI.headingColor} mb-6`}>
              Turn Raw Data into Real-Time Decisions
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed mb-8">
              Stop guessing. Fluto’s native analytics engine connects your operations directly to your bottom line. Visualize bottlenecks, track performance, and generate beautiful reports in seconds.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="space-y-4 mb-8">
              {[
                "Connect operations directly to revenue",
                "Identify execution bottlenecks in real-time",
                "Zero-code custom dashboard builder"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
              <Button href="/fluto-one" variant="primary" size="md">
                Discover Analytics <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}