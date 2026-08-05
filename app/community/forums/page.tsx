"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Code, HelpCircle, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { fadeUpVariant, UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";

export default function ForumsPage() {
  const discussions = [
    { title: "Best practices for rate-limiting the bulk email API?", category: "API & Webhooks", author: "jason_dev", replies: 14, solved: true, time: "2h ago" },
    { title: "React Native SDK throwing 403 on Android build", category: "Bug Reports", author: "mobile_sarah", replies: 3, solved: false, time: "5h ago" },
    { title: "Show & Tell: Built a custom Slack integration for Fluto CRM!", category: "Show & Tell", author: "alex_builds", replies: 42, solved: false, time: "1d ago" },
    { title: "How to query custom fields in GraphQL endpoint?", category: "API & Webhooks", author: "data_dan", replies: 8, solved: true, time: "2d ago" }
  ];

  const stats = [
    { label: "Active Developers", value: "42.5k", icon: <Users className="w-5 h-5 text-indigo-500" /> },
    { label: "Topics Resolved", value: "98%", icon: <CheckCircle2 className="w-5 h-5 text-green-500" /> },
    { label: "Daily Posts", value: "850+", icon: <MessageSquare className="w-5 h-5 text-blue-500" /> }
  ];

  return (
    <main className={UI.pageWrapper}>
      
      {/* 🟢 NEW CONSISTENT HERO INJECTION */}
      <GlobalHero 
        badgeText="Developer Community"
        badgeIcon={<Code className="w-4 h-4" />}
        titleTop="Build better,"
        titleGradient="together."
        description="Join thousands of engineers building the future of business operations on Fluto OS. Ask questions, share your builds, and get help from core maintainers."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button className={UI.buttonPrimary}>
            Start New Discussion <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className={UI.buttonSecondary}>
            Browse Categories
          </button>
        </div>
      </GlobalHero>

      {/* STATS BANNER */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
           {stats.map((stat, i) => (
             <div key={i} className="p-5 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-lg flex items-center justify-center gap-4 text-center sm:text-left">
               <div className="p-3 bg-indigo-50 dark:bg-white/5 rounded-xl">{stat.icon}</div>
               <div>
                 <div className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
               </div>
             </div>
           ))}
        </motion.div>
      </section>

      {/* DISCUSSIONS LIST */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <h2 className={`${UI.sectionHeading} ${UI.headingColor}`}>Recent Activity</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-indigo-50 dark:bg-white/10 text-sm font-bold text-indigo-700 dark:text-white">Latest</button>
            <button className="px-4 py-2 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Top</button>
            <button className="px-4 py-2 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">Unanswered</button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 rounded-3xl shadow-sm overflow-hidden">
          <div className="hidden sm:grid grid-cols-12 gap-4 p-5 border-b border-gray-100 dark:border-white/5 text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50 dark:bg-white/[0.02]">
            <div className="col-span-7">Topic</div>
            <div className="col-span-2 text-center">Category</div>
            <div className="col-span-1 text-center">Replies</div>
            <div className="col-span-2 text-right">Activity</div>
          </div>
          
          <div className="divide-y divide-gray-100 dark:divide-white/5">
            {discussions.map((post, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors items-center group cursor-pointer">
                <div className="col-span-1 sm:col-span-7">
                  <div className="flex items-start gap-3">
                    {post.solved ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <HelpCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1.5">
                        {post.title}
                      </h3>
                      <div className="text-xs text-gray-500 font-medium flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-[10px] flex items-center justify-center font-bold text-indigo-700 dark:text-indigo-300">
                          {post.author.charAt(0).toUpperCase()}
                        </div>
                        {post.author}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 sm:col-span-2 flex items-center justify-start sm:justify-center">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/5">
                    {post.category}
                  </span>
                </div>
                <div className="hidden sm:flex col-span-1 items-center justify-center">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-400">{post.replies}</span>
                </div>
                <div className="hidden sm:flex col-span-2 items-center justify-end text-sm font-bold text-gray-500 gap-4">
                  {post.time}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}