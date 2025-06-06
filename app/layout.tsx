import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProgressSidebar } from "@/components/layout/progress-sidebar";
import { Providers } from "./providers";
import Header from "@/components/shared/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waste Store",
  description: "Select Skip ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen bg-gray-50 flex">
            <ProgressSidebar />
            <main className="flex-1 px-8 py-5 space-y-2">
              {/* ✅ Sticky Header */}
              <div className="sticky top-0 z-50 bg-gray-50 pb-3">
                <Header />
              </div>

              <div className="max-w-6xl mx-auto">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
