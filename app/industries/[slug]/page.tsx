import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industryDatabase } from "@/lib/industry-data";
import Footer from "@/components/Footer";
import { Button }from "@/components/Button";

import { 
  IndustryClientHero, 
  IndustryClientFeatures, 
  IndustryClientStats, 
  IndustryClientFAQ, 
  IndustryClientProducts 
} from "./IndustryClientComponents";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = industryDatabase[resolvedParams.slug];
  
  if (!data) return { title: 'Industry Not Found - Fluto OS' };
  
  return {
    title: `${data.badge} Solutions | Fluto OS`,
    description: data.description,
  };
}

export default async function DynamicIndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = industryDatabase[resolvedParams.slug];

  if (!data) {
    notFound(); 
  }

  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen transition-colors duration-300 selection:bg-indigo-500 selection:text-white overflow-hidden text-gray-900 dark:text-gray-100 pb-12">
      
      {/* 1. HERO SECTION */}
      <IndustryClientHero badge={data.badge} title={data.title} highlight={data.highlight} description={data.description} />
      
      {/* 2. ROI STATS */}
      <IndustryClientStats stats={data.stats} />
      
      {/* 3. INDUSTRY FEATURES */}
      <IndustryClientFeatures features={data.features} />
      
      {/* 4. RECOMMENDED PRODUCTS SECTION */}
      <IndustryClientProducts products={data.relatedProducts} badge={data.badge} />
      
      {/* 5. ENTERPRISE COMPLIANCE */}
      <section className="py-24 bg-gray-900 dark:bg-[#0A0A0A] text-white relative overflow-hidden border-y border-gray-800 dark:border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Enterprise-grade security, built in.</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Regardless of your sector, Fluto OS enforces strictly isolated data architectures, SSO, and global compliance out of the box.</p>
          <div className="flex flex-wrap justify-center gap-4">
             <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/10 backdrop-blur-md">SOC 2 Type II</span>
             <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/10 backdrop-blur-md">ISO 27001</span>
             <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/10 backdrop-blur-md">GDPR Compliant</span>
             <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/10 backdrop-blur-md">256-bit Encryption</span>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY FAQS */}
      <IndustryClientFAQ faqs={data.faqs} />
      
      {/* 7. BOTTOM CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-indigo-900 via-indigo-950 to-black p-12 text-white text-center relative overflow-hidden shadow-2xl border border-indigo-500/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">Ready to transform your operations?</h2>
            <p className="text-indigo-200 text-base mb-8">Speak with our {data.badge} integration specialists to build a custom deployment blueprint.</p>
            <div className="flex justify-center gap-4">
              <Button href="/company/contact" variant="primary" size="md">
                Book Architecture Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}