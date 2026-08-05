"use client";

import { motion } from "framer-motion";
import { Workflow, Megaphone, Search, Mail, MessageCircle, Zap } from "lucide-react";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";

export default function ProductIntegrations() {
  const tools = [
    { name: "Meta Ads", icon: <Megaphone className="w-6 h-6" />, color: "text-blue-600 dark:text-blue-400" },
    { name: "Google Ads", icon: <Search className="w-6 h-6" />, color: "text-red-500 dark:text-red-400" },
    { name: "Mailchimp", icon: <Mail className="w-6 h-6" />, color: "text-yellow-500 dark:text-yellow-400" },
    { name: "WhatsApp", icon: <MessageCircle className="w-6 h-6" />, color: "text-green-500 dark:text-green-400" },
    { name: "Zapier", icon: <Zap className="w-6 h-6" />, color: "text-orange-500 dark:text-orange-400" }
  ];

  return (
    <section className="py-24 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-[#030303] border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUpVariant} className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
              <Workflow className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>
            Connects with 500+ marketing tools.
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-gray-500 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Sync your ad campaigns, chat flows, and lead generation software natively. No coding required.
          </motion.p>
          
          <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {tools.map((tool, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <div className={tool.color}>{tool.icon}</div>
                <span className="font-bold text-gray-900 dark:text-white text-sm">{tool.name}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-[0_10px_30px_rgba(79,70,229,0.3)] cursor-pointer hover:bg-indigo-700 transition-colors">
              + Explore all 500 integrations
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}