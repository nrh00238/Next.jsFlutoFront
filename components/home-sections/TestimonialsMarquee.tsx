"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { UI, testimonials } from "@/lib/constants";

export default function TestimonialsMarquee() {
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 relative w-full overflow-hidden dark:from-[#04030a] dark:via-[#070316] dark:to-[#030307] border-t border-gray-100 dark:border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="w-full relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <div className={`${UI.badge} mb-4`}>
            Social Proof
          </div>
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>
            Trusted by High-Growth Teams
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium">
            See how global enterprises scale faster with Fluto.
          </p>
        </div>

        <div className="relative flex w-full overflow-hidden group">
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white dark:from-[#030303] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white dark:from-[#030303] to-transparent z-10 pointer-events-none"></div>
          <motion.div
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex gap-6 py-4 px-3 shrink-0 w-full"
          >
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
              >
                <div>
                  <h3 className="text-lg font-bold text-indigo-950 dark:text-white mb-4 tracking-tight leading-snug">
                    &ldquo;{item.quote}&rdquo;
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-relaxed mb-8">
                    &ldquo;{item.desc}&rdquo;
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 pt-6 border-t border-gray-100 dark:border-white/5 mb-4">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-11 h-11 rounded-full object-cover border border-gray-200 dark:border-white/10"
                    />
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">
                        {item.author}
                        <span className="text-gray-400 font-normal ml-1">, {item.role}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}