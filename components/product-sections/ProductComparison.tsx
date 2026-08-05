"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";

export default function ProductComparison() {
  return (
    <section className="py-24 sm:py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50/50 via-indigo-50/30 to-purple-50/40 dark:from-[#05030f] dark:via-[#0a0518] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className={`${UI.badge} mb-4`}>Why Fluto One?</div>
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>
            Stop paying for 10 different tools.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">Consolidate your marketing and operations stack to save cost and eliminate bloat.</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* The Old Way (Competitors) */}
          <motion.div variants={fadeUpVariant} className="p-8 sm:p-10 rounded-[2.5rem] bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-900/30 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-bold text-red-900 dark:text-red-400 mb-6">The Old Way (Stack Bloat)</h3>
            <div className="space-y-4 mb-8 flex-1">
              {[
                { name: "Email Marketing (e.g., Mailchimp)", cost: "₹3,500/mo" },
                { name: "Sales CRM (e.g., HubSpot)", cost: "₹7,000/mo" },
                { name: "Support Desk (e.g., Zendesk)", cost: "₹4,500/mo" },
                { name: "Automation (e.g., Zapier)", cost: "₹2,500/mo" },
                { name: "Analytics (e.g., Tableau)", cost: "₹5,000/mo" },
              ].map((tool, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/60 dark:bg-black/20 border border-red-100/50 dark:border-red-900/20">
                  <div className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" /> {tool.name}
                  </div>
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-400">{tool.cost}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-red-200 dark:border-red-900/30 flex justify-between items-center">
              <span className="text-sm font-bold text-red-900 dark:text-red-400 uppercase tracking-widest">Total Monthly Cost</span>
              <span className="text-3xl font-black text-red-600 dark:text-red-500">₹22,500<span className="text-lg opacity-60">/mo</span></span>
            </div>
          </motion.div>

          {/* The Fluto One Way */}
          <motion.div variants={fadeUpVariant} className="p-8 sm:p-10 rounded-[2.5rem] bg-indigo-600 dark:bg-indigo-950 border border-indigo-500/50 shadow-2xl flex flex-col relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">The Fluto One Way</h3>
            <div className="space-y-4 mb-8 flex-1 relative z-10">
              {[
                "Fluto Campaigns (AI Email Outreach)",
                "Fluto CRM (Sales & Lead Scoring)",
                "Fluto Desk (Omnichannel Support)",
                "Native Workflow Automations",
                "Unified Data Dashboards",
              ].map((feature, i) => (
                <div key={i} className="flex items-center p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-3 text-sm font-bold text-white">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> {feature}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-white/20 flex justify-between items-center relative z-10">
              <span className="text-sm font-bold text-indigo-200 uppercase tracking-widest">One Unified Subscription</span>
              <span className="text-4xl font-black text-white">₹3,999<span className="text-lg opacity-80">/mo</span></span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}