export const companyData = {
  about: {
    hero: {
      badge: "About Us",
      headingTop: "Global Scale,",
      headingGradient: "Unified Core.",
      subheading: "Fluto was founded on a simple premise: enterprise software shouldn't be fragmented. We are building the single operating system that scales with the world's most ambitious companies.",
    },
    metrics: [
      { label: "Active Enterprises", value: "10,000+" },
      { label: "Countries Served", value: "50+" },
      { label: "Guaranteed Uptime", value: "99.99%" },
      { label: "Global Employees", value: "450+" },
    ],
    values: [
      { title: "Customer Obsession", desc: "We don't just build features; we solve profound business bottlenecks. Every line of code is measured by the tangible ROI it delivers to our users.", icon: "target", colSpan: "md:col-span-2" },
      { title: "Radical Transparency", desc: "From uptime status to pricing models, we believe in open communication.", icon: "shield", colSpan: "col-span-1" },
      { title: "Velocity", desc: "Speed is a feature. We iterate fast, deploy securely, and adapt instantly.", icon: "zap", colSpan: "col-span-1" },
      { title: "Continuous Innovation", desc: "We invest heavily in AI, machine learning, and predictive analytics to ensure Fluto remains years ahead.", icon: "lightbulb", colSpan: "md:col-span-2" }
    ],
    leaders: [
      { name: "Elena Rostova", role: "Chief Executive Officer", desc: "Former VP of Eng at major SaaS firm. Leads global vision." },
      { name: "Marcus Chen", role: "Chief Technology Officer", desc: "Distributed systems expert. Architect of the Fluto core engine." },
      { name: "Sarah Jenkins", role: "Chief Product Officer", desc: "Obsessed with creating frictionless, beautiful UI/UX." }
    ]
  },
  careers: {
    hero: {
      badge: "Join the team",
      headingTop: "Build the future",
      headingGradient: "of work.",
      subheading: "We are a remote-first, radically transparent team building the unified OS for global enterprises. Join us and do your life's best work.",
    },
    perks: [
      { title: "Remote-First", desc: "Work from anywhere in the world. We care about output, not hours online.", icon: "globe" },
      { title: "Comprehensive Health", desc: "Top-tier medical, dental, and vision coverage for you and your dependents.", icon: "heart" },
      { title: "Learning Budget", desc: "$2,000 annual stipend for courses, conferences, and books.", icon: "code" },
      { title: "Equity Options", desc: "We want you to own a piece of what you're building.", icon: "sparkles" },
    ],
    jobs: [
      { id: 1, title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote / Global" },
      { id: 2, title: "Cloud Infrastructure Architect", dept: "Engineering", location: "San Francisco, CA" },
      { id: 3, title: "Product Marketing Manager", dept: "Marketing", location: "Remote / EU" },
      { id: 4, title: "Enterprise Account Executive", dept: "Sales", location: "London, UK" },
      { id: 5, title: "Customer Success Lead", dept: "Success", location: "Remote / APAC" },
    ]
  },
  contact: {
    hero: {
      badge: "Contact Us",
      headingTop: "We'd Love to",
      headingGradient: "Hear from You.",
      subheading: "Whether you need a custom enterprise deployment, technical support, or partnership details, our team is ready to assist.",
    },
    channels: [
      { title: "Enterprise Sales", desc: "Talk to our architects about custom SLA and dedicated infrastructure.", actionText: "sales@getfluto.com", actionLink: "mailto:sales@getfluto.com", icon: "building" },
      { title: "Technical Support", desc: "24/7 priority support for active customers.", actionText: "Visit Support Center", actionLink: "/help", icon: "message" },
      { title: "Headquarter", desc: "Delhi, India", actionText: "View on Map", actionLink: "#", icon: "map" },
    ]
  },
  legal: {
    hero: {
      badge: "Trust & Compliance",
      headingTop: "Legal &",
      headingGradient: "Privacy Hub",
      subheading: "Transparency and security are foundational to Fluto. Review our terms, policies, and compliance standards below.",
    },
    badges: [
      { label: "SOC 2 Type II", icon: "server" },
      { label: "ISO 27001", icon: "shield" },
      { label: "HIPAA Compliant", icon: "lock" }
    ],
    sections: [
      { id: "terms", title: "Terms of Service", content: "Welcome to Fluto. These Terms of Service govern your access to and use of Fluto's enterprise software, applications, and services. By accessing or using the Service, you agree to be bound by these Terms. Customers utilizing Fluto One are granted a non-exclusive license to access the cloud-hosted platform." },
      { id: "privacy", title: "Privacy Policy", content: "At Fluto, your data privacy is a structural design principle. We collect minimal telemetry required to operate the service and do not sell your personal or corporate data. For CRM and Campaigns modules, client data ingested by you remains strictly your property and is encrypted at rest using AES-256." },
      { id: "dpa", title: "Data Processing Agreement", content: "This DPA forms part of the Master Subscription Agreement. Fluto acts as a Data Processor for the information you upload into the ecosystem. We utilize secure sub-processors housed in compliant regions based on your organizational setup." },
      { id: "gdpr", title: "GDPR Compliance", content: "Fluto fully complies with the General Data Protection Regulation (EU) 2016/679. Users have the right to data portability, the right to be forgotten (data deletion), and the right to object to processing. To execute a Data Subject Access Request (DSAR), please contact privacy@fluto.com." },
    ]
  },
  security: {
    hero: {
      badge: "Enterprise Security",
      headingTop: "Built for",
      headingGradient: "absolute trust.",
      subheading: "Your data is your most valuable asset. Fluto is engineered from the ground up with industry-standard encryption, robust access controls, and secure cloud infrastructure.",
    },
    pillars: [
      { title: "Data Encryption", desc: "All customer data is encrypted at rest using AES-256 and in transit via TLS 1.2+ protocols to prevent interception.", icon: "lock", colSpan: "md:col-span-2" },
      { title: "Cloud Infrastructure", desc: "Hosted on enterprise-grade cloud providers (AWS/GCP) with built-in DDoS protection and network isolation.", icon: "cloud", colSpan: "col-span-1" },
      { title: "Identity & Access", desc: "Granular Role-Based Access Control (RBAC) ensures your team only sees what they are authorized to see.", icon: "key", colSpan: "col-span-1" },
      { title: "Automated Backups", desc: "Daily automated backups and point-in-time recovery ensure your operational data is never lost, even in worst-case scenarios.", icon: "database", colSpan: "md:col-span-2" }
    ],
    features: [
      { title: "99.9% Uptime", desc: "Redundant architecture designed for high availability." },
      { title: "Incident Response", desc: "24/7 automated monitoring for anomalous activities." },
      { title: "Vulnerability Scans", desc: "Regular automated scanning of our application infrastructure." }
    ]
  }
};