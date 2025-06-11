"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/shared/header";
import SkipSelector from "@/components/ui/SkipSelector";
import BreadcrumbNav from "@/components/shared/BreadcrumbNav";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Waste Store",
//   description: "Select Skip ",
// };

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Suspense>
          <div className="min-h-screen bg-gray-50 flex">
            <main className="flex-1 px-8 py-5 space-y-2">
              {/* ✅ Sticky Header */}
              <div className="sticky top-0 z-50 bg-gray-50 pb-3">
                <BreadcrumbNav />
                <Header />
              </div>
              <SkipSelector />
            </main>
          </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
