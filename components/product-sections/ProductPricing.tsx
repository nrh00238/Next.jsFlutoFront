"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";
import { PricingTier } from "@/lib/product-data";

export default function ProductPricing({ tiers }: { tiers: PricingTier[] }) {
  return (
    <section className="py-24 sm:py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/40 dark:from-[#04030f] dark:via-[#080414] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className={`${UI.badge} mb-4`}>Pricing</div>
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>Simple, transparent pricing.</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">No hidden fees. Billed in Indian Rupees (₹).</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div key={i} variants={fadeUpVariant} className={`relative p-8 rounded-[2.5rem] ${tier.isPopular ? "bg-indigo-950 dark:bg-[#110B29] border border-indigo-500/50 shadow-2xl scale-100 md:scale-105 z-10" : "bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-indigo-100 dark:border-white/5 shadow-xl"}`}>
              
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div className={`text-xl font-bold mb-2 ${tier.isPopular ? "text-white" : "text-indigo-950 dark:text-white"}`}>{tier.name}</div>
              <div className="mb-4 flex items-end">
                <span className={`text-4xl font-black ${tier.isPopular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {tier.price === "Custom" ? "Custom" : `₹${tier.price}`}
                </span>
                {tier.price !== "Custom" && <span className={`text-sm font-medium mb-1 ml-1 ${tier.isPopular ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>/mo</span>}
              </div>
              <p className={`text-sm mb-8 font-medium ${tier.isPopular ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>{tier.desc}</p>

              <div className="space-y-4 mb-10">
                {tier.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${tier.isPopular ? "text-indigo-400" : "text-indigo-500"}`} />
                    <span className={`text-sm font-medium ${tier.isPopular ? "text-gray-200" : "text-gray-700 dark:text-gray-300"}`}>{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${tier.isPopular ? "bg-indigo-500 text-white hover:bg-indigo-400 shadow-lg" : "bg-indigo-50 dark:bg-[#151515] text-indigo-950 dark:text-white border border-indigo-100 dark:border-white/10 hover:border-indigo-500"}`}>
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}