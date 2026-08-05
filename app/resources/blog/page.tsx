"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { fadeUpVariant, UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";
import Link from "next/link";

export default function BlogPage() {
  const articles = [
    { title: "Scaling Customer Support with AI Chatbots", category: "Guides", time: "5 min read", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
    { title: "Fluto OS 2.0: Unified Analytics Engine", category: "Product", time: "3 min read", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
    { title: "Building secure multi-tenant architectures", category: "Engineering", time: "8 min read", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" },
    { title: "Top 5 Email Marketing Strategies for Q4", category: "Marketing", time: "6 min read", img: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&q=80" },
    { title: "The Ultimate Guide to ERP Migrations", category: "Guides", time: "12 min read", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80" },
    { title: "How we achieved 99.99% uptime in 2024", category: "Engineering", time: "10 min read", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" }
  ];

  return (
    <main className={UI.pageWrapper}>
      
      {/* 🟢 SHORT 2-LINE HEADING */}
      <GlobalHero 
        badgeText="Fluto Blog"
        badgeIcon={<BookOpen className="w-4 h-4" />}
        titleTop="Latest Updates &"
        titleGradient="Technical Guides."
        description="Stay updated with product releases, read engineering deep-dives, and learn enterprise growth strategies."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button className={UI.buttonPrimary}>
            Subscribe to Newsletter <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </GlobalHero>

      {/* BLOG GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="group cursor-pointer flex flex-col bg-white dark:bg-[#0A0A0A] rounded-[2rem] p-4 border border-gray-200/50 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300">
              <div className="w-full h-48 rounded-[1.5rem] overflow-hidden mb-6 relative bg-gray-100 dark:bg-[#111]">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-900 dark:text-white shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">
                  <Clock className="w-3 h-3" /> <span>{article.time}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-4">
                  {article.title}
                </h3>
                <div className="mt-auto text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center">
                  Read Article <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}