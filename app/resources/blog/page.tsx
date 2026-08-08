"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock, Tag as TagIcon, Folder, X, User } from "lucide-react";
import { fadeUpVariant, UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams.get("category");
  const selectedTag = searchParams.get("tag");

  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        const [blogsRes, categoriesRes, tagsRes] = await Promise.all([
          fetch(`${backendUrl}/api/v1/blogs`),
          fetch(`${backendUrl}/api/v1/categories`).catch(() => null),
          fetch(`${backendUrl}/api/v1/blogtags`).catch(() => null),
        ]);

        const blogsJson = await blogsRes.json();
        if (blogsJson.success) {
          let fetchedBlogs = blogsJson.data.data || [];

          // Recent-First Sorting
          fetchedBlogs.sort((a: any, b: any) => {
            const timeA = new Date(a.published_at || a.created_at || a.updated_at || 0).getTime();
            const timeB = new Date(b.published_at || b.created_at || b.updated_at || 0).getTime();
            if (timeA !== timeB) return timeB - timeA;
            return (b.id || 0) - (a.id || 0);
          });

          setBlogs(fetchedBlogs);
        }

        if (categoriesRes && categoriesRes.ok) {
          const catJson = await categoriesRes.json();
          setCategories(catJson.data || catJson || []);
        }

        if (tagsRes && tagsRes.ok) {
          const tagJson = await tagsRes.json();
          setTags(tagJson.data || tagJson || []);
        }

      } catch (error) {
        console.error("Failed to fetch blog sidebar data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogData();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    let matchesCategory = true;
    let matchesTag = true;

    if (selectedCategory) {
      matchesCategory = blog.categories?.some(
        (c: any) => c.name.toLowerCase() === selectedCategory.toLowerCase() || c.slug === selectedCategory
      );
    }

    if (selectedTag) {
      matchesTag = blog.tags?.some(
        (t: any) => t.name.toLowerCase() === selectedTag.toLowerCase() || t.slug === selectedTag
      );
    }

    return matchesCategory && matchesTag;
  });

  const handleCategoryClick = (catName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategory === catName) {
      params.delete("category");
    } else {
      params.set("category", catName);
    }
    router.push(`/resources/blog?${params.toString()}`);
  };

  const handleTagClick = (tagName: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedTag === tagName) {
      params.delete("tag");
    } else {
      params.set("tag", tagName);
    }
    router.push(`/resources/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push(`/resources/blog`);
  };

  return (
    <main className={UI.pageWrapper}>
      
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

      {/* MAIN CONTENT WITH RIGHT SIDEBAR */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32 pt-20 relative z-20">
        
        {(selectedCategory || selectedTag) && (
          <div className="mb-8 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-900 dark:text-indigo-200">
              <span>Showing results for:</span>
              {selectedCategory && <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-xs">Category: {selectedCategory}</span>}
              {selectedTag && <span className="px-2.5 py-0.5 rounded-full bg-purple-600 text-white text-xs">Tag: #{selectedTag}</span>}
            </div>
            <button onClick={clearFilters} className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
              <X className="w-3.5 h-3.5" /> Clear Filter
            </button>
          </div>
        )}

        {loading ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400 font-medium">
            Loading articles...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400 font-medium">
            No blog posts found for this filter. <button onClick={clearFilters} className="text-indigo-600 underline block mx-auto mt-2">View all posts</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* Left 2 Columns: Filtered Blog Grid Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredBlogs.map((blog) => {
                const authorName = blog.author?.name || 'Fluto Admin';
                const postDate = blog.published_at || blog.created_at;
                const formattedDate = postDate 
                  ? new Date(postDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
                  : 'Recently Published';

                return (
                  <motion.div 
                    key={blog.id} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeUpVariant} 
                    className="group relative flex flex-col bg-white dark:bg-[#0A0A0A] rounded-[2rem] p-4 border border-gray-200/50 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300"
                  >
                    {/* 🟢 Poore box ko clickable banane ke liye Link wrapper with absolute fill */}
                    <Link href={`/resources/blog/${blog.slug}`} className="absolute inset-0 z-10" aria-label={blog.title} />

                    <div className="w-full h-44 rounded-[1.5rem] overflow-hidden mb-5 relative bg-gray-100 dark:bg-[#111]">
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
                      <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-900 dark:text-white shadow-sm z-20">
                        {blog.categories?.[0]?.name || "General"}
                      </div>
                    </div>
                    
                    <div className="px-2 flex flex-col flex-grow">
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1.5 font-semibold text-gray-800 dark:text-gray-200">
                          <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[9px] font-black uppercase">
                            {(blog.author?.name || 'Fluto Admin')[0]}
                          </div>
                          <span className="truncate max-w-[110px]">{blog.author?.name || 'Fluto Admin'}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px]">
                          <Clock className="w-3 h-3 text-indigo-500" />
                          <span>
                            {blog.published_at || blog.created_at 
                              ? new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
                              : 'Recent'}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-2 line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                        {blog.excerpt}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right 1 Column: Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-28">
              
              {/* Recent Blogs Widget */}
              <div className="bg-white dark:bg-[#0A0A0A] p-6 rounded-[2rem] border border-gray-200/60 dark:border-white/5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-500" /> Recent Posts
                </h3>
                <div className="space-y-4">
                  {blogs.slice(0, 4).map((rec) => {
                    const recDate = rec.published_at || rec.created_at;
                    const recFormattedDate = recDate 
                      ? new Date(recDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
                      : 'Recent';

                    return (
                      <Link key={rec.id} href={`/resources/blog/${rec.slug}`} className="group flex items-start gap-3 py-2 border-b border-gray-100 dark:border-white/5 last:border-0">
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 mb-1">
                            {rec.title}
                          </h4>
                          <span className="text-[10px] text-gray-500">
                            {recFormattedDate}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white dark:bg-[#0A0A0A] p-6 rounded-[2rem] border border-gray-200/60 dark:border-white/5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Folder className="w-4 h-4 text-indigo-500" /> Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.length > 0 ? categories.map((cat: any) => {
                    const isSelected = selectedCategory?.toLowerCase() === cat.name.toLowerCase();
                    return (
                      <button 
                        key={cat.id || cat.name} 
                        onClick={() => handleCategoryClick(cat.name)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          isSelected 
                            ? "bg-indigo-600 text-white shadow-md" 
                            : "bg-slate-50 dark:bg-white/5 border border-gray-200/60 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:border-indigo-500/40"
                        }`}
                      >
                        {cat.name}
                      </button>
                    );
                  }) : (
                    <span className="text-xs text-gray-400">No categories found</span>
                  )}
                </div>
              </div>

              {/* Tags Widget */}
              <div className="bg-white dark:bg-[#0A0A0A] p-6 rounded-[2rem] border border-gray-200/60 dark:border-white/5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <TagIcon className="w-4 h-4 text-indigo-500" /> Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.length > 0 ? tags.map((tag: any) => {
                    const isSelected = selectedTag?.toLowerCase() === tag.name.toLowerCase();
                    return (
                      <button 
                        key={tag.id || tag.name} 
                        onClick={() => handleTagClick(tag.name)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-purple-600 text-white shadow-md"
                            : "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20"
                        }`}
                      >
                        #{tag.name}
                      </button>
                    );
                  }) : (
                    <span className="text-xs text-gray-400">No tags found</span>
                  )}
                </div>
              </div>

            </aside>

          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}