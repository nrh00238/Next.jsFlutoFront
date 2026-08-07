"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, X, Sparkles, Building2, ArrowRight, 
  Calculator, ShieldCheck, Layers, Zap, CheckCircle2,
  Mail, Briefcase, HeadphonesIcon, Box, ChevronDown
} from "lucide-react";
import Link from "next/link";
import { UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";
import { Button } from "@/components/Button";

const comparisonCategories = [
  {
    category: "Fluto Campaigns (Marketing)",
    icon: Mail,
    color: "text-blue-500",
    features: [
      { name: "Monthly Email Sends", standalone: "50,000 /mo", flutoOne: "Unlimited", enterprise: "Custom Limits" },
      { name: "AI Campaign Personalization", standalone: "Basic", flutoOne: "Advanced AI Engine", enterprise: "Custom Models" },
      { name: "A/B Testing & Smart Routing", standalone: false, flutoOne: true, enterprise: true },
      { name: "Custom Domain Authentication", standalone: true, flutoOne: true, enterprise: true },
    ]
  },
  {
    category: "Fluto CRM (Sales)",
    icon: Briefcase,
    color: "text-indigo-500",
    features: [
      { name: "Sales Pipeline Stages", standalone: "Up to 5", flutoOne: "Unlimited", enterprise: "Unlimited" },
      { name: "AI Lead Scoring & Enrichment", standalone: false, flutoOne: true, enterprise: true },
      { name: "Contact & Deal Limit", standalone: "10,000 Deals", flutoOne: "Unlimited", enterprise: "Unlimited" },
      { name: "Automated Workflow Triggers", standalone: "10 Triggers", flutoOne: "Unlimited", enterprise: "Custom Logic" },
    ]
  },
  {
    category: "Fluto Desk (Support)",
    icon: HeadphonesIcon,
    color: "text-pink-500",
    features: [
      { name: "Omnichannel Shared Inbox", standalone: "Email Only", flutoOne: "Email, WhatsApp & Chat", enterprise: "All Channels + Phone" },
      { name: "AI Ticket Deflection Bot", standalone: false, flutoOne: true, enterprise: true },
      { name: "SLA Automation & Escalations", standalone: "Basic SLA", flutoOne: "Advanced SLA Rules", enterprise: "Custom SLAs" },
    ]
  },
  {
    category: "Fluto Books (Finance & Accounting)",
    icon: Calculator,
    color: "text-green-500",
    features: [
      { name: "Automated GST/VAT Invoicing", standalone: true, flutoOne: true, enterprise: true },
      { name: "Multi-Currency & Live FX Sync", standalone: false, flutoOne: true, enterprise: true },
      { name: "Bank Reconciliation Feeds", standalone: "1 Bank Account", flutoOne: "Unlimited Banks", enterprise: "Direct API Access" },
    ]
  },
  {
    category: "Fluto Assets (IT & Inventory)",
    icon: Box,
    color: "text-orange-500",
    features: [
      { name: "Hardware & Software License Audit", standalone: "Up to 100 Assets", flutoOne: "Unlimited Assets", enterprise: "Unlimited" },
      { name: "Barcode / QR Mobile Scanner App", standalone: true, flutoOne: true, enterprise: true },
      { name: "Automated Maintenance Triggers", standalone: false, flutoOne: true, enterprise: true },
    ]
  },
  {
    category: "Fluto ERP (Supply Chain & Operations)",
    icon: Building2,
    color: "text-purple-500",
    features: [
      { name: "Multi-Warehouse Inventory Sync", standalone: "1 Warehouse", flutoOne: "Multi-Location", enterprise: "Global Grid" },
      { name: "AI Supply Chain Demand Forecasting", standalone: false, flutoOne: true, enterprise: true },
      { name: "Real-Time Ledger Auto-Sync", standalone: false, flutoOne: true, enterprise: true },
    ]
  },
  {
    category: "Platform, Security & Infrastructure",
    icon: ShieldCheck,
    color: "text-indigo-400",
    features: [
      { name: "Unified Single Sign-On (SSO)", standalone: false, flutoOne: true, enterprise: "SAML / Okta / Azure" },
      { name: "Role-Based Access Control (RBAC)", standalone: "Basic", flutoOne: "Advanced Granular", enterprise: "Custom Policies" },
      { name: "SOC2 Type II & ISO 27001 Certified", standalone: true, flutoOne: true, enterprise: true },
      { name: "Guaranteed Uptime SLA", standalone: "99.9%", flutoOne: "99.95%", enterprise: "99.99% Financial SLA" },
      { name: "Dedicated Success Manager", standalone: false, flutoOne: "Priority Queue", enterprise: "Dedicated Engineer" },
    ]
  }
];

export default function MasterPricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className={UI.pageWrapper}>

      <GlobalHero 
        badgeText="Master Pricing Hub"
        badgeIcon={<Layers className="w-4 h-4" />}
        titleTop="Simple pricing."
        titleGradient="For every scale."
        description="Choose between individual apps or the all-in-one Fluto One Suite. Flexible monthly or annual billing options to suit your business needs."
      >
        <div className="flex items-center justify-center gap-4 bg-white/50 dark:bg-black/20 p-2 pr-4 pl-6 rounded-full border border-gray-200/50 dark:border-white/10 backdrop-blur-md shadow-sm">
          <span className={`text-sm font-bold ${!isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 rounded-full bg-indigo-100 dark:bg-white/10 border border-indigo-200 dark:border-white/10 transition-colors focus:outline-none flex items-center px-1"
          >
            <div className={`w-5 h-5 rounded-full bg-indigo-600 shadow-md transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0"}`} />
          </button>
          <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
            Annually <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-200/50 dark:border-green-500/30">Save 20%</span>
          </span>
        </div>
      </GlobalHero>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-12 relative z-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* TIER 1: STANDALONE APP */}
          <div className="p-8 rounded-[2.5rem] bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-xl flex flex-col justify-between hover:border-indigo-500/30 transition-all">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Single App Module</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Ala-Carte App</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">Buy any single module (CRM, Campaigns, Desk, Books, Assets, or ERP).</p>
              
              <div className="mb-6">
                <span className="text-4xl font-black text-gray-900 dark:text-white">
                  ₹{isAnnual ? "999" : "1,299"}
                </span>
                <span className="text-gray-500 text-sm font-medium"> / app / mo</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-white/5 text-sm font-medium text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Choice of 1 Core Module</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Up to 5 Team Seats</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Standard Email Support</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Native App Mobile Sync</div>
                <div className="flex items-center gap-3 text-gray-400"><X className="w-4 h-4 text-gray-300 shrink-0" /> No Cross-App Unified Analytics</div>
              </div>
            </div>

            <Button href="/register" variant="darkSecondary" size="md">
              Choose Standalone App
            </Button>
          </div>

          {/* TIER 2: FLUTO ONE (FLAGSHIP BUNDLE) */}
          <div className="p-8 rounded-[2.5rem] bg-indigo-950 dark:bg-[#0c0724] border border-indigo-500/50 shadow-2xl relative flex flex-col justify-between md:scale-105 z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Flagship OS</span>
                <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3" /> Save 70%
                </span>
              </div>

              <h3 className="text-3xl font-black text-white mb-3">Fluto One Suite</h3>
              <p className="text-sm text-indigo-200 mb-6 font-normal leading-relaxed">
                Full unrestricted access to all 6 enterprise modules under one single subscription.
              </p>
              
              <div className="mb-6">
                <span className="text-5xl font-black text-white">
                  ₹{isAnnual ? "3,999" : "4,999"}
                </span>
                <span className="text-indigo-200 text-sm font-medium"> / total / mo</span>
              </div>

              <div className="space-y-3 pt-6 pb-6 border-t border-indigo-500/30 text-sm font-medium text-gray-200">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> <strong className="text-white">All 6+ Enterprise Modules Included</strong></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Unlimited Team Seats</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Unified Single Sign-On (SSO)</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> AI Lead Scoring & Automation Engine</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Priority 24/7 Phone & Chat Support</div>
              </div>
            </div>

            <Button href="/register" variant="primary" size="md">
              Get Fluto One Suite
            </Button>
          </div>

          {/* TIER 3: ENTERPRISE CUSTOM */}
          <div className="p-8 rounded-[2.5rem] bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-xl flex flex-col justify-between hover:border-indigo-500/30 transition-all">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Dedicated Infrastructure</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Fluto Enterprise</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">Dedicated servers, custom integrations, and custom SLA for large organizations.</p>
              
              <div className="mb-6">
                <span className="text-4xl font-black text-gray-900 dark:text-white">Custom</span>
                <span className="text-gray-500 text-sm font-medium"> / tailored deployment</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-white/5 text-sm font-medium text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Single-Tenant Cloud Isolation</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> 99.99% Financially-Backed SLA</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Dedicated Success Engineer</div>
                <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" /> Custom Data Retention Policies</div>
              </div>
            </div>

            <Button href="/register" variant="darkSecondary" size="md">
              Talk to Architecture Team
            </Button>
          </div>

        </div>
      </section>

      {/* ====================================================================
          3. COST-SAVINGS CALCULATOR (THE VALUE PROPOSITION)
      ==================================================================== */}
      <section className="py-20 bg-slate-50 dark:bg-[#070707] border-y border-gray-200/60 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 block">Value Analysis</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-6">
              Why 80% of our customers choose Fluto One
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base mb-12">
              Buying individual apps across different SaaS vendors costs over <strong className="text-gray-900 dark:text-white">₹22,000/month</strong>. Fluto One unifies all 6 modules starting at just <strong className="text-indigo-600 dark:text-indigo-400">₹3,999/month</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/5 shadow-sm hover:border-indigo-500/30 transition-colors">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">70%</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Average Cost Savings</div>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/5 shadow-sm hover:border-indigo-500/30 transition-colors">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">1 Login</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Unified Single Sign-On</div>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/5 shadow-sm hover:border-indigo-500/30 transition-colors">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">0 Sync Lag</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Real-time Cross Data</div>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/5 shadow-sm hover:border-indigo-500/30 transition-colors">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">24/7</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Priority Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. MASTER FEATURE COMPARISON MATRIX (THE DETAILED TABLE)
      ==================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Master Feature Comparison
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Detailed breakdown comparing Standalone modules vs Fluto One Suite vs Enterprise.
          </p>
        </div>

        {/* COMPARISON MATRIX TABLE */}
        <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 shadow-2xl bg-white dark:bg-[#0A0A0A]">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                <th className="p-6 text-sm font-bold text-gray-900 dark:text-white w-2/5">Features & Capability</th>
                <th className="p-6 text-sm font-bold text-gray-600 dark:text-gray-400 text-center w-1/5">Standalone App</th>
                <th className="p-6 text-sm font-bold text-indigo-600 dark:text-indigo-400 text-center bg-indigo-50/50 dark:bg-indigo-950/30 w-1/5">
                  <div className="flex items-center justify-center gap-1">
                    <Sparkles className="w-4 h-4 text-indigo-500" /> Fluto One
                  </div>
                </th>
                <th className="p-6 text-sm font-bold text-gray-600 dark:text-gray-400 text-center w-1/5">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5 text-sm">
              {comparisonCategories.map((cat, idx) => (
                <React.Fragment key={idx}>
                  {/* Category Header Row */}
                  <tr className="bg-gray-100/60 dark:bg-white/5">
                    <td colSpan={4} className="px-6 py-4 font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <cat.icon className={`w-4 h-4 ${cat.color}`} /> {cat.category}
                    </td>
                  </tr>

                  {/* Category Feature Rows */}
                  {cat.features.map((feat, fIdx) => (
                    <tr key={fIdx} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.01] transition-colors">
                      <td className="p-6 font-medium text-gray-700 dark:text-gray-300">{feat.name}</td>
                      
                      {/* Standalone Column */}
                      <td className="p-6 text-center text-gray-600 dark:text-gray-400">
                        {typeof feat.standalone === "boolean" ? (
                          feat.standalone ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />
                        ) : (
                          <span className="font-semibold text-xs">{feat.standalone}</span>
                        )}
                      </td>

                      {/* Fluto One Column (Highlighted) */}
                      <td className="p-6 text-center font-bold text-indigo-950 dark:text-white bg-indigo-50/30 dark:bg-indigo-950/20">
                        {typeof feat.flutoOne === "boolean" ? (
                          feat.flutoOne ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{feat.flutoOne}</span>
                        )}
                      </td>

                      {/* Enterprise Column */}
                      <td className="p-6 text-center text-gray-600 dark:text-gray-400">
                        {typeof feat.enterprise === "boolean" ? (
                          feat.enterprise ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />
                        ) : (
                          <span className="font-semibold text-xs">{feat.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ====================================================================
          5. FREQUENTLY ASKED QUESTIONS (FAQS)
      ==================================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200/60 dark:border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Pricing FAQs</h2>
          <p className="text-gray-500 dark:text-gray-400">Everything you need to know about billing and plans.</p>
        </div>

        <div className="space-y-4">
          {[
            { q: "Can I buy a single app now and upgrade to Fluto One later?", a: "Yes! You can start with any standalone app (like Fluto CRM for ₹999/mo). When you are ready to add a second or third app, you can upgrade to Fluto One with a single click and receive a pro-rated credit." },
            { q: "Are there any hidden setup fees or contact limits?", a: "No. All prices are completely transparent. Billed in Indian Rupees (₹), and statutory taxes like GST are calculated clearly at checkout with GSTIN invoice generation." },
            { q: "What happens when my 14-day free trial ends?", a: "During the 14-day trial, you have unrestricted access to Fluto One. No credit card is required to start. If you choose not to subscribe, your account will pause safely without data loss." },
            { q: "Do you offer custom SLA guarantees for Enterprise?", a: "Yes, our Enterprise plan includes a 99.99% uptime SLA backed by financial credits, along with dedicated single-tenant cloud hosting options." }
          ].map((faq, i) => (
            <div key={i} className="border border-gray-200/80 dark:border-white/10 rounded-2xl bg-white dark:bg-[#0A0A0A] overflow-hidden hover:border-indigo-500/30 transition-colors">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none group"
              >
                <span className="font-bold text-gray-900 dark:text-white text-lg pr-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 text-indigo-500 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-t border-gray-100 dark:border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================
          6. BOTTOM HIGH-CONVERTING CTA BANNER
      ==================================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-indigo-900 via-indigo-950 to-black p-10 sm:p-16 text-white text-center relative overflow-hidden shadow-2xl border border-indigo-500/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight text-white">
              Ready to unify your business stack?
            </h2>
            <p className="text-indigo-200 text-base sm:text-lg mb-8 font-normal leading-relaxed">
              Start your 14-day free trial of Fluto One today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/register" variant="primary" size="md">
                Start Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="/enterprise" variant="secondary" size="md">
                Talk to Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}