"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server } from "lucide-react";
import { fadeUpVariant } from "@/lib/constants";
import { SecurityData } from "@/lib/product-data";

const TagIconRenderer = ({ name }: { name: string }) => {
  if (name === "lock") return <Lock className="w-4 h-4 text-green-400" />;
  if (name === "server") return <Server className="w-4 h-4 text-blue-400" />;
  return <ShieldCheck className="w-4 h-4 text-indigo-400" />;
};

export default function ProductSecurity({ security }: { security: SecurityData }) {
  return (
    <section className="py-24 sm:py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:36px_36px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest shadow-sm mb-6">
            <ShieldCheck className="w-4 h-4" /> Enterprise Security
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
            {security.heading}
          </h2>
          <p className="text-indigo-200 text-lg font-medium leading-relaxed mb-8">
            {security.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {security.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold flex items-center gap-2 shadow-sm">
                <TagIconRenderer name={tag.icon} /> {tag.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative h-[400px] flex items-center justify-center">
           <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
           <div className="relative w-48 h-48 bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_0_80px_rgba(79,70,229,0.3)]">
             <ShieldCheck className="w-24 h-24 text-indigo-400" />
           </div>
        </motion.div>
      </div>
    </section>
  );
}