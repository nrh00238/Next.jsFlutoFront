"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, CreditCard, Code, Settings, MessageCircle, ArrowRight, LifeBuoy } from "lucide-react";
import { fadeUpVariant, UI } from "@/lib/constants";
import Link from "next/link";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";

export default function HelpCenterPage() {
  const categories = [
    { title: "Getting Started", icon: <BookOpen className="w-6 h-6" />, desc: "Onboarding guides and platform basics.", link: "/community/tutorials" },
    { title: "Billing & Plans", icon: <CreditCard className="w-6 h-6" />, desc: "Manage invoices, payments, and upgrades.", link: "/pricing" },
    { title: "API & Webhooks", icon: <Code className="w-6 h-6" />, desc: "Developer documentation and API keys.", link: "/community/forums" },
    { title: "Account Settings", icon: <Settings className="w-6 h-6" />, desc: "Passwords, security, and workspace setup.", link: "/help" },
  ];

  return (
    <main className={UI.pageWrapper}>
      
      {/* 🟢 NEW CONSISTENT HERO WITH 2-LINE HEADING & EMBEDDED SEARCH */}
      <GlobalHero 
        badgeText="Support & Resources"
        badgeIcon={<LifeBuoy className="w-4 h-4" />}
        titleTop="Fluto Support."
        titleGradient="How can we help?"
        description="Search through our comprehensive guides, API documentation, and billing FAQs to find exactly what you need."
      >
        <div className="relative w-full max-w-2xl mx-auto shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl flex items-center bg-white dark:bg-[#0A0A0A] ring-1 ring-gray-200 dark:ring-white/10 p-2">
          <div className="pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            className="flex-1 px-4 py-4 border-0 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-lg outline-none" 
            placeholder="Search for articles, guides, or error codes..." 
          />
          <button className={`${UI.buttonPrimary} hidden sm:flex px-6 py-4`}>
            Search
          </button>
        </div>
      </GlobalHero>

      {/* CATEGORY GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link key={i} href={cat.link}>
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUpVariant} 
                className="p-6 rounded-[1.5rem] bg-slate-50 dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/5 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-colors group h-full cursor-pointer shadow-sm hover:shadow-md flex flex-col"
              >
                <div className="w-12 h-12 bg-white dark:bg-[#151515] rounded-xl flex items-center justify-center text-indigo-500 mb-5 shadow-sm group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{cat.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT SUPPORT BANNERS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24">
        <div className="bg-indigo-950 dark:bg-[#0b081c] rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden border border-indigo-500/30">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm uppercase tracking-widest mb-3">
                <LifeBuoy className="w-4 h-4" /> 24/7 Global Support
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Can't find what you're looking for?</h2>
              <p className="text-indigo-200 max-w-xl text-sm leading-relaxed">
                Our engineering and success teams are standing by to help you resolve issues, configure integrations, or upgrade your workspace.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <button className="px-6 py-4 bg-white text-indigo-950 font-bold rounded-xl text-sm hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" /> Open Live Chat
              </button>
              <button className="px-6 py-4 bg-indigo-800 text-white font-bold rounded-xl text-sm hover:bg-indigo-700 transition-colors border border-indigo-600 flex items-center justify-center gap-2">
                Submit a Ticket <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER ADDED FOR CONSISTENCY */}
      <Footer />
    </main>
  );
}