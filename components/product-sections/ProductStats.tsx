"use client";

import { motion } from "framer-motion";
import { UI, staggerContainer, fadeUpVariant } from "@/lib/constants";
import { StatData } from "@/lib/product-data";

export default function ProductStats({ stats }: { stats: StatData[] }) {
  return (
    <section className="py-24 relative w-full overflow-hidden bg-gradient-to-br from-purple-50/40 via-indigo-50/50 to-blue-50/40 dark:from-[#060312] dark:via-[#04030a] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 dark:divide-white/10">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUpVariant} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}