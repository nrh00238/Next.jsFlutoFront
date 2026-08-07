"use client";
import { Award, ShieldCheck, Zap } from "lucide-react";
import { UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";
import ComingSoon from "@/components/ComingSoon";

export default function CertificationsPage() {
  const certs = [
    { title: "Fluto Certified Admin", level: "Associate", desc: "Prove your ability to configure workspaces, manage users, and set up basic workflows.", icon: <ShieldCheck className="w-6 h-6 text-blue-500" /> },
    { title: "Fluto Certified Developer", level: "Professional", desc: "Master custom API integrations, webhooks, and advanced frontend dashboard widgets.", icon: <Zap className="w-6 h-6 text-indigo-500" /> },
    { title: "Fluto Certified Architect", level: "Expert", desc: "Design highly-available, multi-tenant enterprise deployments and custom security policies.", icon: <Award className="w-6 h-6 text-purple-500" /> }
  ];

  return (
    <main className={UI.pageWrapper}>
      
      <GlobalHero 
        badgeText="Official Credentials"
        badgeIcon={<Award className="w-4 h-4" />}
        titleTop="Official Fluto"
        titleGradient="Certifications."
        description="Validate your skills with globally recognized certifications. Join the elite group of professionals building the future of enterprise software."
      >
        
      </GlobalHero>

      {/* COMING SOON SECTION */}
      <ComingSoon 
        description="Our engineering and documentation teams are currently crafting high-quality certification exams, study guides, and learning tracks. We will be launching this certification hub very soon."
      />

      <Footer />
    </main>
  );
}