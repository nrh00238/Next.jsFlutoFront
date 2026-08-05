"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Workflow, Cpu, Sparkles, LineChart, BarChart, ArrowRight, CheckCircle2, Database, RefreshCw, Box } from "lucide-react";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";

export default function AiFeatures() {
  return (
    <section className="py-24 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-slate-50/60 dark:from-[#05030f] dark:via-[#0b061a] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="w-full max-w-[90rem] mx-auto relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div variants={fadeUpVariant} className={`${UI.badge} mb-6`}>
            <Bot className="w-3.5 h-3.5" /> Native AI
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className={`${UI.sectionHeading} ${UI.headingColor} mb-6`}>
            Intelligence woven into every workflow.
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <motion.div variants={fadeUpVariant} className="bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-md rounded-[2rem] border border-indigo-100 dark:border-white/5 p-8 flex flex-col items-center text-center h-full shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="h-32 w-full flex flex-col items-center justify-center relative mb-4">
                <div className="flex -space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 mix-blend-multiply dark:mix-blend-screen"></div>
                  <div className="w-12 h-12 rounded-full bg-indigo-500/40 mix-blend-multiply dark:mix-blend-screen"></div>
                </div>
                <div className="flex gap-4 text-gray-400">
                  <BrainCircuit className="w-6 h-6" />
                  <Workflow className="w-6 h-6" />
                  <Cpu className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-bold text-lg text-indigo-950 dark:text-white mt-auto">AI-Powered Automation</h3>
              <p className="text-sm text-gray-500 mt-2 font-medium">Accelerate daily output</p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-md rounded-[2rem] border border-indigo-100 dark:border-white/5 p-8 flex flex-col items-center text-center h-full shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="h-32 w-full flex items-center justify-center relative mb-4">
                <div className="absolute w-24 h-24 border border-indigo-200 dark:border-white/10 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
                <div className="w-8 h-8 bg-indigo-600 rounded-full z-10 flex items-center justify-center shadow-lg shadow-indigo-500/30"><Sparkles className="w-4 h-4 text-white" /></div>
                <div className="absolute top-6 left-6 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              </div>
              <h3 className="font-bold text-lg text-indigo-950 dark:text-white mt-auto">Cutting-edge models</h3>
              <p className="text-sm text-gray-500 mt-2 font-medium">Built for enterprise scale</p>
            </motion.div>
          </div>

          {/* Center Column (Large Card) */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-2 bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-md rounded-[2rem] border border-indigo-100 dark:border-white/5 overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col group relative">
            <div className="bg-indigo-50/50 dark:bg-white/[0.02] p-6 lg:p-10 flex justify-center items-center border-b border-indigo-100 dark:border-white/5 relative min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-28 h-28 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-4 opacity-40 blur-[2px]">
                <div className="text-[10px] text-gray-400 mb-3 font-semibold uppercase tracking-wider">Monthly</div>
                <LineChart className="w-full h-10 text-indigo-400" />
              </div>
              <div className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-28 h-28 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-4 opacity-40 blur-[2px]">
                <div className="text-[10px] text-gray-400 mb-3 font-semibold uppercase tracking-wider">Yearly</div>
                <BarChart className="w-full h-10 text-indigo-400" />
              </div>

              <div className="relative z-10 bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 w-full max-w-[280px] group-hover:-translate-y-2 transition-transform duration-500">
                <div className="text-center mb-6">
                  <div className="text-2xl font-black text-gray-900 dark:text-white flex items-center justify-center gap-1">2h 20m <ArrowRight className="w-4 h-4 text-green-500 -rotate-45" /></div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 font-bold">Average time saved per day</div>
                </div>
                <div className="flex items-end justify-between h-24 gap-2">
                  {[30, 45, 80, 100, 60, 40, 70].map((h, i) => (
                    <div key={i} className="w-full bg-indigo-50 dark:bg-indigo-500/10 rounded-t-sm" style={{ height: `${h}%` }}>
                      <motion.div initial={{ height: 0 }} whileInView={{ height: i === 3 ? '100%' : '60%' }} transition={{ duration: 1, delay: 0.5 }} className="w-full bg-indigo-500 rounded-t-sm"></motion.div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-[9px] text-gray-400 font-bold uppercase">
                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>Sun</span>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-10 flex flex-col justify-center flex-1">
              <h3 className="text-2xl font-black text-indigo-950 dark:text-white mb-3">AI-Powered Conversations</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                Deliver human-like, intelligent responses using advanced natural language processing. Engage users 24/7 with personalized, context-aware support workflows.
              </p>

              <h4 className="text-base font-bold text-indigo-950 dark:text-white mb-2">Real-Time Analytics</h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 font-medium">
                Track performance, user interactions, and engagement insights to continuously improve your conversational strategy.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Drag-and-Drop Builder
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Multi-Channel Support
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <motion.div variants={fadeUpVariant} className="bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-md rounded-[2rem] border border-indigo-100 dark:border-white/5 p-8 flex flex-col justify-between h-full shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="h-32 w-full flex flex-col gap-3 justify-center mb-6">
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center shrink-0"><Bot className="w-3.5 h-3.5 text-indigo-600" /></div>
                  <div className="bg-indigo-50/60 dark:bg-white/5 text-[11px] font-medium py-2 px-3 rounded-2xl rounded-bl-none text-gray-700 dark:text-gray-300 border border-indigo-100 dark:border-white/5 shadow-sm">Hello, how are you?</div>
                </div>
                <div className="flex items-end gap-2 justify-end">
                  <div className="bg-indigo-600 text-[11px] font-medium text-white py-2 px-3 rounded-2xl rounded-br-none shadow-sm">I need some help</div>
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 shrink-0"></div>
                </div>
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center shrink-0"><Bot className="w-3.5 h-3.5 text-indigo-600" /></div>
                  <div className="bg-indigo-50/60 dark:bg-white/5 text-[11px] font-medium py-2 px-3 rounded-2xl rounded-bl-none text-gray-700 dark:text-gray-300 border border-indigo-100 dark:border-white/5 shadow-sm">Sure, I can do that.</div>
                </div>
              </div>
              <h3 className="font-bold text-lg text-indigo-950 dark:text-white mt-auto">AI Chatbots</h3>
              <p className="text-sm text-gray-500 mt-2 font-medium">Included free forever.</p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-md rounded-[2rem] border border-indigo-100 dark:border-white/5 p-8 flex flex-col items-center text-center h-full shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="h-32 w-full flex items-center justify-center relative mb-4">
                <div className="absolute w-24 h-24 border border-indigo-100 dark:border-white/10 rounded-full"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-[#111] z-10 shadow-sm">
                    <Database className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <RefreshCw className="w-4 h-4 text-indigo-500 animate-[spin_3s_linear_infinite]" />
                  <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-[#111] z-10 shadow-sm">
                    <Box className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg text-indigo-950 dark:text-white mt-auto">Auto backup & recovery</h3>
              <p className="text-sm text-gray-500 mt-2 font-medium">Encrypted daily backups</p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}