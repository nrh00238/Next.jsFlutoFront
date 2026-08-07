"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Heart, Globe2, Sparkles, Code, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { companyData } from "@/lib/company-data";
import { UI, fadeUpVariant } from "@/lib/constants";
import { Button } from "@/components/Button";
import GlobalHero from "@/components/layout/GlobalHero";

const getIcon = (name: string, className: string) => {
  switch(name) {
    case "globe": return <Globe2 className={className} />;
    case "heart": return <Heart className={className} />;
    case "code": return <Code className={className} />;
    case "sparkles": return <Sparkles className={className} />;
    default: return <Briefcase className={className} />;
  }
};

export default function CareersPage() {
  const { careers } = companyData;
  const [filter, setFilter] = useState("All");
  const filteredJobs = filter === "All" ? careers.jobs : careers.jobs.filter(j => j.dept === filter);

  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen text-gray-900 dark:text-white">
      
      <GlobalHero 
        badgeText={careers.hero.badge}
        badgeIcon={<Briefcase className="w-4 h-4" />}
        titleTop={careers.hero.headingTop}
        titleGradient={careers.hero.headingGradient}
        description={careers.hero.subheading}
      >
        <Button href="#open-roles" variant="primary" size="md">
          View Open Roles <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </GlobalHero>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>Perks & Benefits</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">We invest in our people so they can invest in our mission.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.perks.map((perk, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5 hover:border-indigo-500/30 transition-colors">
              <div className="mb-6 bg-white dark:bg-[#111] w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm text-indigo-500">
                {getIcon(perk.icon, "w-8 h-8")}
              </div>
              <h3 className="font-bold text-lg mb-2">{perk.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="open-roles" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 border-t border-gray-100 dark:border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-2">Open Positions</h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium">Find your next big opportunity.</p>
          </div>
          <div className="flex flex-wrap gap-2 border border-gray-200 dark:border-white/10 p-1 rounded-xl bg-gray-50 dark:bg-white/5">
            {["All", "Engineering", "Marketing", "Sales", "Success"].map(dept => (
              <button key={dept} onClick={() => setFilter(dept)} className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${filter === dept ? "bg-white dark:bg-[#151515] text-indigo-600 dark:text-white shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}`}>
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.length > 0 ? filteredJobs.map((job) => (
            <motion.div key={job.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/5 hover:border-indigo-500/50 shadow-sm transition-all group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                  <span className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded-md">{job.dept}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <Button href="/" variant="darkSecondary" size="sm">
                Apply Now
              </Button>
            </motion.div>
          )) : (
            <div className="text-center py-12 text-gray-500 font-medium">No open positions in this department currently.</div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}