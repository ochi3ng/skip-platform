"use client";
import { steps } from "@/data";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { useBookingStore } from "@/lib/store";

export function ProgressSidebar() {
  //logs selected item

  const {
    step,
    postcode,
    wasteType,
    selectedSkip,
    permitRequired,
    selectedDate,
    setStep,
  } = useBookingStore();

  console.log("step", step);

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
    // Can always go back to completed steps or current step
    if (stepId <= step) return true;

    // Can't go forward if current step isn't complete
    if (!isStepComplete(step)) return false;

    // only navigate to the next step if previous steps are complete
    for (let i = 1; i < stepId; i++) {
      if (!isStepComplete(i)) return false;
    }

    return stepId === step + 1;
  };

  const handleStepClick = (stepId: number) => {
    console.log("clicked", stepId);
    if (canNavigateToStep(stepId)) {
      setStep(stepId);
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
          return (
            <Card
              onClick={() => handleStepClick(stepItem.id)}
              className="cursor-pointer hover:shadow-md"
              key={stepItem.id}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div></div>
                    <div>
                      <CardTitle className="text-sm font-medium">
                        {stepItem.name}
                      </CardTitle>
                      <p className="text-xs text-gray-500">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2"></div>
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
