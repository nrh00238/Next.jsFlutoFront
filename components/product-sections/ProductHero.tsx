"use client";

import { 
  ArrowRight, Sparkles, Box, Briefcase, 
  Building2, Mail, HeadphonesIcon, Calculator 
} from "lucide-react";
import { ProductConfig } from "@/lib/product-data";
import GlobalHero from "@/components/layout/GlobalHero";
import { Button } from "@/components/Button";

// Helper function to get the appropriate icon based on the product slug
const getProductIcon = (slug: string) => {
  const iconClass = "w-4 h-4";
  switch (slug) {
    case "crm": return <Briefcase className={iconClass} />;
    case "erp": return <Building2 className={iconClass} />;
    case "campaigns": return <Mail className={iconClass} />;
    case "desk": return <HeadphonesIcon className={iconClass} />;
    case "books": return <Calculator className={iconClass} />;
    case "assets": return <Box className={iconClass} />;
    default: return <Sparkles className={iconClass} />;
  }
};

// Added 'slug' to props
export default function ProductHero({ 
  badge, 
  hero, 
  slug 
}: { 
  badge: string; 
  hero: ProductConfig["hero"]; 
  slug: string; 
}) {
  
  return (
    <GlobalHero 
      badgeText={badge}
      badgeIcon={getProductIcon(slug)}
      titleTop={hero.headingTop}
      titleGradient={hero.headingGradient}
      description={hero.subheading}
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
        <Button href="/register" variant="primary" size="md">
          {hero.ctaPrimary} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button href="/contact" variant="secondary" size="md">
          <Sparkles className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" /> {hero.ctaSecondary}
        </Button>
      </div>
    </GlobalHero>
  );
}