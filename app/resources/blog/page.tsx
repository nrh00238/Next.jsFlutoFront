"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock } from "lucide-react";
import { fadeUpVariant, UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs`);
        const json = await res.json();
        if (json.success) {
          let fetchedBlogs = json.data.data || []; // Laravel pagination inner data array

          // 🟢 RECENT-FIRST SORTING: Sort by published_at or created_at descending (Newest first)
          fetchedBlogs.sort((a: any, b: any) => {
            const timeA = new Date(a.published_at || a.created_at || a.updated_at || 0).getTime();
            const timeB = new Date(b.published_at || b.created_at || b.updated_at || 0).getTime();
            
            if (timeA !== timeB) {
              return timeB - timeA; // Newest first
            }
            return (b.id || 0) - (a.id || 0); // Fallback by ID
          });

          setBlogs(fetchedBlogs);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

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
          <Button variant="primary" href="#subscribe-newsletter" size="md">
            Subscribe to Newsletter <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </GlobalHero>

      {/* BLOG GRID */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32 pt-32 -mt-8 relative z-20">
        {loading ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400 font-medium">
            Loading articles...
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400 font-medium">
            No published blog posts found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <motion.div 
                key={blog.id} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeUpVariant} 
                className="group cursor-pointer flex flex-col bg-white dark:bg-[#0A0A0A] rounded-[2rem] p-4 border border-gray-200/50 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-full h-48 rounded-[1.5rem] overflow-hidden mb-6 relative bg-gray-100 dark:bg-[#111]">
                  {blog.cover_image ? (
                    <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${blog.cover_image.replace(/^\/storage\//, '')}`} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                      No Image Available
                    </div>
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-900 dark:text-white shadow-sm">
                    {blog.categories?.[0]?.name || "General"}
                  </div>
                </div>
                <div className="px-2 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> 
                    <span>{blog.published_at ? new Date(blog.published_at).toLocaleDateString() : 'Recent'}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto pt-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center">
                    <Link href={`/resources/blog/${blog.slug}`} className="flex items-center w-full">
                      Read Article <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}