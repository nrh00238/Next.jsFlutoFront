import type { Metadata } from "next";
import { getHomePageData } from "@/services/homeService";
import { UI } from "@/lib/constants";
import Footer from "@/components/Footer";

// Client Components
import HeroSection from "@/components/home-sections/HeroSection";
import TrustBanner from "@/components/home-sections/TrustBanner";
import AppsEcosystem from "@/components/home-sections/AppsEcosystem";
import FlutoOnePitch from "@/components/home-sections/FlutoOnePitch";
import FeatureHighlights from "@/components/home-sections/FeatureHighlights";
import AiFeatures from "@/components/home-sections/AiFeatures";
import HowItWorks from "@/components/home-sections/HowItWorks";
import TestimonialsMarquee from "@/components/home-sections/TestimonialsMarquee";
import IntegrationsOrbit from "@/components/home-sections/IntegrationsOrbit";
import FinalCTA from "@/components/home-sections/FinalCTA";

// Dynamic SEO from Backend
export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageData();
  return {
    title: data?.seo.title || "Fluto OS | The Enterprise Operating System",
    description: data?.seo.description || "Unify your entire business operations.",
  };
}

export default async function Home() {
  // FETCH DATA FROM API BRIDGE (Laravel/Mock DB)
  const data = await getHomePageData();

  if (!data) {
    return <div className="p-20 text-center text-white font-bold">Error loading homepage data from server.</div>;
  }

  return (
    <main className={UI.pageWrapper}>
      {/* PASS HERO DATA TO YOUR CUSTOM HERO SECTION */}
      <HeroSection heroData={data.hero} />
      
      <TrustBanner />
      
      {/* PASS MODULES DATA FROM BACKEND */}
      {/* <AppsEcosystem modules={data.modules} /> (Update this component next to accept props) */}
      <AppsEcosystem /> 
      
      <FlutoOnePitch />
      <FeatureHighlights />
      <AiFeatures />
      <HowItWorks />
      
      {/* PASS TESTIMONIALS DATA FROM BACKEND */}
      {/* <TestimonialsMarquee testimonials={data.testimonials} /> (Update this component next to accept props) */}
      <TestimonialsMarquee />
      
      <IntegrationsOrbit />
      <FinalCTA />
      
      <Footer />
    </main>
  );
}