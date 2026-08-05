// Define Strict TypeScript Interfaces for the Product Schema
export interface FeatureData {
  title: string;
  desc: string;
  colSpan: string;
  icon: string; 
}

export interface SecurityData {
  heading: string;
  description: string;
  tags: { label: string; icon: string }[];
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
}

export interface StatData {
  value: string;
  label: string;
}

export interface FAQData {
  q: string;
  a: string;
}

export interface PricingTier {
  name: string;
  price: string; 
  desc: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

export interface ProductConfig {
  slug: string;
  badge: string;
  hero: {
    headingTop: string;
    headingGradient: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    sectionHeading: string;
    sectionSubheading: string;
    items: FeatureData[];
  };
  security: SecurityData;
  testimonials: TestimonialData[];
  stats: StatData[];
  faqs: FAQData[];
  pricing: PricingTier[];
}

// ============================================================================
// FULL PRODUCT DATABASE (All 6 Navbar Products Included)
// ============================================================================
export const productDatabase: Record<string, ProductConfig> = {
  crm: {
    slug: "crm",
    badge: "Fluto CRM",
    hero: {
      headingTop: "Accelerate sales.",
      headingGradient: "Multiply revenue.",
      subheading: "Manage sales pipelines, track leads in real-time, and close enterprise deals faster with our AI-powered CRM built for modern teams.",
      ctaPrimary: "Start CRM Free Trial",
      ctaSecondary: "Talk to Experts"
    },
    features: {
      sectionHeading: "Engineered for sales velocity.",
      sectionSubheading: "Everything you need to close deals, packed into a stunning interface.",
      items: [
        { title: "Intelligent Pipeline", desc: "Drag and drop deals, set automated triggers, and never let a lead go cold.", colSpan: "col-span-1 md:col-span-2", icon: "filter" },
        { title: "Real-Time Sync", desc: "Data updates globally across your entire workspace instantly.", colSpan: "col-span-1", icon: "zap" },
        { title: "Custom Dashboards", desc: "Build tailored views for your sales team in seconds.", colSpan: "col-span-1", icon: "dashboard" },
        { title: "Identity Access", desc: "Role-based access control out of the box.", colSpan: "col-span-1 md:col-span-2", icon: "fingerprint" }
      ]
    },
    security: {
      heading: "Your sales data privacy is our absolute priority.",
      description: "We employ bank-grade encryption and strict compliance protocols to ensure your client data and revenue metrics are never compromised.",
      tags: [
        { label: "GDPR Compliant", icon: "lock" },
        { label: "SOC 2 Type II", icon: "server" }
      ]
    },
    testimonials: [
      { quote: "This tool completely shifted our pipeline velocity. We close deals 30% faster now.", author: "Sarah J.", role: "Sales Head" },
      { quote: "The cleanest UI I've ever seen in a SaaS product. Onboarding took literally 5 minutes.", author: "Rahul M.", role: "CEO" },
      { quote: "Fluto's reporting is magical. We finally have real-time visibility into our revenue.", author: "Emily R.", role: "Ops Manager" }
    ],
    stats: [
      { value: "₹2.4B+", label: "Deals Closed" },
      { value: "42,000+", label: "Active Sales Reps" },
      { value: "99.99%", label: "Uptime Guaranteed" },
      { value: "24/7", label: "Dedicated Support" }
    ],
    faqs: [
      { q: "Is it easy to migrate my leads from HubSpot/Salesforce?", a: "Absolutely. We offer a one-click migration tool that imports your data safely." },
      { q: "Can I upgrade or downgrade my plan later?", a: "Yes, you can change your plan at any time. Prorated charges will be applied automatically." },
      { q: "Do you offer custom integrations?", a: "Yes, our Enterprise plan includes API access and dedicated support for custom webhooks." }
    ],
    pricing: [
      { name: "Free", price: "0", desc: "Perfect for individuals and freelancers.", features: ["Up to 3 Users", "Basic Pipeline", "Community Support", "1 GB Storage"], buttonText: "Start for free", isPopular: false },
      { name: "Pro", price: "1,999", desc: "Ideal for growing sales teams.", features: ["Unlimited Users", "AI Lead Scoring", "Priority 24/7 Support", "100 GB Storage", "Custom Workflows"], buttonText: "Start 14-day trial", isPopular: true },
      { name: "Custom", price: "Custom", desc: "Dedicated infrastructure for large enterprises.", features: ["SSO & Advanced Security", "Dedicated Success Manager", "SLA Guarantee", "Unlimited Storage"], buttonText: "Contact Sales", isPopular: false }
    ]
  },
  erp: {
    slug: "erp",
    badge: "Fluto ERP",
    hero: {
      headingTop: "Unify operations.",
      headingGradient: "Scale globally.",
      subheading: "Manage supply chains, inventory, and operations for high-scale enterprise operations all in one unified platform.",
      ctaPrimary: "Deploy ERP",
      ctaSecondary: "Talk to Experts"
    },
    features: {
      sectionHeading: "Built for massive scale.",
      sectionSubheading: "Automate your entire backend operations.",
      items: [
        { title: "Supply Chain", desc: "Track raw materials to finished goods in real-time.", colSpan: "col-span-1", icon: "box" },
        { title: "Multi-Warehouse", desc: "Manage inventory across multiple global locations.", colSpan: "col-span-1 md:col-span-2", icon: "building" },
        { title: "Automated Ledger", desc: "Every transaction syncs directly with Fluto Books.", colSpan: "col-span-1 md:col-span-2", icon: "calculator" },
        { title: "AI Forecasting", desc: "Predict inventory shortages before they happen.", colSpan: "col-span-1", icon: "brain" }
      ]
    },
    security: {
      heading: "Enterprise compliance out of the box.",
      description: "Your operational data is isolated and secured with end-to-end encryption, meeting international manufacturing and data standards.",
      tags: [
        { label: "ISO 27001", icon: "shield" },
        { label: "End-to-End Encrypted", icon: "lock" }
      ]
    },
    testimonials: [
      { quote: "It replaced 4 legacy systems for us. The multi-warehouse sync is flawless.", author: "Vikram S.", role: "Supply Chain Director" },
      { quote: "We cut down inventory holding costs by 18% using the AI forecasting tool.", author: "Anita P.", role: "COO" },
      { quote: "Finally, an ERP that doesn't look like it was built in 1995.", author: "John D.", role: "Factory Manager" }
    ],
    stats: [
      { value: "₹10B+", label: "Inventory Managed" },
      { value: "1,200+", label: "Warehouses Synced" },
      { value: "Zero", label: "Data Breaches" },
      { value: "24/7", label: "Priority Support" }
    ],
    faqs: [
      { q: "Does this integrate with our existing IoT hardware?", a: "Yes, Fluto ERP offers direct API webhooks for barcode scanners and RFID tags." },
      { q: "Can we customize the approval workflows?", a: "Absolutely. You can build multi-tier approval chains for purchase orders and inventory movement." },
      { q: "Is training provided?", a: "For Enterprise customers, we offer comprehensive on-site and remote training for your entire staff." }
    ],
    pricing: [
      { name: "Starter", price: "4,999", desc: "For single-warehouse operations.", features: ["Up to 10 Users", "Basic Inventory", "Email Support", "50 GB Storage"], buttonText: "Start Trial", isPopular: false },
      { name: "Growth", price: "9,999", desc: "For multi-location businesses.", features: ["Unlimited Users", "Multi-Warehouse", "AI Forecasting", "500 GB Storage", "API Access"], buttonText: "Start 14-day trial", isPopular: true },
      { name: "Custom", price: "Custom", desc: "For global supply chains.", features: ["On-Premise Option", "Dedicated Engineer", "Custom Integrations", "Unlimited Storage"], buttonText: "Contact Sales", isPopular: false }
    ]
  },
  campaigns: {
    slug: "campaigns",
    badge: "Fluto Campaigns",
    hero: {
      headingTop: "Send smarter.",
      headingGradient: "Convert faster.",
      subheading: "Build, design, and send stunning campaigns with intelligent behavior tracking.",
      ctaPrimary: "Start Sending Now",
      ctaSecondary: "Talk to Experts"
    },
    features: {
      sectionHeading: "Reach the right inbox.",
      sectionSubheading: "Powerful delivery engine with AI personalization.",
      items: [
        { title: "Drag & Drop Builder", desc: "Create beautiful emails without writing a single line of code.", colSpan: "col-span-1 md:col-span-2", icon: "dashboard" },
        { title: "Smart Routing", desc: "Ensure 99% inbox placement rates.", colSpan: "col-span-1", icon: "zap" },
        { title: "A/B Testing", desc: "Test subject lines and content automatically.", colSpan: "col-span-1", icon: "filter" },
        { title: "Advanced Analytics", desc: "Track opens, clicks, and revenue generated.", colSpan: "col-span-1 md:col-span-2", icon: "brain" }
      ]
    },
    security: {
      heading: "Anti-spam and privacy compliant.",
      description: "We automatically manage unsubscribe requests and ensure your campaigns strictly follow global anti-spam laws.",
      tags: [
        { label: "CAN-SPAM Compliant", icon: "shield" },
        { label: "GDPR Ready", icon: "lock" }
      ]
    },
    testimonials: [
      { quote: "Our open rates doubled after switching to Fluto Campaigns' AI routing.", author: "Neha S.", role: "Marketing Manager" },
      { quote: "The drag and drop builder is incredibly intuitive.", author: "Aman K.", role: "Founder" },
      { quote: "Finally, an email tool that natively syncs with our CRM.", author: "Kiran R.", role: "Growth Lead" }
    ],
    stats: [
      { value: "10M+", label: "Emails Sent Daily" },
      { value: "99.8%", label: "Delivery Rate" },
      { value: "40%", label: "Avg. Open Rate" },
      { value: "24/7", label: "Email Support" }
    ],
    faqs: [
      { q: "Is there a limit on how many contacts I can have?", a: "No, you are billed based on emails sent, not the number of contacts in your database." },
      { q: "Does it sync with Fluto CRM?", a: "Yes, Campaigns natively syncs with Fluto CRM so you can trigger emails based on deal stages." },
      { q: "Can I bring my own custom domain?", a: "Absolutely. We provide dedicated IP addresses and custom domain authentications." }
    ],
    pricing: [
      { name: "Free", price: "0", desc: "For small creators.", features: ["Up to 1,000 Emails/mo", "Basic Templates", "Community Support", "Fluto Branding"], buttonText: "Start for free", isPopular: false },
      { name: "Pro", price: "999", desc: "For growing brands.", features: ["Up to 50,000 Emails/mo", "A/B Testing", "No Fluto Branding", "Automations", "Priority Support"], buttonText: "Start 14-day trial", isPopular: true },
      { name: "Custom", price: "Custom", desc: "For high-volume senders.", features: ["Unlimited Emails", "Dedicated IP Address", "Custom Limits", "Deliverability Expert"], buttonText: "Contact Sales", isPopular: false }
    ]
  },
  desk: {
    slug: "desk",
    badge: "Fluto Desk",
    hero: {
      headingTop: "Resolve faster.",
      headingGradient: "Delight customers.",
      subheading: "Omnichannel customer service with automated SLA tracking and zero noise.",
      ctaPrimary: "Setup Helpdesk",
      ctaSecondary: "Talk to Experts"
    },
    features: {
      sectionHeading: "Resolve tickets faster.",
      sectionSubheading: "Unify all your customer communications into one inbox.",
      items: [
        { title: "Shared Inbox", desc: "Manage emails, chats, and social media queries in one place.", colSpan: "col-span-1 md:col-span-2", icon: "users" },
        { title: "AI Chatbots", desc: "Deflect 40% of queries automatically.", colSpan: "col-span-1", icon: "brain" },
        { title: "SLA Automation", desc: "Never miss a deadline with automatic escalations.", colSpan: "col-span-1", icon: "settings" },
        { title: "Knowledge Base", desc: "Build self-service portals for your customers.", colSpan: "col-span-1 md:col-span-2", icon: "dashboard" }
      ]
    },
    security: {
      heading: "Secure customer interactions.",
      description: "All customer communications are encrypted. Granular permissions ensure agents only see what they need to.",
      tags: [
        { label: "SOC 2 Certified", icon: "server" },
        { label: "Encrypted Chats", icon: "lock" }
      ]
    },
    testimonials: [
      { quote: "Our average resolution time went from 24 hours to 2 hours.", author: "Priya M.", role: "Support Head" },
      { quote: "The AI chatbot handles all our basic queries seamlessly.", author: "Rohan D.", role: "E-commerce Founder" },
      { quote: "Being able to see CRM data right inside the ticket view is a game changer.", author: "Sanya K.", role: "Customer Success" }
    ],
    stats: [
      { value: "5M+", label: "Tickets Resolved" },
      { value: "40%", label: "Ticket Deflection" },
      { value: "99.9%", label: "Uptime Guaranteed" },
      { value: "Zero", label: "Data Breaches" }
    ],
    faqs: [
      { q: "Can I connect my WhatsApp and Instagram?", a: "Yes, Fluto Desk supports omnichannel integration including WhatsApp Business API and Instagram Direct." },
      { q: "Do you have collision detection?", a: "Yes, if two agents are viewing the same ticket, they will be notified to prevent duplicate replies." },
      { q: "Is the Knowledge base SEO friendly?", a: "Absolutely. All help articles are fully optimized for search engines." }
    ],
    pricing: [
      { name: "Free", price: "0", desc: "For solo founders.", features: ["1 Agent", "Email Channel Only", "Basic Inbox", "Community Support"], buttonText: "Start for free", isPopular: false },
      { name: "Pro", price: "1,499", desc: "For professional support teams.", features: ["Up to 10 Agents", "Omnichannel (Social & Chat)", "AI Chatbots", "SLA Rules", "Priority Support"], buttonText: "Start 14-day trial", isPopular: true },
      { name: "Custom", price: "Custom", desc: "For large enterprise centers.", features: ["Unlimited Agents", "Custom Roles", "Dedicated Server", "24/7 Phone Support"], buttonText: "Contact Sales", isPopular: false }
    ]
  },
  books: {
    slug: "books",
    badge: "Fluto Books",
    hero: {
      headingTop: "Automate finances.",
      headingGradient: "Perfectly balanced.",
      subheading: "Get paid faster with automated, multi-currency billing and real-time financial reporting.",
      ctaPrimary: "Automate Finances",
      ctaSecondary: "Talk to Experts"
    },
    features: {
      sectionHeading: "Your ledgers, perfectly balanced.",
      sectionSubheading: "Take the pain out of manual accounting.",
      items: [
        { title: "Automated Invoicing", desc: "Set recurring invoices and auto-chase late payments.", colSpan: "col-span-1 md:col-span-2", icon: "calculator" },
        { title: "Bank Sync", desc: "Connect your bank accounts for automatic reconciliation.", colSpan: "col-span-1", icon: "zap" },
        { title: "Tax Compliance", desc: "GST/VAT reports generated automatically.", colSpan: "col-span-1", icon: "filter" },
        { title: "Multi-Currency", desc: "Handle global payments with live exchange rates.", colSpan: "col-span-1 md:col-span-2", icon: "building" }
      ]
    },
    security: {
      heading: "Bank-grade financial security.",
      description: "Your financial data is protected by 256-bit encryption. We only use read-only bank feeds to ensure funds can never be moved.",
      tags: [
        { label: "256-bit Encryption", icon: "lock" },
        { label: "Read-Only Feeds", icon: "shield" }
      ]
    },
    testimonials: [
      { quote: "Reconciliation used to take a week. Now it takes 10 minutes.", author: "Arjun B.", role: "Finance Director" },
      { quote: "The automated payment reminders have improved our cash flow by 40%.", author: "Sneha P.", role: "Agency Owner" },
      { quote: "GST compliance is finally a breeze.", author: "Raj K.", role: "CA" }
    ],
    stats: [
      { value: "₹50B+", label: "Invoices Paid" },
      { value: "10,000+", label: "Banks Connected" },
      { value: "100%", label: "Tax Compliant" },
      { value: "24/7", label: "Secure Monitoring" }
    ],
    faqs: [
      { q: "Is it compliant with Indian GST?", a: "Yes, Fluto Books generates GSTR-1, GSTR-2, and GSTR-3B reports automatically." },
      { q: "Can my CA access my accounts?", a: "Yes, you can invite your accountant with a dedicated 'Auditor' role for free." },
      { q: "Does it support payment gateways?", a: "Yes, we integrate with Razorpay, Stripe, and PayPal to accept invoice payments directly." }
    ],
    pricing: [
      { name: "Free", price: "0", desc: "For freelancers.", features: ["Up to 50 Invoices/mo", "1 Bank Connection", "Basic Reports", "Community Support"], buttonText: "Start for free", isPopular: false },
      { name: "Pro", price: "1,299", desc: "For growing businesses.", features: ["Unlimited Invoices", "Multi-Currency", "Tax/GST Reports", "Automated Reminders", "Priority Support"], buttonText: "Start 14-day trial", isPopular: true },
      { name: "Custom", price: "Custom", desc: "For complex financials.", features: ["Custom API Access", "Dedicated Account Manager", "Custom User Roles", "Multiple Entities"], buttonText: "Contact Sales", isPopular: false }
    ]
  },
  assets: {
    slug: "assets",
    badge: "Fluto Assets",
    hero: {
      headingTop: "Track everything.",
      headingGradient: "Absolute precision.",
      subheading: "Manage IT hardware, software licenses, and physical company assets effortlessly from procurement to retirement.",
      ctaPrimary: "Manage Assets",
      ctaSecondary: "Talk to Experts"
    },
    features: {
      sectionHeading: "Total asset visibility.",
      sectionSubheading: "Never lose track of a company laptop or software license again.",
      items: [
        { title: "Lifecycle Tracking", desc: "Track assets from purchase to assignment to depreciation.", colSpan: "col-span-1 md:col-span-2", icon: "box" },
        { title: "Software Licenses", desc: "Monitor SaaS usage and prevent shadow IT.", colSpan: "col-span-1", icon: "dashboard" },
        { title: "Barcode Scanning", desc: "Scan and assign assets instantly using our mobile app.", colSpan: "col-span-1", icon: "zap" },
        { title: "Maintenance Alerts", desc: "Automate repair schedules and warranty tracking.", colSpan: "col-span-1 md:col-span-2", icon: "settings" }
      ]
    },
    security: {
      heading: "Secure asset registry.",
      description: "Your entire company hardware and software registry is isolated. Track the exact location and user of every device securely.",
      tags: [
        { label: "Encrypted Database", icon: "server" },
        { label: "Audit Logs", icon: "shield" }
      ]
    },
    testimonials: [
      { quote: "We finally know exactly who has which laptop and monitor.", author: "Kunal V.", role: "IT Manager" },
      { quote: "Fluto Assets helped us identify $5,000/mo in unused SaaS licenses.", author: "Megha S.", role: "Finance Head" },
      { quote: "The barcode scanning feature is incredibly fast during onboarding.", author: "Rahul D.", role: "HR Exec" }
    ],
    stats: [
      { value: "2M+", label: "Assets Tracked" },
      { value: "₹1B+", label: "Hardware Value Managed" },
      { value: "100%", label: "Audit Compliance" },
      { value: "24/7", label: "Real-time Sync" }
    ],
    faqs: [
      { q: "Can I generate depreciation reports?", a: "Yes, you can generate straight-line and declining balance depreciation reports." },
      { q: "Does it integrate with Fluto HRM?", a: "Yes! When an employee is onboarded in HRM, you can instantly assign them assets from this module." },
      { q: "Is there a mobile app?", a: "Yes, our mobile app allows IT admins to scan barcodes/QR codes to update asset status instantly." }
    ],
    pricing: [
      { name: "Free", price: "0", desc: "For tiny startups.", features: ["Up to 100 Assets", "Basic Tracking", "Manual Entry", "Community Support"], buttonText: "Start for free", isPopular: false },
      { name: "Pro", price: "1,499", desc: "For organized IT teams.", features: ["Unlimited Assets", "Barcode Scanning", "Software Licenses", "Depreciation Reports", "Priority Support"], buttonText: "Start 14-day trial", isPopular: true },
      { name: "Custom", price: "Custom", desc: "For enterprise IT grids.", features: ["Active Directory Sync", "Custom Integrations", "Dedicated Manager", "On-Prem Options"], buttonText: "Contact Sales", isPopular: false }
    ]
  }
};