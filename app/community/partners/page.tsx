"use client";

import { Building2, ArrowRight } from "lucide-react";
import { UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero"; // 🟢 1. Import GlobalHero
import Link from "next/link";

export default function PartnerPage() {
  return (
    <main className={UI.pageWrapper}>
      
      {/* 🟢 2. Use GlobalHero instead of long HTML sections */}
      <GlobalHero 
        badgeText="Fluto Partner Network"
        badgeIcon={<Building2 className="w-4 h-4" />}
        titleTop="Expand your reach,"
        titleGradient="grow your business."
        description="Join the elite network of agencies, system integrators, and consultants deploying Fluto OS for high-growth enterprises worldwide."
      >
        {/* 🟢 3. Put your Buttons inside the GlobalHero tags */}
        <Link href="/partners/apply" className={UI.buttonPrimary}>
          Apply to Partner Program <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </GlobalHero>

      {/* Baaki ke page components yahan aayenge */}
      {/* <PartnerBenefits /> */}
      {/* <PartnerTiers /> */}
      
      <Footer />
    </main>
  );
}