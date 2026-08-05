import { Mail, Briefcase, Calculator, HeadphonesIcon, Box, Building2 } from "lucide-react";
import { cubicBezier } from "framer-motion";

// 1. GLOBAL UI CONFIGURATION
export const UI = {
  pageWrapper: "bg-white dark:bg-[#030303] min-h-screen transition-colors duration-300 selection:bg-indigo-500 selection:text-white overflow-hidden text-gray-900 dark:text-gray-100 pb-12",
  heroHeading: "text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.05]",
  sectionHeading: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight",
  headingColor: "text-indigo-950 dark:text-white",
  darkSectionColor: "text-white",

  badge: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100/50 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm",
  badgeDark: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest shadow-lg backdrop-blur-md",

  buttonPrimary: "inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(79,70,229,0.3)] group relative overflow-hidden",
  buttonSecondary: "inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-sm hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-white/5 transition-all shadow-sm group",
  
  buttonDarkPrimary: "inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-950 font-bold text-sm hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.2)] group",
  buttonDarkSecondary: "inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white border border-white/15 font-bold text-sm hover:bg-white/20 transition-all text-center group",
};

// 2. UNIFIED ENTERPRISE DATA
export const apps = [
  { name: "Fluto Campaigns", tagline: "Marketing & Automation", desc: "Drive revenue with AI-optimized email campaigns and intelligent behavior tracking.", iconbg: "bg-blue-50 dark:bg-[#111]", icon: <Mail className="w-5 h-5 text-blue-500" />, link: "/products/campaigns", badge: "Growth" },
  { name: "Fluto CRM", tagline: "Sales Pipeline Engine", desc: "Turn relationships into revenue effortlessly. Manage pipelines and close enterprise deals faster.", iconbg: "bg-indigo-50 dark:bg-[#111]", icon: <Briefcase className="w-5 h-5 text-indigo-500" />, link: "/products/crm", badge: "Popular" },
  { name: "Fluto Books", tagline: "Smart Accounting", desc: "Get paid faster with automated, multi-currency billing and real-time financial reporting.", iconbg: "bg-green-50 dark:bg-[#111]", icon: <Calculator className="w-5 h-5 text-green-500" />, link: "/products/books", badge: "Finance" },
  { name: "Fluto Desk", tagline: "Omnichannel Support", desc: "Deliver contextual, lightning-fast customer support with automated SLA tracking and zero noise.", iconbg: "bg-red-50 dark:bg-[#111]", icon: <HeadphonesIcon className="w-5 h-5 text-red-500" />, link: "/products/desk", badge: "Support" },
  { name: "Fluto Assets", tagline: "Inventory & Hardware", desc: "Track IT hardware, software licenses, and physical company assets with absolute precision.", iconbg: "bg-orange-50 dark:bg-[#111]", icon: <Box className="w-5 h-5 text-orange-500" />, link: "/products/assets", badge: "Operations" },
  { name: "Fluto ERP", tagline: "Resource Planning", desc: "End-to-end resource orchestration and supply chain management for high-scale operations.", iconbg: "bg-purple-50 dark:bg-[#111]", icon: <Building2 className="w-5 h-5 text-purple-500" />, link: "/products/erp", badge: "Enterprise" },
];

export const integrations = [
  { name: "Slack", radius: 120, angle: 0 },
  { name: "AWS", radius: 200, angle: 45 },
  { name: "Stripe", radius: 120, angle: 90 },
  { name: "GitHub", radius: 200, angle: 135 },
  { name: "Jira", radius: 120, angle: 180 },
  { name: "Zendesk", radius: 200, angle: 225 },
  { name: "Zoom", radius: 120, angle: 270 },
  { name: "Figma", radius: 200, angle: 315 },
];

export const testimonials = [
  {
    quote: "Fluto eliminated our software silos completely.",
    desc: "We consolidated five different tools into one OS and cut our operational latency by 40%. The speed is unmatched.",
    author: "Daniel Rivera",
    role: "Director of Operations",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote: "The only platform built for true scale.",
    desc: "Native analytics connected directly to our bottom line. We stopped guessing and started making data-driven decisions instantly.",
    author: "Jason Miller",
    role: "VP of Engineering",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote: "From signup to full deployment in hours.",
    desc: "Syncing our existing tech stack was seamless. Fluto acts as the central nervous system for our entire global team.",
    author: "James T.",
    role: "Chief Revenue Officer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote: "Fluto One is an undeniable advantage.",
    desc: "Predictable pricing and infinite workflows. It replaced $4,000/mo worth of scattered subscriptions for our agency.",
    author: "Anika Roy",
    role: "Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
];

// 3. PREMIUM ANIMATION VARIANTS
export const customEase = cubicBezier(0.22, 1, 0.36, 1);
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: customEase } }
};
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};