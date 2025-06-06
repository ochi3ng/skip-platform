import { ProgressSidebar } from "@/components/layout/progress-sidebar";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ProgressSidebar />

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <p>skip section</p>
        </div>
      </main>
    </div>
  );
}
