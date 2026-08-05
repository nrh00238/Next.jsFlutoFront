"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { 
  Briefcase, Mail, Box, Calculator, Building2, 
  ArrowRight, Zap, CheckCircle2, LayoutGrid, Users, 
  BarChart3, Activity, ShieldCheck, PieChart
} from "lucide-react";

// --- STRICT TYPES ---
interface ShowcaseProduct {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
  metrics: string[];
  mockup: React.ReactNode;
}

// --- PRODUCT DATA & HIGH-FIDELITY CODED MOCKUPS ---
const products: ShowcaseProduct[] = [
  {
    id: "campaigns",
    title: "Fluto Campaigns",
    badge: "Marketing",
    description: "AI-optimized email marketing that converts. Build, design, and send stunning campaigns with intelligent behavior tracking.",
    icon: Mail,
    color: "from-blue-500 to-indigo-500",
    glowColor: "bg-blue-500",
    metrics: ["10M+ Emails Daily", "99.8% Delivery"],
    mockup: (
      <div className="flex flex-col gap-5 h-full justify-center">
        <div className="flex justify-between items-center mb-2">
          <div>
            <div className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">48.2%</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Avg Open Rate</div>
          </div>
          <div className="px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-500/20">
            +12.4% MoM
          </div>
        </div>
        <div className="space-y-4">
          {[
            { name: "Q3 Newsletter", open: 68, click: 24 },
            { name: "Product Update 2.0", open: 82, click: 45 },
            { name: "Churn Recovery", open: 34, click: 8 },
          ].map((camp, i) => (
            <div key={i} className="space-y-2 p-3 rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 shadow-sm">
              <div className="flex justify-between text-xs font-bold text-gray-700 dark:text-gray-300">
                <span>{camp.name}</span>
                <span className="text-blue-500">{camp.open}% Opened</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden flex">
                <motion.div initial={{ width: 0 }} animate={{ width: `${camp.open}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="h-full bg-blue-500" />
                <motion.div initial={{ width: 0 }} animate={{ width: `${camp.click}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="h-full bg-indigo-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "crm",
    title: "Fluto CRM",
    badge: "Sales",
    description: "Turn relationships into revenue instantly. Manage sales pipelines, track leads in real-time, and close enterprise deals faster.",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-500",
    glowColor: "bg-indigo-500",
    metrics: ["+40% Win Rate", "AI Lead Scoring"],
    mockup: (
      <div className="flex flex-col h-full justify-between gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 shadow-sm flex flex-col justify-center">
            <Zap className="w-5 h-5 text-indigo-500 mb-3" />
            <div className="text-2xl font-black text-gray-900 dark:text-white">1,284</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Active Leads</div>
          </div>
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col justify-center">
            <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-3" />
            <div className="text-2xl font-black text-indigo-900 dark:text-indigo-100">₹8.4M</div>
            <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mt-1">Pipeline Value</div>
          </div>
        </div>
        <div className="flex-1 rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 p-4 shadow-sm">
          <div className="text-xs font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-green-500" /> Deal Velocity
          </div>
          <div className="flex items-end gap-2 h-20">
            {[30, 45, 20, 60, 80, 50, 90].map((h, i) => (
              <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.6, delay: i * 0.05 }} className="w-full bg-indigo-500/20 dark:bg-indigo-500/30 rounded-t-md relative">
                <div className="absolute bottom-0 w-full bg-indigo-500 rounded-t-md" style={{ height: '60%' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "hrm",
    title: "Fluto HRM",
    badge: "People",
    description: "Empower your workforce from day one. Automate payroll, track attendance, and manage employee performance in one unified system.",
    icon: Users,
    color: "from-rose-500 to-pink-500",
    glowColor: "bg-rose-500",
    metrics: ["1-Click Payroll", "Self-Service"],
    mockup: (
      <div className="flex flex-col gap-3 h-full justify-center">
        <div className="p-4 bg-rose-50 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20 rounded-2xl flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-[#0A0A0A] flex items-center justify-center shadow-sm">
              <Calculator className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">Run Payroll</div>
              <div className="text-[10px] font-semibold text-gray-500">142 Employees pending</div>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        {[
          { name: "Alex Chen", role: "Engineering", status: "On Leave", dot: "bg-yellow-400" },
          { name: "Maria Garcia", role: "Design", status: "Active", dot: "bg-green-400" },
        ].map((emp, i) => (
          <div key={i} className="p-3 rounded-xl bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold">{emp.name.charAt(0)}</div>
              <div>
                <div className="text-xs font-bold text-gray-900 dark:text-white">{emp.name}</div>
                <div className="text-[10px] text-gray-500">{emp.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded">
              <div className={`w-1.5 h-1.5 rounded-full ${emp.dot}`} /> {emp.status}
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "assets",
    title: "Fluto Assets",
    badge: "Operations",
    description: "Track your hardware with absolute precision. Manage IT hardware, software licenses, and physical company assets effortlessly.",
    icon: Box,
    color: "from-orange-500 to-amber-500",
    glowColor: "bg-orange-500",
    metrics: ["Barcode Scanning", "Lifecycle Tracking"],
    mockup: (
      <div className="flex flex-col gap-4 h-full justify-center">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 shadow-sm flex items-center gap-4">
           <div className="p-3 bg-orange-50 dark:bg-orange-500/10 rounded-xl">
             <Box className="w-6 h-6 text-orange-500" />
           </div>
           <div>
             <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">MacBook Pro M3 Max</div>
             <div className="text-[10px] font-semibold text-gray-500 bg-gray-50 dark:bg-black px-2 py-0.5 rounded border border-gray-100 dark:border-white/5 inline-block">Assigned: Neeraj A.</div>
           </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="p-4 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
            <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">412</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Devices</div>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-2xl border border-orange-100 dark:border-orange-500/20 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 p-3 opacity-20"><Zap className="w-10 h-10 text-orange-500" /></div>
            <div className="text-2xl font-black text-orange-600 dark:text-orange-400 mb-1 relative z-10">18</div>
            <div className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest relative z-10">Needs Repair</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "erp",
    title: "Fluto ERP",
    badge: "Enterprise",
    description: "End-to-end resource orchestration. Manage supply chains, inventory, and operations for high-scale enterprise operations.",
    icon: Building2,
    color: "from-emerald-500 to-teal-500",
    glowColor: "bg-emerald-500",
    metrics: ["Multi-Warehouse", "Real-time Ledger"],
    mockup: (
      <div className="flex flex-col h-full justify-between gap-4">
        <div className="flex-1 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm p-4 flex flex-col justify-end">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-white mb-4">
            <PieChart className="w-4 h-4 text-emerald-500" /> Fulfillment Metrics
          </div>
          <div className="flex items-end gap-2 h-20">
            {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
              <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex-1 bg-emerald-500/20 dark:bg-emerald-500/30 rounded-t-md relative">
                <div className="absolute bottom-0 w-full bg-emerald-500 rounded-t-md" style={{ height: '50%' }} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest mb-1">Global Stock</div>
            <div className="text-xl font-black text-emerald-900 dark:text-emerald-100">94.2%</div>
          </div>
          <div className="p-4 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5">
            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Daily Output</div>
            <div className="text-xl font-black text-gray-900 dark:text-white">12.4k</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "fluto-one",
    title: "Fluto One",
    badge: "The Suite",
    description: "The ultimate marketing & business power-pack. Replace your fragmented stack with one unified OS combining all modules natively.",
    icon: LayoutGrid,
    color: "from-[#8155FF] to-[#FF7AC6]",
    glowColor: "bg-[#8155FF]",
    metrics: ["10+ Tools Replaced", "100% Data Unification"],
    mockup: (
      <div className="grid grid-cols-2 gap-3 h-full">
        <div className="col-span-2 p-3 bg-gradient-to-r from-[#8155FF]/10 to-[#FF7AC6]/10 border border-[#8155FF]/20 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
             <ShieldCheck className="w-4 h-4 text-[#8155FF]" />
             <span className="text-xs font-bold text-gray-900 dark:text-white">System Status: Optimal</span>
          </div>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
        </div>
        <div className="p-3 bg-white dark:bg-[#111] rounded-xl border border-gray-100 dark:border-white/5 flex flex-col justify-center items-center text-center">
          <Mail className="w-5 h-5 text-blue-500 mb-2" />
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Campaigns</div>
          <div className="text-sm font-black text-gray-900 dark:text-white mt-1">Active</div>
        </div>
        <div className="p-3 bg-white dark:bg-[#111] rounded-xl border border-gray-100 dark:border-white/5 flex flex-col justify-center items-center text-center">
          <Briefcase className="w-5 h-5 text-indigo-500 mb-2" />
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">CRM</div>
          <div className="text-sm font-black text-gray-900 dark:text-white mt-1">Synced</div>
        </div>
        <div className="p-3 bg-white dark:bg-[#111] rounded-xl border border-gray-100 dark:border-white/5 flex flex-col justify-center items-center text-center">
          <Users className="w-5 h-5 text-rose-500 mb-2" />
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">HRM</div>
          <div className="text-sm font-black text-gray-900 dark:text-white mt-1">Secure</div>
        </div>
        <div className="p-3 bg-white dark:bg-[#111] rounded-xl border border-gray-100 dark:border-white/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8155FF]/5 to-[#FF7AC6]/5"></div>
          <div className="text-xs font-black text-gray-900 dark:text-white z-10">+3 More</div>
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest z-10 mt-1">Modules</div>
        </div>
      </div>
    )
  }
];

export default function FlutoOneStickyShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 1. Framer Motion Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine which product to show based on the scroll percentage (0 to 1)
    const index = Math.min(
      products.length - 1,
      Math.floor(latest * products.length)
    );
    setActiveIndex(index);
  });

  const activeProduct = products[activeIndex];

  return (
    <section className="relative w-full bg-slate-50 dark:bg-[#030303]">
      
      {/* 
        === DESKTOP STICKY SCROLL CONTAINER ===
        Height is calculated dynamically: 100vh per product.
        This provides a natural scroll track without hijacking the wheel event.
      */}
      <div 
        ref={containerRef} 
        className="hidden md:block relative" 
        style={{ height: `${products.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden py-24">
          
          {/* Blue-Shade Global Aesthetics */}
          <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

          {/* 12-Column Desktop Grid */}
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 grid grid-cols-12 gap-12 relative z-10">
            
            {/* --- LEFT COLUMN: Interactive Tab Tracker (5 Cols) --- */}
            <div className="col-span-5 flex flex-col justify-center h-full max-h-[85vh]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100/50 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest shadow-sm mb-6 self-start shrink-0 backdrop-blur-sm">
                The Ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-indigo-950 dark:text-white mb-8 shrink-0">
                Everything your business needs. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">In one place.</span>
              </h2>

              <div className="space-y-3 relative pl-5 flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: 'none' }}>
                
                {/* Scroll Progress Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gray-200 dark:bg-white/10 rounded-full">
                  <motion.div 
                    className="w-full bg-indigo-600 dark:bg-indigo-400 rounded-full origin-top"
                    style={{ scaleY: scrollYProgress }}
                  />
                </div>

                {products.map((product, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <div 
                      key={product.id} 
                      className={`relative p-5 rounded-[2rem] transition-all duration-500 ease-out border ${
                        isActive 
                          ? "bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md shadow-[0_0_30px_rgba(79,70,229,0.1)] dark:shadow-[0_0_20px_rgba(79,70,229,0.05)] border-indigo-500/30 dark:border-indigo-500/40 opacity-100 translate-x-2 scale-105" 
                          : "bg-transparent border-transparent opacity-40 hover:opacity-60 scale-95"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${product.color} shadow-sm shrink-0`}>
                          <product.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">{product.badge}</span>
                          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-none">{product.title}</h3>
                        </div>
                      </div>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 leading-relaxed font-medium">
                              {product.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {product.metrics.map((metric, idx) => (
                                <span key={idx} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[10px] font-bold text-gray-600 dark:text-gray-300">
                                  {metric}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* --- RIGHT COLUMN: High-Fidelity Glassmorphic Mockups (7 Cols) --- */}
            <div className="col-span-7 flex items-center justify-center h-full max-h-[85vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full relative aspect-square max-w-[600px]"
                >
                  {/* Master Browser/OS Window */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-white/40 dark:bg-[#0A0A0A]/40 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
                    
                    {/* Window Controls & URL Bar */}
                    <div className="flex items-center gap-2 px-6 py-5 bg-white/40 dark:bg-black/20 border-b border-gray-200/50 dark:border-white/5 backdrop-blur-md">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="ml-4 px-4 py-1.5 bg-white/60 dark:bg-white/5 rounded-lg text-[10px] font-mono text-gray-500 dark:text-gray-400 flex items-center gap-2 shadow-inner border border-gray-200/50 dark:border-transparent flex-1 max-w-[200px]">
                        <CheckCircle2 className="w-3 h-3 text-green-500" /> {activeProduct.id}.fluto.os
                      </div>
                    </div>

                    {/* Dashboard Inner Canvas */}
                    <div className="flex-1 p-6 relative overflow-hidden flex flex-col bg-gray-50/30 dark:bg-transparent">
                      {/* Dynamic Ambient Glow corresponding to the active product */}
                      <div className={`absolute top-0 right-0 w-72 h-72 ${activeProduct.glowColor} opacity-15 dark:opacity-20 blur-[80px] rounded-full transition-colors duration-700`} />
                      <div className={`absolute bottom-0 left-0 w-64 h-64 ${activeProduct.glowColor} opacity-10 dark:opacity-10 blur-[80px] rounded-full transition-colors duration-700`} />
                      
                      {/* Coded UI Mockup Injection */}
                      <div className="relative z-10 flex-1 h-full w-full">
                        {activeProduct.mockup}
                      </div>

                      {/* Bottom Context Hint */}
                      <div className="mt-6 flex justify-between items-center text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest pt-4 border-t border-gray-200/50 dark:border-white/5">
                        <span>Live Preview Environment</span>
                        <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 group cursor-pointer hover:underline">
                          Explore Module <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform"/>
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* 
        === MOBILE FALLBACK (Vertical Stack) ===
        Hides the sticky architecture entirely on touch/small devices 
        to prevent scroll-jacking UX issues, rendering a beautiful vertical list instead.
      */}
      <div className="md:hidden flex flex-col px-4 py-24 gap-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100/50 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest shadow-sm mb-4 backdrop-blur-sm">
            The Unified Suite
          </div>
          <h2 className="text-3xl font-bold tracking-tight leading-tight text-indigo-950 dark:text-white">
            Everything your business needs.
          </h2>
        </div>

        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-[#0A0A0A] rounded-[2rem] border border-gray-200/80 dark:border-white/10 shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${product.color} shadow-sm`}>
                  <product.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{product.badge}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-none">{product.title}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6">
                {product.description}
              </p>
            </div>
            
            {/* Simplified Mobile Mockup Container */}
            <div className="p-6 bg-gray-50/50 dark:bg-[#111] border-t border-gray-100 dark:border-white/5 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
              <div className={`absolute inset-0 ${product.glowColor} opacity-5 blur-3xl`} />
              <div className="relative z-10">
                {product.mockup}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}