"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server } from "lucide-react";
import { UI, fadeUpVariant } from "@/lib/constants";
import { SecurityData } from "@/lib/product-data";

const TagIconRenderer = ({ name }: { name: string }) => {
  if (name === "lock") return <Lock className="w-4 h-4 text-green-500 dark:text-green-400" />;
  if (name === "server") return <Server className="w-4 h-4 text-blue-500 dark:text-blue-400" />;
  return <ShieldCheck className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />;
};

export default function ProductSecurity({ security }: { security: SecurityData }) {
  return (
    <section className="py-24 sm:py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-purple-50/40 to-slate-50/50 dark:from-[#070316] dark:via-[#04030a] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <div className={`${UI.badge} mb-6`}><ShieldCheck className="w-4 h-4" /> Enterprise Security</div>
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-6`}>{security.heading}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed mb-8">
            {security.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {security.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white text-sm font-bold flex items-center gap-2 shadow-sm">
                <TagIconRenderer name={tag.icon} /> {tag.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[400px] flex items-center justify-center">
           <div className="absolute w-[300px] h-[300px] bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-[100px]"></div>
           <div className="relative w-48 h-48 bg-white/50 dark:bg-white/5 border border-white dark:border-white/10 rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_0_80px_rgba(79,70,229,0.15)] dark:shadow-[0_0_80px_rgba(79,70,229,0.3)]">
             <ShieldCheck className="w-24 h-24 text-indigo-500 dark:text-indigo-400" />
           </div>
        </motion.div>
      </div>
    </section>
  );
}