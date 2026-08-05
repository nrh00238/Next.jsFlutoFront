"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";
import { TestimonialData } from "@/lib/product-data";

export default function ProductTestimonials({ testimonials }: { testimonials: TestimonialData[] }) {
  return (
    <section className="py-24 relative w-full overflow-hidden dark:from-[#04030a] dark:via-[#070316] dark:to-[#030307] border-t border-gray-100 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className={`${UI.badge} mb-4`}>Social Proof</div>
          <h2 className={`${UI.sectionHeading} ${UI.headingColor}`}>Trusted by high-growth teams.</h2>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((rev, i) => (
            <motion.div key={i} variants={fadeUpVariant} className="p-8 bg-white/90 dark:bg-[#0A0A0A] backdrop-blur-md rounded-[2rem] border border-gray-200/80 dark:border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-none transition-transform duration-300 hover:-translate-y-1 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-8 leading-relaxed">"{rev.quote}"</p>
              <div className="flex items-center gap-3 border-t border-gray-100 dark:border-white/5 pt-4 mt-auto">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex shrink-0"></div>
                <div>
                  <div className="font-bold text-sm text-indigo-950 dark:text-white">{rev.author}</div>
                  <div className="text-xs text-gray-500">{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}