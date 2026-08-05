"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { UI } from "@/lib/constants";

export default function FinalCTA() {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ["0 1", "1 1"] });
  const ctaScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden dark:from-[#060314] dark:via-[#030308] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div ref={ctaRef} style={{ scale: ctaScale, opacity: ctaOpacity }} className="rounded-[3rem] bg-gradient-to-br from-[#362273] via-[#160B2E] to-black border border-[#4B309A]/30 shadow-2xl p-12 sm:p-24 text-center flex flex-col items-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#8155FF]/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <h2 className={`${UI.sectionHeading} ${UI.darkSectionColor} mb-8 relative z-10`}>
            Ready to scale without friction?
          </h2>
          
          <p className="text-gray-300 max-w-xl mx-auto text-lg font-medium mb-12 leading-relaxed relative z-10">
            Join the fastest-growing enterprises building their future on Fluto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto relative z-10">
            <Button href="/register" variant="secondary" size="md">
              <Sparkles className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" /> Start building for free
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}