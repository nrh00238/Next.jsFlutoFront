"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Building2, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { companyData } from "@/lib/company-data";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";
import Link from "next/link";
import GlobalHero from "@/components/layout/GlobalHero";

const getIcon = (name: string, className: string) => {
  if (name === "building") return <Building2 className={className} />;
  if (name === "map") return <MapPin className={className} />;
  return <MessageCircle className={className} />;
};

export default function ContactPage() {
  const { contact } = companyData;
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen text-gray-900 dark:text-white">
      
      <GlobalHero 
        badgeText={contact.hero.badge}
        badgeIcon={<MessageCircle className="w-4 h-4" />}
        titleTop={contact.hero.headingTop}
        titleGradient={contact.hero.headingGradient}
        description={contact.hero.subheading}
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Contact Channels */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8 w-full">
            
            <motion.div variants={fadeUpVariant}>
              <div className={`${UI.badge} mb-4`}><MessageCircle className="w-4 h-4" /> Reach Out</div>
              <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4 text-left`}>We're here to help.</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                Choose the best channel to reach us or fill out the form, and our enterprise team will get back to you promptly.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contact.channels.map((ch, i) => (
                <motion.div variants={fadeUpVariant} key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5 flex items-start gap-5 shadow-sm">
                  {getIcon(ch.icon, "w-8 h-8 text-indigo-500 mt-1 shrink-0")}
                  <div>
                    <h3 className="font-bold text-xl mb-2">{ch.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">{ch.desc}</p>
                    {ch.actionLink.startsWith("/") ? (
                      <Link href={ch.actionLink} className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">{ch.actionText}</Link>
                    ) : (
                      <a href={ch.actionLink} className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">{ch.actionText}</a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="bg-white dark:bg-[#0A0A0A] p-8 sm:p-10 rounded-[2.5rem] border border-gray-200/80 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
              
              {formState === "success" ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] z-10 p-8 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                    <CheckCircle2 className="w-20 h-20 text-green-500 mb-6 mx-auto" />
                  </motion.div>
                  <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                  <p className="text-gray-500 font-medium mb-8">Our team will get back to you within 24 hours.</p>
                  <button onClick={() => setFormState("idle")} className="px-6 py-3 bg-gray-100 dark:bg-white/10 rounded-xl font-bold text-sm hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : null}

              {/* 🟢 FIX: Form Heading and Text Added Here */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">Drop us a message</h3>
                <p className="text-gray-500 font-medium text-sm sm:text-base">
                  Fill out the form below and we'll route your request to the right department.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none font-medium text-gray-900 dark:text-white transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Work Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none font-medium text-gray-900 dark:text-white transition-colors" placeholder="jane@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Company Size</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none font-medium text-gray-900 dark:text-white appearance-none transition-colors">
                      <option>1-50 Employees</option>
                      <option>51-200 Employees</option>
                      <option>201-1000 Employees</option>
                      <option>1000+ Employees</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Department</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none font-medium text-gray-900 dark:text-white appearance-none transition-colors">
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnerships</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300">How can we help?</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 outline-none font-medium text-gray-900 dark:text-white resize-none transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>

                <button disabled={formState === "loading"} type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white rounded-xl font-bold shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all flex items-center justify-center gap-2 group">
                  {formState === "loading" ? "Sending..." : "Send Message"} {!formState && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
      <Footer />
    </main>
  );
}