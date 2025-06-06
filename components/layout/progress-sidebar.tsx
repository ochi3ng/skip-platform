import { steps } from "@/data";
import { Check } from "lucide-react";

export function ProgressSidebar() {
  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Your Progress
        </h2>
        <p className="text-sm text-gray-600">
          Complete each step to book your skip
        </p>
      </div>
      <div className="space-y-4">
        {steps.map((stepItem, index) => {
          return (
            <div key={stepItem.id} className="relative">
              <div className="flex items-start space-x-3">
                <div></div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3>{stepItem.name}</h3>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pt-6 border-t border-gray-200">
        <div className="text-xs text-gray-500 space-y-1">
          <p>Need help? Call us at</p>
          <p className="font-medium text-gray-900">0800 123 4567</p>
        </div>
      </div>
    </div>
  );
}
