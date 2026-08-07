"use client";

import { BookOpen, Search, Timer, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { UI, fadeUpVariant } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";
import { Button } from "@/components/Button";
import ComingSoon from "@/components/ComingSoon";

export default function TutorialsPage() {
  return (
    <main className="bg-white dark:bg-[#030303] min-h-screen text-gray-900 dark:text-white">
      
      <GlobalHero 
        badgeText="Developer & User Hub"
        badgeIcon={<BookOpen className="w-4 h-4" />}
        titleTop="Master the"
        titleGradient="Fluto Ecosystem."
        description="Search tutorials, API references, or complete learning tracks built by our engineering team."
      >
        {/* SEARCH INPUT */}
        {/*<div className="relative w-full max-w-2xl mx-auto shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl flex items-center bg-white dark:bg-[#0A0A0A] ring-1 ring-gray-200 dark:ring-white/10 p-2">
          <div className="pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input 
            type="text" 
            className="flex-1 px-4 py-4 border-0 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 focus:ring-0 sm:text-lg outline-none" 
            placeholder="Search tutorials, API references, or guides..." 
          />
          <Button variant="primary" size="md">
            Search Docs
          </Button>
        </div>*/}
      </GlobalHero>
      
      {/* COMING SOON SECTION */}
      <ComingSoon 
        description="Our engineering and documentation teams are currently crafting high-quality tutorials, API references, and video guides. We will be launching this learning hub very soon."
      />

      <Footer />
    </main>
  );
}