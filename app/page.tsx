import { ProgressSidebar } from "@/components/layout/progress-sidebar";
import SkipSection from "@/components/shared/skip-section";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ProgressSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <SkipSection />
        </div>
      </main>
    </div>
  );
}
