import { HomePageData } from "@/types/api";
import { homePageDb } from "@/lib/mock-db/home";

export async function getHomePageData(): Promise<HomePageData | null> {
  // ==========================================
  // PHASE 1: Current Mock/Static Approach
  // ==========================================
  // Simulating a 300ms network delay for realistic testing
  await new Promise(resolve => setTimeout(resolve, 300));
  return homePageDb;

  // ==========================================
  // PHASE 2: Future Laravel Approach (Locked & Ready)
  // ==========================================
  /*
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pages/home`, { 
      next: { revalidate: 3600 } // ISR Caching
    });
    if (!res.ok) throw new Error("Failed to fetch home data");
    const json = await res.json();
    return json.data as HomePageData;
  } catch (error) {
    console.error("Home API Error:", error);
    return null;
  }
  */
}