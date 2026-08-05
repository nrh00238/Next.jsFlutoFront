import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/ThemeProvider";
// Importing the ScrollToTop component to ensure the page scrolls to the top on route changes
import ScrollToTop from "../components/ScrollToTop"; 
import BackToTop from "../components/BackToTop";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Fluto OS | One Powerful OS for your entire business", // Thoda upgrade kiya h aapke brand naye brand flow ke hisab se
  description: "Replace your fragmented tech stack. Fluto centralizes workflows, data, and collaboration into a single, high-performance workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`} suppressHydrationWarning>
      <body className={`${jakarta.className} bg-[#fafafa] dark:bg-[#030303] text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300 selection:bg-indigo-500 selection:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" 
          enableSystem={false}
          disableTransitionOnChange
        >
          
          <ScrollToTop /> 
          
          <Navbar />
          {children}
          
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}