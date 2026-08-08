"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { UI, fadeUpVariant, staggerContainer } from "@/lib/constants";
import { Button } from "@/components/Button";

export default function ProductPricing({ productSlug }: { productSlug: string }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProductPricing() {
      if (!productSlug) return;
      try {
        setLoading(true);
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://venu.fluto.test";
        const res = await fetch(`${backendUrl}/api/v1/products/${productSlug}`, {
          cache: "no-store",
        });
        
        if (!res.ok) throw new Error("Failed to fetch product pricing");
        
        const json = await res.json();
        if (json.success && json.data) {
          setProduct(json.data);
        } else {
          setError("Pricing plans not configured.");
        }
      } catch (err) {
        console.error("Error loading product pricing:", err);
        setError("Could not load pricing plans.");
      } finally {
        setLoading(false);
      }
    }
    fetchProductPricing();
  }, [productSlug]);

  const handleCheckout = (planId: number) => {
    console.log("Proceeding to checkout with Plan ID:", planId);
    alert(`Initiating secure checkout for Plan ID: ${planId} (${isAnnual ? 'Annually' : 'Monthly'})`);
  };

  const getDisplayPrice = (plan: any) => {
    if (plan.is_custom) return "Custom";
    
    const priceStr = isAnnual ? plan.yearly_price : plan.monthly_price;
    
    if (!priceStr || priceStr === "0" || priceStr === "0.00") return "0";
    
    const num = typeof priceStr === 'string' ? parseFloat(priceStr.replace(/,/g, '')) : priceStr;
    return num.toLocaleString('en-IN');
  };

  if (error || (!loading && (!product || !product.plans || product.plans.length === 0))) {
    return null;
  }

  return (
    <section className="py-24 sm:py-32 relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/40 dark:from-[#04030f] dark:via-[#080414] dark:to-[#030307]">
      <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] dark:opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header & Toggle */}
        <div className="text-center mb-16">
          <div className={`${UI.badge} mb-4`}>Pricing</div>
          <h2 className={`${UI.sectionHeading} ${UI.headingColor} mb-4`}>
            {product ? `Plans for ${product.name}` : "Simple, transparent pricing."}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium mb-8">No hidden fees. Billed in Indian Rupees (₹).</p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-indigo-200 dark:bg-white/10 border border-indigo-300 dark:border-white/10 transition-colors focus:outline-none flex items-center px-1"
            >
              <div className={`w-5 h-5 rounded-full bg-indigo-600 shadow-md transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm font-bold flex items-center gap-2 ${isAnnual ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
              Annually <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-200/50 dark:border-green-500/30">Save 20%</span>
            </span>
          </div>
        </div>

        {loading ? (
          <div className="py-12 text-center">
            <div className="animate-pulse flex flex-col items-center gap-4">
              <div className="h-8 w-64 bg-gray-200 dark:bg-white/10 rounded-full"></div>
              <div className="text-gray-500 dark:text-gray-400 font-medium">Loading pricing plans...</div>
            </div>
          </div>
        ) : (
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {product.plans.map((plan: any) => (
              <motion.div key={plan.id} variants={fadeUpVariant} className={`relative p-8 rounded-[2.5rem] flex flex-col justify-between ${plan.is_popular ? "bg-indigo-950 dark:bg-[#110B29] border border-indigo-500/50 shadow-2xl scale-100 md:scale-105 z-10" : "bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl border border-indigo-100 dark:border-white/5 shadow-xl"}`}>
                
                <div>
                  {/* Popular Badge */}
                  {plan.is_popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-3 h-3" /> Most Popular
                    </div>
                  )}

                  {/* Plan Name & Price */}
                  <div className={`text-xl font-bold mb-2 ${plan.is_popular ? "text-white" : "text-indigo-950 dark:text-white"}`}>{plan.name}</div>
                  <div className="mb-4 flex items-end">
                    <span className={`text-4xl font-black ${plan.is_popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      {plan.is_custom ? "Custom" : `₹${getDisplayPrice(plan)}`}
                    </span>
                    
                    {/* 🟢 FIXED: Hamesha '/mo' dikhega */}
                    {!plan.is_custom && (
                      <span className={`text-sm font-medium mb-1 ml-1 ${plan.is_popular ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                        /mo
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mb-8 font-medium ${plan.is_popular ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>{plan.description}</p>

                  {/* Dynamic Features List */}
                  <div className="space-y-4 mb-10">
                    {plan.features?.map((feat: string, j: number) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${plan.is_popular ? "text-indigo-400" : "text-indigo-500"}`} />
                        <span className={`text-sm font-medium ${plan.is_popular ? "text-gray-200" : "text-gray-700 dark:text-gray-300"}`}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checkout Button */}
                <Button 
                  variant={plan.is_popular ? "primary" : "secondary"} 
                  size="md"
                  onClick={() => handleCheckout(plan.id)}
                  className="w-full justify-center"
                >
                  {plan.cta_text || "Get Started"}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}