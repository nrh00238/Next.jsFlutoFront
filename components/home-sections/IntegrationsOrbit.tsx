"use client";

import { motion } from "framer-motion";
import { Workflow, Command } from "lucide-react";
import { UI, integrations } from "@/lib/constants";

export default function IntegrationsOrbit() {
  return (
    <section className="py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50/40 via-indigo-50/50 to-purple-50/50 dark:from-[#050312] dark:via-[#030308] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="w-full max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16 relative z-10">
          <div className={`${UI.badge} mb-6`}>
            <Workflow className="w-3.5 h-3.5 text-indigo-500" /> The Bridge
          </div>
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>
            Natively Connected to Your Stack.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
            Fluto acts as the central nervous system for your business. Seamlessly plug into the software you already trust.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto h-[480px] flex items-center justify-center">

          <div className="absolute w-[240px] h-[240px] border border-gray-200/80 dark:border-white/10 rounded-full pointer-events-none"></div>
          <div className="absolute w-[400px] h-[400px] border border-gray-200/50 dark:border-white/5 rounded-full pointer-events-none"></div>

          <div className="relative z-20 w-20 h-20 bg-gray-900 dark:bg-white rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.3)] flex items-center justify-center">
            <Command className="w-8 h-8 text-white dark:text-black" />
          </div>

          {integrations.map((app, i) => {
            const radian = (app.angle * Math.PI) / 180;
            const x = Math.cos(radian) * app.radius;
            const y = Math.sin(radian) * app.radius;

            return (
              <div
                key={i}
                className="absolute z-10"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4 + (i % 3), ease: "easeInOut" }}
                    className="px-5 py-2.5 rounded-2xl bg-white dark:bg-[#111] shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-gray-200/80 dark:border-white/10 font-bold text-sm text-gray-800 dark:text-gray-200 hover:border-indigo-500 hover:text-indigo-500 transition-all cursor-default backdrop-blur-md whitespace-nowrap"
                  >
                    {app.name}
                  </motion.div>
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}