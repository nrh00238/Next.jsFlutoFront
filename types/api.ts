// Global SEO Type
export interface SeoMetadata {
  title: string;
  description: string;
}

// Global Button/CTA Type
export interface CallToAction {
  label: string;
  link: string;
  isPrimary: boolean;
}

// Homepage Specific Types
export interface HomeHeroData {
  badgeText: string;
  headingTop: string;
  headingGradient: string;
  subheading: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
}

export interface AppModuleData {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  iconName: string; // Store icon string from DB, map it to Lucide in frontend
  link: string;
  badge: string;
}

export interface TestimonialData {
  id: string;
  quote: string;
  desc: string;
  author: string;
  role: string;
  avatar: string;
}

export interface HomePageData {
  seo: SeoMetadata;
  hero: HomeHeroData;
  modules: AppModuleData[];
  testimonials: TestimonialData[];
}