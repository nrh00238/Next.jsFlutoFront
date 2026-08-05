"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Forces the window to scroll to the absolute top smoothly on route change
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "instant" so the user doesn't see the travel during page load
    });
  }, [pathname]);

  return null; // This is a utility component, it renders nothing
}