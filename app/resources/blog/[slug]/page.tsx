// Local development mein self-signed SSL certificate error bypass karne ke liye
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, BookOpen, Clock, ArrowLeft, ArrowRight, Tag as TagIcon } from 'lucide-react';
import Footer from '@/components/Footer';
import ShareButtons from '@/components/blog/ShareButtons';

async function getBlogData(slug: string) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    
    const blogRes = await fetch(`${backendUrl}/api/v1/blogs/${slug}`, { cache: 'no-store' });
    if (!blogRes.ok) return { blog: null, prevBlog: null, nextBlog: null };
    const blogJson = await blogRes.json();
    const blog = blogJson?.data || blogJson || null;

    if (!blog) return { blog: null, prevBlog: null, nextBlog: null };

    const listRes = await fetch(`${backendUrl}/api/v1/blogs`, { cache: 'no-store' });
    const listJson = listRes.ok ? await listRes.json() : null;
    
    let rawBlogs = listJson?.data || listJson || [];
    let allBlogs = Array.isArray(rawBlogs) ? rawBlogs : (rawBlogs.data || []);

    if (Array.isArray(allBlogs) && allBlogs.length > 0) {
      allBlogs.sort((a: any, b: any) => {
        const timeA = new Date(a.published_at || a.created_at || a.updated_at || 0).getTime();
        const timeB = new Date(b.published_at || b.created_at || b.updated_at || 0).getTime();
        if (timeA !== timeB) return timeB - timeA; 
        return (b.id || 0) - (a.id || 0);
      });
    }

    let prevBlog = null;
    let nextBlog = null;

    if (Array.isArray(allBlogs) && allBlogs.length > 0) {
      const currentIndex = allBlogs.findIndex((b: any) => b.slug === slug);
      if (currentIndex !== -1) {
        if (currentIndex > 0) prevBlog = allBlogs[currentIndex - 1];
        if (currentIndex < allBlogs.length - 1) nextBlog = allBlogs[currentIndex + 1];
      }
    }

    return { blog, prevBlog, nextBlog };
  } catch (error) {
    console.error("Failed to fetch blog navigation details:", error);
    return { blog: null, prevBlog: null, nextBlog: null };
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { blog } = await getBlogData(slug);

  if (!blog) return { title: 'Blog Not Found' };

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt,
  };
}

// Reading time calculation
function calculateReadingTime(htmlContent: string) {
  if (!htmlContent) return "3 min read";
  const plainText = htmlContent.replace(/<[^>]*>?/gm, '');
  const wordCount = plainText.trim().split(/\s+/).length;
  const readingSpeed = 200;
  const minutes = Math.ceil(wordCount / readingSpeed);
  return `${minutes} min read`;
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { blog, prevBlog, nextBlog } = await getBlogData(slug);

  if (!blog) {
    notFound();
  }

  const coverImageUrl = blog.cover_image 
    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${blog.cover_image.replace(/^\/storage\//, '')}`
    : null;

  // Date Formatting
  const postDate = blog.published_at || blog.created_at;
  const formattedDate = postDate 
    ? new Date(postDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
    : 'Recent';

  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen text-gray-900 dark:text-white">
      
      {/* Compact Hero Section */}
      <section className="relative flex flex-col items-center pt-32 pb-14 px-4 sm:px-6 lg:px-8 w-full overflow-hidden bg-gradient-to-br from-blue-100/60 via-sky-50/50 to-indigo-100/40 dark:from-[#03091e] dark:via-[#030303] dark:to-[#091738]">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1400px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-sky-600/20 to-transparent dark:from-blue-600/30 dark:via-sky-900/20 blur-[140px] pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.25] dark:opacity-[0.15] pointer-events-none z-0"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {blog.categories && blog.categories.length > 0 ? (
              blog.categories.map((cat: any) => (
                <Link 
                  key={cat.id || cat.name} 
                  href={`/resources/blog?category=${encodeURIComponent(cat.name)}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-500/20 shadow-sm hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </Link>
              ))
            ) : (
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Fluto Insights</span>
              </div>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-snug mb-6 max-w-3xl">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.05] backdrop-blur-xl border border-indigo-100 dark:border-white/10 text-xs font-bold shadow-sm">
              <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[9px] font-black uppercase">
                {(blog.author?.name || 'F')[0]}
              </div>
              <span className="text-gray-700 dark:text-gray-200">{blog.author?.name || 'Fluto Admin'}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.05] backdrop-blur-xl border border-indigo-100 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-gray-400 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-indigo-500" />
              <span>{formattedDate}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-white/[0.05] backdrop-blur-xl border border-indigo-100 dark:border-white/10 text-xs font-medium text-gray-600 dark:text-gray-400 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              <span>{calculateReadingTime(blog.content)}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Layout with Sticky Right Share Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_60px] gap-8 lg:gap-14 items-start relative">
          
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            {coverImageUrl && (
              <div className="w-full h-72 sm:h-[400px] rounded-[2rem] overflow-hidden mb-12 shadow-2xl bg-gray-100 dark:bg-[#111] border border-gray-200/60 dark:border-white/5 relative group">
                <img 
                  src={coverImageUrl} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}

            <div 
              className="prose prose-indigo dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed space-y-6 text-base sm:text-lg"
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />

            <div className="block lg:hidden mt-12 pt-6 border-t border-gray-200 dark:border-white/10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Share this article:</span>
                <ShareButtons title={blog.title} />
              </div>
            </div>

            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mr-2 flex items-center gap-1.5">
                  <TagIcon className="w-3.5 h-3.5 text-indigo-500" /> Tags:
                </span>
                {blog.tags.map((tag: any) => (
                  <Link
                    key={tag.id || tag.name}
                    href={`/resources/blog?tag=${encodeURIComponent(tag.name)}`}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-500/25 transition-colors border border-indigo-100 dark:border-indigo-500/20 shadow-sm"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {prevBlog ? (
                <Link 
                  href={`/resources/blog/${prevBlog.slug}`} 
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5 hover:border-indigo-500/40 transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Newer Article
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {prevBlog.title}
                  </div>
                </Link>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-white/[0.01] border border-gray-200/40 dark:border-white/5 opacity-50 flex flex-col justify-between cursor-not-allowed">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    <ArrowLeft className="w-4 h-4" /> Newer Article
                  </div>
                  <div className="font-medium text-gray-400 text-sm">This is the latest article</div>
                </div>
              )}

              {nextBlog ? (
                <Link 
                  href={`/resources/blog/${nextBlog.slug}`} 
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5 hover:border-indigo-500/40 transition-all group flex flex-col justify-between text-left sm:text-right"
                >
                  <div className="flex items-center justify-start sm:justify-end gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
                    Older Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {nextBlog.title}
                  </div>
                </Link>
              ) : (
                <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-white/[0.01] border border-gray-200/40 dark:border-white/5 opacity-50 flex flex-col justify-between text-left sm:text-right cursor-not-allowed">
                  <div className="flex items-center justify-start sm:justify-end gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Older Article <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="font-medium text-gray-400 text-sm">You've reached the first article</div>
                </div>
              )}

            </div>

          </div>

          <div className="hidden lg:block sticky top-28 z-10">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Share</span>
              <ShareButtons title={blog.title} />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}