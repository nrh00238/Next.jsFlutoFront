"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { 
  Sun, Moon, ChevronDown, LayoutGrid, Briefcase, 
  Calculator, HeadphonesIcon, Mail, Box, Building2, 
  ShieldCheck, CheckCircle2, ArrowRight, Menu, X,
  Globe, Landmark, Stethoscope, ShoppingBag,
  GraduationCap
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // ADDED "company" to activeDropdown type
  const [activeDropdown, setActiveDropdown] = useState<"apps" | "industries" | "community" | "company" | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAppsOpen, setMobileAppsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCommunityOpen, setMobileCommunityOpen] = useState(false);
  // ADDED mobileCompanyOpen state
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShowNavbar(false);
        setActiveDropdown(null);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeDropdown = () => setActiveDropdown(null);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${showNavbar ? "translate-y-0" : "-translate-y-full"} ${scrolled ? "bg-white/90 dark:bg-[#030303]/90 backdrop-blur-xl shadow-lg shadow-black/[0.05] dark:shadow-white/[0.01] border-gray-200/50 dark:border-white/5" : "bg-transparent border-transparent shadow-none"}`}>
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        <div className="flex items-center gap-2">
          <Link href="/" onClick={closeDropdown} className="text-gray-900 dark:text-white font-bold text-2xl tracking-tight transition-colors flex items-center gap-1 group">
            Fluto<span className="text-indigo-600 dark:text-indigo-400 group-hover:scale-125 transition-transform duration-300 inline-block">.</span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          
          <div 
            className="relative h-20 flex items-center px-3"
            onMouseEnter={() => setActiveDropdown("apps")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1.5 transition-colors py-2 relative group ${activeDropdown === "apps" ? "text-indigo-600 dark:text-indigo-400" : "hover:text-gray-900 dark:hover:text-white"}`}>
              Fluto Apps <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "apps" ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""}`} />
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 rounded-full ${activeDropdown === "apps" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`} />
            </button>

            <AnimatePresence>
              {activeDropdown === "apps" && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.98 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: 10, scale: 0.98 }} 
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute top-20 -left-32 w-[1000px] bg-white dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/10 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.25)] dark:shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden grid grid-cols-12 p-8 gap-8 z-50"
                >
                  <div className="col-span-7 flex flex-col justify-between pr-6 border-r border-gray-100 dark:border-white/5">
                    <div>
                      <div className="flex items-center justify-between mb-5 px-2">
                        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Enterprise Applications</h3>
                        <span className="text-[11px] bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 px-2.5 py-1 rounded-full font-bold">6 Core Modules</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Link href="/products/campaigns" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><Mail className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Fluto Campaigns</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Email marketing & automation.</div>
                          </div>
                        </Link>

                        <Link href="/products/crm" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><Briefcase className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Fluto CRM</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Sales pipelines & leads.</div>
                          </div>
                        </Link>

                        <Link href="/products/desk" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-500/10 text-pink-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><HeadphonesIcon className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Fluto Desk</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Support ticketing system.</div>
                          </div>
                        </Link>

                        <Link href="/products/books" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-green-50 dark:bg-green-500/10 text-green-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><Calculator className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Fluto Books</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Smart accounting & invoices.</div>
                          </div>
                        </Link>

                        <Link href="/products/assets" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-orange-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><Box className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Fluto Assets</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Hardware & asset tracking.</div>
                          </div>
                        </Link>

                        <Link href="/products/erp" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><Building2 className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Fluto ERP</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Enterprise resource planning.</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-gray-500 px-2 font-medium">
                      <span>Need custom module deployment?</span>
                      <Link href="/company/contact" onClick={closeDropdown} className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Contact Architecture Team &rarr;</Link>
                    </div>
                  </div>

                  <div className="col-span-5 relative rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-black p-8 text-white flex flex-col justify-between overflow-hidden shadow-2xl border border-indigo-500/30">
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Flagship Suite</span>
                        <LayoutGrid className="w-7 h-7 text-indigo-400 animate-pulse" />
                      </div>
                      <h4 className="text-3xl font-bold tracking-tight mb-2.5 text-white">Fluto One</h4>
                      <p className="text-xs text-indigo-200/90 leading-relaxed mb-6 font-normal">
                        The unified operating system for modern enterprises. Get unrestricted access to all current and future apps under a single subscription.
                      </p>
                      <ul className="space-y-2.5 mb-6 text-xs text-gray-200 font-medium">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /><span>All 6+ Enterprise Modules Included</span></li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /><span>Unified Single-Sign-On (SSO)</span></li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /><span>Predictable Flat Per-User Pricing</span></li>
                      </ul>
                    </div>

                    <div className="relative z-10">
                      <Button href="/fluto-one" onClick={closeDropdown} variant="primary" size="md">
                        Explore Fluto One Suite <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative h-20 flex items-center px-3"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1.5 transition-colors py-2 relative group ${activeDropdown === "industries" ? "text-indigo-600 dark:text-indigo-400" : "hover:text-gray-900 dark:hover:text-white"}`}>
              Industries <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "industries" ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""}`} />
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 rounded-full ${activeDropdown === "industries" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.98 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: 10, scale: 0.98 }} 
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute top-20 -left-32 w-[920px] bg-white dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/10 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.25)] dark:shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden grid grid-cols-12 p-8 gap-8 z-50"
                >
                  <div className="col-span-7 flex flex-col justify-between pr-6 border-r border-gray-100 dark:border-white/5">
                    <div>
                      <div className="flex items-center justify-between mb-5 px-2">
                        <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Target Sectors</h3>
                        <span className="text-[11px] bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 px-2.5 py-1 rounded-full font-bold">Industry Solutions</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Link href="/industries/fintech" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-green-50 dark:bg-green-500/10 text-green-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><Landmark className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Fintech & Banking</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Secure compliance & ledgers.</div>
                          </div>
                        </Link>

                        <Link href="/industries/healthcare" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><Stethoscope className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Healthcare</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">HIPAA ready management.</div>
                          </div>
                        </Link>

                        <Link href="/industries/retail" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-orange-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><ShoppingBag className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Retail & E-comm</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Omnichannel inventory.</div>
                          </div>
                        </Link>

                        <Link href="/industries/saas" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><Globe className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Tech & SaaS</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Automated operations.</div>
                          </div>
                        </Link>

                        <Link href="/industries/manufacturing" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><Building2 className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Manufacturing</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Supply chain & ERP scale.</div>
                          </div>
                        </Link>

                        <Link href="/industries/education" onClick={closeDropdown} className="flex items-start gap-3 p-3.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all group border border-transparent hover:border-gray-200/60 dark:hover:border-white/5">
                          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-500 mt-0.5 group-hover:scale-110 transition-transform shadow-sm"><GraduationCap className="w-4 h-4" /></div>
                          <div>
                            <div className="text-gray-900 dark:text-white font-bold text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Education & Edtech</div>
                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">Campus management systems.</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-gray-500 px-2 font-medium">
                      <span>Looking for a tailored sector fit?</span>
                      <Link href="/company/contact" onClick={closeDropdown} className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Talk to Industry Experts &rarr;</Link>
                    </div>
                  </div>

                  <div className="col-span-5 relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-black p-8 text-white flex flex-col justify-between overflow-hidden shadow-2xl border border-indigo-500/30">
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <span className="bg-indigo-600 text-white text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Trust & Safety</span>
                        <ShieldCheck className="w-7 h-7 text-indigo-400" />
                      </div>
                      <h4 className="text-2xl font-bold tracking-tight mb-2.5 text-white">Enterprise Security</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                        Your data is your most valuable asset. Fluto is engineered with industry-standard encryption, robust access controls, and secure cloud infrastructure.
                      </p>
                      <ul className="space-y-2.5 mb-6 text-xs text-gray-200 font-medium">
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /><span>AES-256 Data Encryption</span></li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /><span>Secure Cloud Infrastructure</span></li>
                      </ul>
                    </div>

                    <div className="relative z-10">
                      <Button href="/company/security" onClick={closeDropdown} variant="primary" size="md">
                        View Security Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative h-20 flex items-center px-3"
            onMouseEnter={() => setActiveDropdown("community")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1.5 transition-colors py-2 relative group ${activeDropdown === "community" ? "text-indigo-600 dark:text-indigo-400" : "hover:text-gray-900 dark:hover:text-white"}`}>
              Community <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "community" ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""}`} />
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 rounded-full ${activeDropdown === "community" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "community" && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.98 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: 10, scale: 0.98 }} 
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute top-20 -left-48 w-[720px] bg-white dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-3 p-6 gap-6 z-50"
                >
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-2">Learn</h4>
                    <div className="space-y-1">
                      <Link href="/community/tutorials" onClick={closeDropdown} className="block p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600">Tutorials & Guides</Link>
                      <Link href="/community/certifications" onClick={closeDropdown} className="block p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600">Certifications</Link>
                      <Link href="/resources/blog" onClick={closeDropdown} className="block p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600">Blog & Articles</Link>
                    </div>
                  </div>

                  <div className="space-y-3 border-x border-gray-100 dark:border-white/5 px-4">
                    <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-2">Collaborate</h4>
                    <div className="space-y-1">
                      <Link href="/community/forums" onClick={closeDropdown} className="block p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600">Developer Forum</Link>
                      <Link href="/community/events" onClick={closeDropdown} className="block p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600">Global Events</Link>
                      <Link href="/community/partners" onClick={closeDropdown} className="block p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600">Become a Partner</Link>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest px-2">Get Services</h4>
                    <div className="space-y-1">
                      <Link href="/community/find-partner" onClick={closeDropdown} className="block p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600">Find a Partner</Link>
                      <Link href="/help" onClick={closeDropdown} className="block p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600">Support Center</Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative h-20 flex items-center px-3"
            onMouseEnter={() => setActiveDropdown("company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`flex items-center gap-1.5 transition-colors py-2 relative group ${activeDropdown === "company" ? "text-indigo-600 dark:text-indigo-400" : "hover:text-gray-900 dark:hover:text-white"}`}>
              Company <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "company" ? "rotate-180 text-indigo-600 dark:text-indigo-400" : ""}`} />
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 rounded-full ${activeDropdown === "company" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === "company" && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.98 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: 10, scale: 0.98 }} 
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-20 left-3 w-56 bg-white dark:bg-[#0A0A0A] border border-gray-200/60 dark:border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] p-2 z-50 flex flex-col gap-1"
                >
                  <Link href="/company/about" onClick={closeDropdown} className="block px-4 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">About Us</Link>
                  <Link href="/company/careers" onClick={closeDropdown} className="block px-4 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Careers</Link>
                  <Link href="/company/contact" onClick={closeDropdown} className="block px-4 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact Sales</Link>
                  <Link href="/company/security" onClick={closeDropdown} className="block px-4 py-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Security & Trust</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative h-20 flex items-center px-3">
            <Link href="/pricing" onClick={closeDropdown} className="hover:text-indigo-600 dark:hover:text-white transition py-2 relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 rounded-full scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
            </Link>
          </div>

          <div className="relative h-20 flex items-center px-3">
            <Link href="/help" onClick={closeDropdown} className="hover:text-indigo-600 dark:hover:text-white transition py-2 relative group">
              Help & Support
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 rounded-full scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
            </Link>
          </div>

        </div>

        <div className="flex items-center gap-3 md:gap-4">
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm">
              {theme === "dark" ? <Sun className="w-4 h-4 text-gray-300" /> : <Moon className="w-4 h-4 text-gray-600" />}
            </button>
          )}
          <div className="hidden md:flex items-center gap-3">
            <Button href="http://fluto.test/login" variant="secondary" size="sm">
              Sign In
            </Button>
            <Button href="http://fluto.test/register" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none shadow-sm"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white dark:bg-[#030303] border-b border-gray-200 dark:border-white/10 overflow-y-auto z-50 p-6 shadow-2xl flex flex-col gap-6"
          >
            <Link 
              href="/fluto-one" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-4 rounded-2xl bg-gradient-to-r from-indigo-900 to-indigo-950 text-white flex items-center justify-between shadow-xl border border-indigo-500/30 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-indigo-600 rounded-xl group-hover:scale-110 transition-transform"><LayoutGrid className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="font-bold text-sm tracking-wide">Fluto One Suite</div>
                  <div className="text-[11px] text-indigo-200">Get all 6+ apps in one subscription</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-indigo-300 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="space-y-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
              
              <div className="bg-gray-50 dark:bg-white/[0.02] rounded-2xl p-2 border border-gray-100 dark:border-white/5">
                <button onClick={() => setMobileAppsOpen(!mobileAppsOpen)} className="w-full flex items-center justify-between p-3 text-gray-900 dark:text-white font-bold">
                  <span>Apps Ecosystem</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAppsOpen ? "rotate-180 text-indigo-600" : ""}`} />
                </button>
                {mobileAppsOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-2 grid grid-cols-1 border-t border-gray-200/50 dark:border-white/10 mt-1 text-xs">
                    <Link href="/products/campaigns" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Fluto Campaigns</Link>
                    <Link href="/products/crm" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Fluto CRM</Link>
                    <Link href="/products/desk" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Fluto Desk</Link>
                    <Link href="/products/books" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Fluto Books</Link>
                    <Link href="/products/assets" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Fluto Assets</Link>
                    <Link href="/products/erp" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Fluto ERP</Link>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 dark:bg-white/[0.02] rounded-2xl p-2 border border-gray-100 dark:border-white/5">
                <button onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} className="w-full flex items-center justify-between p-3 text-gray-900 dark:text-white font-bold">
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180 text-indigo-600" : ""}`} />
                </button>
                {mobileIndustriesOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-2 grid grid-cols-1 border-t border-gray-200/50 dark:border-white/10 mt-1 text-xs">
                    <Link href="/industries/fintech" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Fintech & Banking</Link>
                    <Link href="/industries/healthcare" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Healthcare</Link>
                    <Link href="/industries/retail" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Retail & E-commerce</Link>
                    <Link href="/industries/saas" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Tech & SaaS</Link>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 dark:bg-white/[0.02] rounded-2xl p-2 border border-gray-100 dark:border-white/5">
                <button onClick={() => setMobileCommunityOpen(!mobileCommunityOpen)} className="w-full flex items-center justify-between p-3 text-gray-900 dark:text-white font-bold">
                  <span>Community</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileCommunityOpen ? "rotate-180 text-indigo-600" : ""}`} />
                </button>
                {mobileCommunityOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-2 grid grid-cols-1 border-t border-gray-200/50 dark:border-white/10 mt-1 text-xs">
                    <Link href="/community/tutorials" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Tutorials & Guides</Link>
                    <Link href="/community/certifications" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Certifications</Link>
                    <Link href="/community/forums" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Developer Forum</Link>
                    <Link href="/community/events" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Global Events</Link>
                    <Link href="/community/find-partner" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Find a Partner</Link>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 dark:bg-white/[0.02] rounded-2xl p-2 border border-gray-100 dark:border-white/5">
                <button onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)} className="w-full flex items-center justify-between p-3 text-gray-900 dark:text-white font-bold">
                  <span>Company</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileCompanyOpen ? "rotate-180 text-indigo-600" : ""}`} />
                </button>
                {mobileCompanyOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-2 grid grid-cols-1 border-t border-gray-200/50 dark:border-white/10 mt-1 text-xs">
                    <Link href="/company/about" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">About Us</Link>
                    <Link href="/company/careers" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Careers</Link>
                    <Link href="/company/contact" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Contact Sales</Link>
                    <Link href="/company/security" onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/5 block">Security & Trust</Link>
                  </div>
                )}
              </div>

              <div className="bg-gray-50 dark:bg-white/[0.02] rounded-2xl p-2 border border-gray-100 dark:border-white/5">
                <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center justify-between p-3 text-gray-900 dark:text-white font-bold">
                  <span>Pricing Hub</span>
                  <ArrowRight className="w-4 h-4 text-indigo-500" />
                </Link>
              </div>

              <div className="bg-gray-50 dark:bg-white/[0.02] rounded-2xl p-2 border border-gray-100 dark:border-white/5">
                <Link href="/help" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center justify-between p-3 text-gray-900 dark:text-white font-bold">
                  <span>Help & Support</span>
                  <ArrowRight className="w-4 h-4 text-indigo-500" />
                </Link>
              </div>

            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10 flex flex-col gap-3 mt-auto pb-6">
                <Button href="http://fluto.test/login" variant="primary" size="sm">
                  Sign In
                </Button>
                <Button href="http://fluto.test/register" variant="secondary" size="sm">
                  Get Started Free
                </Button>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}