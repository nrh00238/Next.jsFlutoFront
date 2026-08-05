"use client";

import { motion } from "framer-motion";
import { Search, Star, Globe, Building2, ArrowRight } from "lucide-react";
import { fadeUpVariant, UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";

export default function FindPartnerPage() {
  const partners = [
    { name: "CloudScale Integrations", tier: "Platinum", location: "New York, USA", rating: "4.9", reviews: 142, desc: "Specializes in Fluto ERP and CRM migrations for enterprise clients." },
    { name: "Apex Marketing", tier: "Silver", location: "London, UK", rating: "4.8", reviews: 86, desc: "Boutique agency focused on Fluto Campaigns and automated lead workflows." },
    { name: "TechNova Solutions", tier: "Platinum", location: "Toronto, Canada", rating: "5.0", reviews: 210, desc: "Full-stack integration partner for healthcare and fintech industries." },
    { name: "Nexus Support", tier: "Registered", location: "Sydney, AU", rating: "4.6", reviews: 24, desc: "Experts in setting up omnichannel Fluto Desk environments." }
  ];

  return (
    <main className={UI.pageWrapper}>
      
      {/* 🟢 NEW CONSISTENT HERO INJECTION WITH 2-LINE HEADING */}
      <GlobalHero 
        badgeText="Verified Agencies"
        badgeIcon={<Building2 className="w-4 h-4" />}
        titleTop="Find a certified"
        titleGradient="Integration Partner."
        description="Need help migrating data, setting up complex workflows, or training your team? Hire an official Fluto Partner agency."
      >
        <div className="relative w-full max-w-2xl mx-auto shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl flex items-center bg-white dark:bg-[#0A0A0A] ring-1 ring-gray-200 dark:ring-white/10 p-2">
          <div className="pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            className="flex-1 px-4 py-4 border-0 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-lg outline-none" 
            placeholder="Search by industry or location..." 
          />
          <button className={`${UI.buttonPrimary} hidden sm:flex px-6 py-4`}>
            Find Partners
          </button>
        </div>
      </GlobalHero>

      {/* PARTNERS DIRECTORY GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {partners.map((partner, i) => (
            <motion.div 
              key={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUpVariant} 
              className="p-8 rounded-[2rem] bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-[#111] rounded-xl flex items-center justify-center border border-gray-200/50 dark:border-white/5 shadow-sm">
                    <Building2 className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{partner.name}</h3>
                    <div className="flex items-center gap-1 text-xs font-bold text-gray-500 mt-1">
                      <Globe className="w-3 h-3" /> {partner.location}
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
                  partner.tier === 'Platinum' ? 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400' : 
                  partner.tier === 'Silver' ? 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-white/10 dark:text-gray-300' : 
                  'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400'
                }`}>
                  {partner.tier}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-6 flex-1">
                {partner.desc}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{partner.rating}</span>
                  <span className="text-xs text-gray-500 font-medium">({partner.reviews} reviews)</span>
                </div>
                <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 flex items-center">
                  View Profile <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}