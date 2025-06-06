"use client";
import { useWaste } from "@/app/hooks";
import ErrorComponent from "@/components/shared/error-component";
import LoaderComponent from "@/components/shared/loader-component copy";
import { SkipCard } from "@/components/shared/skip-card";
import { useBookingStore } from "@/lib/store";

export default function Page() {
  const { postcode, area, selectedSkip, setSelectedSkip, setStep } =
    useBookingStore();
  const { data: skips, isLoading, error } = useWaste();
  console.log("skips", skips);

  if (isLoading) {
    return <LoaderComponent />;
  }
  if (error) {
    return <ErrorComponent error={error} />;
  }
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Skip Size
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select the skip size that best suits your needs. Each skip comes with
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
    </div>
  );
}
