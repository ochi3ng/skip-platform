"use client";
import { useWaste } from "@/app/hooks";
import ErrorComponent from "@/components/shared/error-component";
import LoaderComponent from "@/components/shared/loader-component copy";
import { SkipCard } from "@/components/shared/skip-card";
import { Button } from "@/components/ui/button";
import { useBookingStore } from "@/lib/store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const { selectedSkip, setSelectedSkip, setStep } = useBookingStore();
  const { data: skips, isLoading, error } = useWaste();
  console.log("skips", skips);

  const handleContinue = () => {
    if (selectedSkip) {
      setStep(4);
      router.push("/booking/permit-check");
    }
  };

  const handleBack = () => {
    setStep(2);
    router.push("/booking/waste-type");
  };

  if (isLoading) {
    return <LoaderComponent />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Skip Size
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select the skip size that best suits your needs. Each skip comes with
          a {validSkips[0]?.hirePeriod || 14} day hire period.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skips?.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkip === skip.id}
            onSelect={setSelectedSkip}
          />
        ))}
      </div>
      <div className="flex justify-between pt-6 border-t border-gray-200">
        <Button
          variant="outline"
          onClick={handleBack}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Waste Type</span>
        </Button>

        <Button
          onClick={handleContinue}
          disabled={!selectedSkip}
          className="flex items-center space-x-2"
        >
          <span>Continue to Permit Check</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
