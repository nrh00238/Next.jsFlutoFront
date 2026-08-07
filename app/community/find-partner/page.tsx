"use client";

import { Building2 } from "lucide-react";
import { UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";
import ComingSoon from "@/components/ComingSoon";

export default function FindPartnerPage() {

  return (
    <main className={UI.pageWrapper}>
      
      <GlobalHero 
        badgeText="Verified Agencies"
        badgeIcon={<Building2 className="w-4 h-4" />}
        titleTop="Find a certified"
        titleGradient="Integration Partner."
        description="Need help migrating data, setting up complex workflows, or training your team? Hire an official Fluto Partner agency."
      >
      </GlobalHero>

      <ComingSoon 
        description="Our partner program is currently being developed. We will be launching this partner hub very soon."
      />      

      <Footer />
    </main>
  );
}