"use client";

import { motion } from "framer-motion";
import { Timer, ArrowRight } from "lucide-react";
import { UI, fadeUpVariant } from "@/lib/constants";
import { Button } from "@/components/Button";

interface ComingSoonProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  backLink?: string;
  backText?: string;
}

export default function ComingSoon({
  title = "Content in Production",
  description = "Our engineering and documentation teams are currently crafting high-quality content for this section. We will be launching this very soon.",
  icon,
  backLink = "/",
  backText = "Return to Home"
}: ComingSoonProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 flex justify-center">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeUpVariant}
        className="w-full max-w-3xl p-10 sm:p-16 rounded-[2.5rem] bg-slate-50 dark:bg-[#0a0a0a] border border-gray-200/60 dark:border-white/5 shadow-sm text-center flex flex-col items-center group hover:border-indigo-500/30 transition-colors"
      >
        <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
          {icon || <Timer className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />}
        </div>
        
        <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>{title}</h2>
        
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium mb-10 max-w-xl leading-relaxed">
          {description}
        </p>
        
        <Button href={backLink} variant="secondary" size="md">
          {backText} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </section>
  );
}