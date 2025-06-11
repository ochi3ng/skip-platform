"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SkipDrawer } from "./skip-drawer";
import { SkipCardProps } from "@/types";

export function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const skipName = `${skip?.size} yard skip` || "No size specified";
  const skipPrice = skip?.price_before_vat || 0;
  const hirePeriod = skip?.hire_period_days || 14;

  const image = skip?.image || "/trash.svg";

  if (!skip) {
    return (
      <Card className="border-2 border-gray-200">
        <CardContent className="p-6 text-center">
          <p className="text-gray-500">Skip data unavailable</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card
        className={cn(
          "group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
          "border-2 overflow-hidden",
          isSelected
            ? "border-blue-500 shadow-lg ring-2 ring-blue-200"
            : "border-gray-200 hover:border-gray-300"
        )}
        onClick={() => setIsDrawerOpen(true)}
      >
        <CardContent className="p-0">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={skipName}
              width={500}
              height={300}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  {skipName}
                </h3>
                <p className="text-sm text-gray-600">{hirePeriod} day hire period</p>
              </div>

              <div className="flex items-center justify-between sm:justify-end mt-2 sm:mt-0">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mr-2">
                  £{skipPrice}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Drawer */}
      <SkipDrawer
        skip={skip}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelect={onSelect}
        isSelected={isSelected}
      />
    </>
  );
}
