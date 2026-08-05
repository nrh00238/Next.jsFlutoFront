import { notFound } from "next/navigation";
import { productDatabase } from "@/lib/product-data";
import ProductHero from "@/components/product-sections/ProductHero";
import ProductFeatures from "@/components/product-sections/ProductFeatures";
import ProductSecurity from "@/components/product-sections/ProductSecurity";
import ProductTestimonials from "@/components/product-sections/ProductTestimonials";
import ProductStats from "@/components/product-sections/ProductStats";
import ProductFAQ from "@/components/product-sections/ProductFAQ";
import ProductPricing from "@/components/product-sections/ProductPricing";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = productDatabase[resolvedParams.slug];
  
  if (!data) return { title: 'Product Not Found - Fluto' };
  
  return {
    title: `${data.badge} | Fluto Operating System`,
    description: data.hero.subheading,
  };
}

export default async function DynamicProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const productData = productDatabase[resolvedParams.slug];

  if (!productData) {
    notFound(); 
  }

  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen transition-colors duration-300 selection:bg-indigo-500 selection:text-white overflow-hidden text-gray-900 dark:text-gray-100">
      <ProductHero badge={productData.badge} hero={productData.hero} slug={productData.slug} // <-- Ye pass karna zaroori hai ab
/>
      <ProductFeatures heading={productData.features.sectionHeading} subheading={productData.features.sectionSubheading} features={productData.features.items} />
      <ProductSecurity security={productData.security} />
      <ProductTestimonials testimonials={productData.testimonials} />
      <ProductStats stats={productData.stats} />
      <ProductFAQ faqs={productData.faqs} />
      <ProductPricing tiers={productData.pricing} />
      <Footer />
    </main>
  );
}