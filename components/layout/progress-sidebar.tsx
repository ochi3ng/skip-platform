"use client";

import { Check, ChevronRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBookingStore } from "@/lib/store";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { steps } from "@/data";
import { usePathname, useRouter } from "next/navigation";

export function ProgressSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const {
    step,
    postcode,
    wasteType,
    selectedSkip,
    permitRequired,
    selectedDate,
    setStep,
  } = useBookingStore();

  const getCurrentStep = () => {
    const currentStepData = steps.find((step) => step.route === pathname);
    return currentStepData?.id || 1;
  };

  const currentStep = getCurrentStep();

  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return "completed";
    if (stepId === currentStep) return "current";
    return "upcoming";
  };

  const isStepComplete = (stepId: number) => {
    switch (stepId) {
      case 1:
        return !!postcode;
      case 2:
        return !!wasteType;
      case 3:
        return !!selectedSkip;
      case 4:
        return permitRequired !== null;
      case 5:
        return !!selectedDate;
      case 6:
        return false;
      default:
        return false;
    }
  };

  const canNavigateToStep = (stepId: number) => {
    if (stepId <= step) return true;
    if (!isStepComplete(step)) return false;
    for (let i = 1; i < stepId; i++) {
      if (!isStepComplete(i)) return false;
    }

    return stepId === step + 1;
  };

  const handleStepClick = (stepItem: (typeof steps)[0]) => {
    if (canNavigateToStep(stepItem.id)) {
      setStep(stepItem.id);
      router.push(stepItem.route);
    }
  };

  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 p-4 space-y-4 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Booking Progress
        </h2>
        <p className="text-sm text-gray-600">
          Complete each step to book your skip hire
        </p>
      </div>

      <div className="space-y-3">
        {steps.map((stepItem) => {
          const status = getStepStatus(stepItem.id);
          const Icon = stepItem.icon;
          const isClickable = canNavigateToStep(stepItem.id);

          return (
            <Card
              key={stepItem.id}
              className={cn(
                "transition-all duration-200 border-2",
                status === "current" && "border-blue-500 shadow-md",
                status === "completed" && "border-green-200 bg-green-50",
                status === "upcoming" && "border-gray-200",
                isClickable && "cursor-pointer hover:shadow-md",
                !isClickable && status === "upcoming" && "opacity-60"
              )}
              onClick={() => isClickable && handleStepClick(stepItem)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors",
                        status === "completed" &&
                          "bg-green-500 border-green-500 text-white",
                        status === "current" &&
                          "bg-blue-500 border-blue-500 text-white",
                        status === "upcoming" &&
                          "bg-white border-gray-300 text-gray-400"
                      )}
                    >
                      {status === "completed" ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-sm font-medium">
                        {stepItem.name}
                      </CardTitle>
                      <p className="text-xs text-gray-500">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {status === "completed" && (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-700 text-xs"
                      >
                        Complete
                      </Badge>
                    )}
                    {status === "current" && (
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-700 text-xs"
                      >
                        Current
                      </Badge>
                    )}
                    {isClickable ? (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    ) : status === "upcoming" ? (
                      <Lock className="w-4 h-4 text-gray-300" />
                    ) : null}
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 space-y-1">
          <p>Need help? Call us at</p>
          <p className="font-medium text-gray-900">0800 123 4567</p>
        </div>
      </div>
    </div>
  );
}
