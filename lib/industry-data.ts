export interface IndustryData {
  slug: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  stats: { value: string; label: string }[];
  features: { title: string; desc: string; icon: string }[];
  relatedProducts: { name: string; desc: string; icon: string; link: string }[];
  faqs: { q: string; a: string }[];
}

export const industryDatabase: Record<string, IndustryData> = {
  fintech: {
    slug: "fintech",
    badge: "Fintech & Banking",
    title: "Unify financial operations with absolute",
    highlight: "security.",
    description: "Fluto OS empowers financial institutions to manage ledgers, automate compliance, and scale customer support with SOC2 Type II and ISO 27001 certified architecture.",
    stats: [
      { value: "100%", label: "Audit Compliance" },
      { value: "0", label: "Data Breaches" },
      { value: "3x", label: "Faster Reconciliation" }
    ],
    features: [
      { title: "Immutable Audit Trails", desc: "Every transaction, ticket, and CRM update is logged with bank-grade encryption and time-stamping.", icon: "shield" },
      { title: "Automated Ledgers", desc: "Fluto Books natively syncs with multi-currency gateways for zero-lag financial reporting.", icon: "calculator" },
      { title: "KYC & Lead Scoring", desc: "Automatically verify and score high-net-worth leads in Fluto CRM based on secure API webhooks.", icon: "zap" }
    ],
    relatedProducts: [
      { name: "Fluto Books", desc: "Secure multi-currency accounting.", icon: "calculator", link: "/products/books" },
      { name: "Fluto CRM", desc: "Manage high-net-worth clients.", icon: "briefcase", link: "/products/crm" },
      { name: "Fluto Desk", desc: "Secure priority client support.", icon: "headphones", link: "/products/desk" }
    ],
    faqs: [
      { q: "Is Fluto OS compliant with financial regulations?", a: "Yes, Fluto OS is SOC2 Type II, ISO 27001 certified, and supports custom data residency requirements for global banking regulations." },
      { q: "Can we integrate our proprietary core banking system?", a: "Absolutely. Our Enterprise plan includes dedicated API access and a success engineer to build secure, direct bridges to your core." }
    ]
  },
  healthcare: {
    slug: "healthcare",
    badge: "Healthcare",
    title: "Patient-first management without the",
    highlight: "friction.",
    description: "Connect patient scheduling, billing, and support in one HIPAA-ready operating system designed to reduce administrative bloat and improve care delivery.",
    stats: [
      { value: "40%", label: "Reduced Admin Time" },
      { value: "HIPAA", label: "Ready Infrastructure" },
      { value: "24/7", label: "Automated Triage" }
    ],
    features: [
      { title: "Unified Patient Records", desc: "Track patient interactions across chat, email, and front-desk securely within Fluto CRM.", icon: "heart" },
      { title: "Smart Scheduling Automations", desc: "Trigger appointment reminders and follow-ups automatically via Fluto Campaigns.", icon: "calendar" },
      { title: "Secure Telehealth Ticketing", desc: "Manage patient queries and telemedicine follow-ups in a strictly access-controlled Fluto Desk.", icon: "lock" }
    ],
    relatedProducts: [
      { name: "Fluto Desk", desc: "HIPAA-ready patient support.", icon: "headphones", link: "/products/desk" },
      { name: "Fluto CRM", desc: "Unified patient interaction records.", icon: "briefcase", link: "/products/crm" },
      { name: "Fluto Campaigns", desc: "Automated appointment reminders.", icon: "mail", link: "/products/campaigns" }
    ],
    faqs: [
      { q: "Do you sign Business Associate Agreements (BAAs)?", a: "Yes, we sign BAAs for our Enterprise healthcare clients to ensure full HIPAA compliance." },
      { q: "How is patient data isolated?", a: "Enterprise clients receive single-tenant cloud hosting, ensuring patient data is physically isolated and encrypted at rest." }
    ]
  },
  retail: {
    slug: "retail",
    badge: "Retail & E-commerce",
    title: "Omnichannel retail orchestration at",
    highlight: "scale.",
    description: "From warehouse inventory sync to post-purchase customer support, Fluto OS unifies your entire retail lifecycle to drive repeat revenue.",
    stats: [
      { value: "2.5x", label: "Higher Retention" },
      { value: "Real-time", label: "Inventory Sync" },
      { value: "10k+", label: "Orders/Minute Scale" }
    ],
    features: [
      { title: "Multi-Warehouse ERP", desc: "Track stock levels globally in real-time. Automatically generate purchase orders when inventory drops.", icon: "box" },
      { title: "Omnichannel Support Desk", desc: "Merge Instagram, WhatsApp, and Email support tickets into one inbox to resolve queries instantly.", icon: "headphones" },
      { title: "Post-Purchase Campaigns", desc: "Trigger AI-driven cross-sell emails and loyalty SMS based on purchase history.", icon: "mail" }
    ],
    relatedProducts: [
      { name: "Fluto ERP", desc: "Multi-warehouse inventory scaling.", icon: "factory", link: "/products/erp" },
      { name: "Fluto Desk", desc: "Omnichannel customer support.", icon: "headphones", link: "/products/desk" },
      { name: "Fluto Campaigns", desc: "E-commerce retention marketing.", icon: "mail", link: "/products/campaigns" }
    ],
    faqs: [
      { q: "Does this integrate with Shopify or Magento?", a: "Yes, Fluto OS has native integrations and API webhooks for major e-commerce platforms to sync orders and inventory instantly." },
      { q: "Can we handle seasonal traffic spikes?", a: "Our infrastructure auto-scales to handle Black Friday and holiday traffic spikes without a single dropped ticket." }
    ]
  },
  saas: {
    slug: "saas",
    badge: "Tech & SaaS",
    title: "The growth engine for modern software",
    highlight: "companies.",
    description: "Built by a SaaS company for SaaS companies. Automate subscription billing, reduce churn with AI support, and align your GTM teams on one data source.",
    stats: [
      { value: "30%", label: "Churn Reduction" },
      { value: "1-Click", label: "Stripe Sync" },
      { value: "100%", label: "GTM Alignment" }
    ],
    features: [
      { title: "Subscription Analytics", desc: "Track MRR, ARR, and churn rates in real-time with direct billing gateway integrations.", icon: "chart" },
      { title: "Developer-First APIs", desc: "Trigger contextual in-app emails and CRM updates based on exact user behavior in your app.", icon: "code" },
      { title: "Automated Ticket Deflection", desc: "Use AI bots in Fluto Desk to resolve common L1 support queries automatically.", icon: "bot" }
    ],
    relatedProducts: [
      { name: "Fluto CRM", desc: "Manage SaaS pipelines & upgrades.", icon: "briefcase", link: "/products/crm" },
      { name: "Fluto Desk", desc: "Developer-friendly IT ticketing.", icon: "headphones", link: "/products/desk" },
      { name: "Fluto Campaigns", desc: "Automated onboarding journeys.", icon: "mail", link: "/products/campaigns" }
    ],
    faqs: [
      { q: "Can we trigger campaigns based on product usage?", a: "Yes, using our event-tracking API, you can trigger onboarding or upgrade emails the moment a user hits a specific milestone." },
      { q: "Does Fluto integrate with GitHub/Jira?", a: "Yes, support agents can instantly escalate Fluto Desk tickets to Jira issues or GitHub pull requests." }
    ]
  },
  manufacturing: {
    slug: "manufacturing",
    badge: "Manufacturing",
    title: "End-to-end supply chain visibility and",
    highlight: "control.",
    description: "Replace legacy on-premise systems with a lightning-fast, cloud-native ERP and Asset manager built for global manufacturing grids.",
    stats: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "18%", label: "OpEx Reduction" },
      { value: "Global", label: "Facility Sync" }
    ],
    features: [
      { title: "Raw Material Forecasting", desc: "AI-driven demand forecasting ensures you never overstock or halt production lines.", icon: "factory" },
      { title: "Asset Depreciation Tracking", desc: "Track heavy machinery lifecycles, maintenance schedules, and financial depreciation natively.", icon: "settings" },
      { title: "Vendor Portals", desc: "Give suppliers direct access to submit invoices and track purchase orders securely.", icon: "users" }
    ],
    relatedProducts: [
      { name: "Fluto ERP", desc: "Supply chain & logistics operations.", icon: "factory", link: "/products/erp" },
      { name: "Fluto Assets", desc: "Heavy machinery lifecycle tracking.", icon: "box", link: "/products/assets" },
      { name: "Fluto CRM", desc: "Manage vendor & supplier relations.", icon: "briefcase", link: "/products/crm" }
    ],
    faqs: [
      { q: "Can this replace SAP or Oracle for mid-market?", a: "Yes, Fluto ERP is specifically designed as a modern, high-speed alternative to legacy giants for mid-market and enterprise manufacturers." },
      { q: "Do you offer on-premise deployment?", a: "For strict regulatory or operational requirements, Fluto Enterprise offers dedicated private cloud and on-premise deployment options." }
    ]
  },
  education: {
    slug: "education",
    badge: "Education & EdTech",
    title: "Campus management and student success,",
    highlight: "unified.",
    description: "From lead generation for admissions to automated fee collection and alumni engagement, Fluto OS connects the entire student journey.",
    stats: [
      { value: "2x", label: "Admissions Conversion" },
      { value: "Zero", label: "Fee Collection Lag" },
      { value: "100%", label: "Campus Visibility" }
    ],
    features: [
      { title: "Admissions Pipeline", desc: "Track student applications, manage counselor follow-ups, and automate acceptance emails.", icon: "graduation" },
      { title: "Automated Fee Ledgers", desc: "Generate semester invoices automatically and collect payments via integrated gateways.", icon: "calculator" },
      { title: "Student Helpdesk", desc: "Provide students with a centralized portal for IT support, administrative queries, and counseling.", icon: "headphones" }
    ],
    relatedProducts: [
      { name: "Fluto CRM", desc: "Admissions & counselor pipeline.", icon: "briefcase", link: "/products/crm" },
      { name: "Fluto Books", desc: "Automated semester fee ledgers.", icon: "calculator", link: "/products/books" },
      { name: "Fluto Desk", desc: "Campus & IT student helpdesk.", icon: "headphones", link: "/products/desk" }
    ],
    faqs: [
      { q: "Can multiple departments use the system?", a: "Yes, you can create isolated workspaces for Admissions, Finance, and IT within the same unified Fluto OS." },
      { q: "Do you offer educational discounts?", a: "Yes, we offer special pricing structures for registered non-profit educational institutions." }
    ]
  }
};