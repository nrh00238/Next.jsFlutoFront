"use client";

import { Building2 } from "lucide-react";
import { UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";
import ComingSoon from "@/components/ComingSoon";

export default function PartnerPage() {
  return (
    <main className={UI.pageWrapper}>
      
      <GlobalHero 
        badgeText="Fluto Partner Network"
        badgeIcon={<Building2 className="w-4 h-4" />}
        titleTop="Expand your reach,"
        titleGradient="grow your business."
        description="Join the elite network of agencies, system integrators, and consultants deploying Fluto OS for high-growth enterprises worldwide."
      >
      </GlobalHero>

      <ComingSoon 
        description="Our partner program is currently being developed. We will be launching this partner hub very soon."
      />
      
      <Footer />
    </main>
  );
}