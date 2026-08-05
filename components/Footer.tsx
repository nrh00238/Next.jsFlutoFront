"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#030303] border-t border-gray-200 dark:border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-gray-900 dark:text-white font-bold text-2xl tracking-tight mb-4 inline-block">
              Fluto<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </Link>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 max-w-xs mb-6 leading-relaxed">
              The unified operating system for modern enterprises. Replace disconnected SaaS with one powerful ecosystem.
            </p>
            
            {/* Newsletter Mock */}
            <form className="flex max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Subscribe to updates..." 
                className="w-full px-4 py-2.5 rounded-l-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm focus:outline-none focus:border-indigo-500 text-gray-900 dark:text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 rounded-r-xl bg-gradient-to-r from-indigo-500 to-purple-500 dark:bg-white text-white dark:text-black font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-5 tracking-tight">Products</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li><Link href="/fluto-one" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Fluto One Suite</Link></li>
              <li><Link href="/products/campaigns" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Campaigns</Link></li>
              <li><Link href="/products/crm" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">CRM Engine</Link></li>
              <li><Link href="/products/books" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Books & Finance</Link></li>
              <li><Link href="/products/desk" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Help Desk</Link></li>
              <li><Link href="/pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing Hub</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-5 tracking-tight">Resources</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li><Link href="/community/tutorials" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Documentation</Link></li>
              <li><Link href="/developers" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">API Reference</Link></li>
              <li><Link href="/resources/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Company Blog</Link></li>
              <li><Link href="/community/events" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Events & Webinars</Link></li>
              <li><Link href="/help" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Support Center</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-5 tracking-tight">Company</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li><Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Sales</Link></li>
              <li><Link href="/community/partners" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Partner Program</Link></li>
              <li><Link href="/legal" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Legal & Privacy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Status, Copyright & Socials */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors cursor-pointer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            All systems operational
          </div>

          {/* Copyright */}
          <div className="text-xs font-medium text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Fluto OS Inc. All rights reserved.
          </div>

          {/* Inline SVG Social Icons (Zero Dependencies) */}
          <div className="flex items-center gap-5 text-gray-400 dark:text-gray-500">
            <a href="#" aria-label="X/Twitter" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}