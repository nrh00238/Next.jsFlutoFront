import type { Metadata } from "next";
import ProductHero from "@/components/product-sections/ProductHero";
import ProductFeatures from "@/components/product-sections/ProductFeatures";
import ProductComparison from "@/components/product-sections/ProductComparison";
import ProductIntegrations from "@/components/product-sections/ProductIntegrations";
import ProductTestimonials from "@/components/product-sections/ProductTestimonials";
import ProductStats from "@/components/product-sections/ProductStats";
import ProductFAQ from "@/components/product-sections/ProductFAQ";
import ProductPricing from "@/components/product-sections/ProductPricing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fluto One | The Ultimate Marketing & Business Suite",
  description: "Replace your fragmented marketing stack with one unified OS. AI Campaign Automation, Lead Scoring, and Omnichannel outreach.",
};

export default function FlutoOnePage() {
  const flutoOneData = {
    badge: "Fluto One Ultimate Suite",
    hero: {
      headingTop: "The ultimate marketing",
      headingGradient: "& business power-pack.",
      subheading: "Replace your fragmented marketing stack with one unified OS. Seamlessly connect AI campaign automation, lead scoring, and omnichannel outreach.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Talk to Experts"
    },
    features: {
      sectionHeading: "Everything you need to scale revenue.",
      sectionSubheading: "Core marketing modules natively connected to your sales and support data.",
      items: [
        { title: "AI Campaign Automation", desc: "Generate multi-step email and WhatsApp journeys that optimize themselves for conversions.", colSpan: "col-span-1 md:col-span-2", icon: "brain" },
        { title: "Omnichannel Outreach", desc: "Engage leads across Web, Email, and Social from one shared inbox.", colSpan: "col-span-1", icon: "dashboard" },
        { title: "Lead Scoring", desc: "Automatically rank and prioritize leads based on engagement and behavioral data.", colSpan: "col-span-1", icon: "target" },
        { title: "Unified Analytics", desc: "Track ROI from ad-click to closed-deal in a single customized dashboard.", colSpan: "col-span-1 md:col-span-2", icon: "barChart" }
      ]
    },
    testimonials: [
      { quote: "Fluto One eliminated 5 different subscriptions for our agency. The ROI dashboard is incredibly accurate.", author: "Daniel M.", role: "CMO" },
      { quote: "Our lead-to-close ratio increased by 40% simply because marketing and sales finally share the exact same data.", author: "Priya S.", role: "VP of Sales" },
      { quote: "The AI campaign builder writes better subject lines than our copywriters. A complete game changer.", author: "Arjun K.", role: "Growth Lead" }
    ],
    stats: [
      { value: "45%", label: "Avg Cost Savings" },
      { value: "3x", label: "Faster Campaign Setup" },
      { value: "10+", label: "Tools Replaced" },
      { value: "100%", label: "Data Unification" }
    ],
    faqs: [
      { q: "Can I buy individual tools instead of Fluto One?", a: "Yes, you can purchase Fluto CRM, Campaigns, or Desk separately. However, Fluto One saves you over 40% if you use 2 or more products." },
      { q: "How long does it take to migrate our marketing data?", a: "Most teams fully migrate their contacts, templates, and pipelines within 48 hours using our native import tools." },
      { q: "Is WhatsApp Business API included?", a: "Yes, the Fluto One suite includes direct access to the WhatsApp Business API for omnichannel outreach." }
    ],
    pricing: [
      { name: "Starter Marketing", price: "0", desc: "For solo creators and early startups.", features: ["Up to 1,000 Contacts", "Basic Email Automation", "Shared Support Inbox", "Community Access"], buttonText: "Start for free", isPopular: false },
      { name: "Growth Suite", price: "3,999", desc: "For scaling agencies and businesses.", features: ["Up to 25,000 Contacts", "Omnichannel & WhatsApp", "AI Lead Scoring", "Advanced ROI Analytics", "Priority Support"], buttonText: "Start 14-day trial", isPopular: true },
      { name: "Infinite Scale", price: "Custom", desc: "For high-volume enterprise operations.", features: ["Unlimited Contacts", "Dedicated IP Addresses", "Custom SLA & Whitelabeling", "Dedicated Success Manager"], buttonText: "Contact Sales", isPopular: false }
    ]
  };

  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen transition-colors duration-300 selection:bg-indigo-500 selection:text-white overflow-hidden text-gray-900 dark:text-gray-100">
      
      <ProductHero badge={flutoOneData.badge} hero={flutoOneData.hero} slug="one" />
      
      <ProductFeatures 
        heading={flutoOneData.features.sectionHeading} 
        subheading={flutoOneData.features.sectionSubheading} 
        features={flutoOneData.features.items as any} 
      />
      
      <ProductComparison />
      
      <ProductIntegrations />
      
      <ProductStats stats={flutoOneData.stats} />
      <ProductTestimonials testimonials={flutoOneData.testimonials} />
      
      <ProductFAQ faqs={flutoOneData.faqs} />
      
      <ProductPricing tiers={flutoOneData.pricing} />
      
      <Footer />
    </main>
  );
}