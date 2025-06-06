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
      router.push("/permit-check");
    }
  };

  const handleBack = () => {
    setStep(2);
    router.push("/waste-type");
  };

  if (isLoading) {
    return <LoaderComponent />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="space-y-2">
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
