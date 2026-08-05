import { HomePageData } from "@/types/api";

export const homePageDb: HomePageData = {
  seo: {
    title: "Fluto OS | The Ultimate Enterprise Operating System",
    description: "Unify your CRM, ERP, Support, and Finance in one blazing fast platform.",
  },
  hero: {
    badgeText: "Fluto OS 2.0 is Live",
    headingTop: "Your Entire Business.",
    headingGradient: "One Powerful OS.",
    subheading: "Replace your fragmented tech stack. Fluto centralizes workflows, data, and collaboration into a single, high-performance workspace designed for scale.",
    primaryCta: { label: "Start Free Trial", link: "/register", isPrimary: true },
    secondaryCta: { label: "Talk to Sales", link: "/enterprise", isPrimary: false },
  },
  modules: [
    { id: "m1", name: "Fluto Campaigns", tagline: "Marketing & Automation", desc: "Drive revenue with AI-optimized email campaigns and intelligent behavior tracking.", iconName: "mail", link: "/products/campaigns", badge: "Growth" },
    { id: "m2", name: "Fluto CRM", tagline: "Sales Pipeline Engine", desc: "Turn relationships into revenue effortlessly. Manage pipelines and close enterprise deals faster.", iconName: "briefcase", link: "/products/crm", badge: "Popular" },
    { id: "m3", name: "Fluto Books", tagline: "Smart Accounting", desc: "Get paid faster with automated, multi-currency billing and real-time financial reporting.", iconName: "calculator", link: "/products/books", badge: "Finance" },
    { id: "m4", name: "Fluto Desk", tagline: "Omnichannel Support", desc: "Deliver contextual, lightning-fast customer support with automated SLA tracking and zero noise.", iconName: "headphones", link: "/products/desk", badge: "Support" },
    { id: "m5", name: "Fluto Assets", tagline: "Inventory & Hardware", desc: "Track IT hardware, software licenses, and physical company assets with absolute precision.", iconName: "box", link: "/products/assets", badge: "Operations" },
    { id: "m6", name: "Fluto ERP", tagline: "Resource Planning", desc: "End-to-end resource orchestration and supply chain management for high-scale operations.", iconName: "building", link: "/products/erp", badge: "Enterprise" },
  ],
  testimonials: [
    { id: "t1", quote: "Fluto eliminated our software silos completely.", desc: "We consolidated five different tools into one OS and cut our operational latency by 40%. The speed is unmatched.", author: "Daniel Rivera", role: "Director of Operations", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
    { id: "t2", quote: "The only platform built for true scale.", desc: "Native analytics connected directly to our bottom line. We stopped guessing and started making data-driven decisions instantly.", author: "Jason Miller", role: "VP of Engineering", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
    { id: "t3", quote: "From signup to full deployment in hours.", desc: "Syncing our existing tech stack was seamless. Fluto acts as the central nervous system for our entire global team.", author: "James T.", role: "Chief Revenue Officer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  ]
};