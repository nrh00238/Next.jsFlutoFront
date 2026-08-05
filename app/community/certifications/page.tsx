"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { fadeUpVariant, UI } from "@/lib/constants";
import Link from "next/link";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";

export default function CertificationsPage() {
  const certs = [
    { title: "Fluto Certified Admin", level: "Associate", desc: "Prove your ability to configure workspaces, manage users, and set up basic workflows.", icon: <ShieldCheck className="w-6 h-6 text-blue-500" /> },
    { title: "Fluto Certified Developer", level: "Professional", desc: "Master custom API integrations, webhooks, and advanced frontend dashboard widgets.", icon: <Zap className="w-6 h-6 text-indigo-500" /> },
    { title: "Fluto Certified Architect", level: "Expert", desc: "Design highly-available, multi-tenant enterprise deployments and custom security policies.", icon: <Award className="w-6 h-6 text-purple-500" /> }
  ];

  return (
    <main className={UI.pageWrapper}>
      
      {/* 🟢 SHORT 2-LINE HEADING */}
      <GlobalHero 
        badgeText="Official Credentials"
        badgeIcon={<Award className="w-4 h-4" />}
        titleTop="Official Fluto"
        titleGradient="Certifications."
        description="Validate your skills with globally recognized certifications. Join the elite group of professionals building the future of enterprise software."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button className={UI.buttonPrimary}>
            Browse Certifications <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className={UI.buttonSecondary}>
            Verify a Credential
          </button>
        </div>
      </GlobalHero>

      {/* CERTIFICATIONS GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-8 relative z-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <motion.div 
              key={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUpVariant} 
              className="p-8 rounded-[2rem] bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-xl flex flex-col group hover:border-indigo-500/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-gray-50 dark:bg-[#111] rounded-2xl flex items-center justify-center border border-gray-200/50 dark:border-white/5 shadow-sm group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 rounded-full">
                  {cert.level}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{cert.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 flex-1 font-medium leading-relaxed">{cert.desc}</p>
              
              <div className="space-y-3 mb-8 text-sm font-medium text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> 60-Min Proctored Exam
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Valid for 2 Years
                </div>
              </div>
              
              <Link href="#" className="block w-full py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white font-bold text-center text-sm hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
                View Exam Guide
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}