"use client";

import { useState } from "react";
import Image from "next/image";
import { AlertTriangle, Info, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { WasteProps } from "@/types";

interface SkipCardProps {
  skip: WasteProps;
  isSelected: boolean;
  onSelect: (skipId: string) => void;
}

export function SkipCard({ skip, isSelected, onSelect }: SkipCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const skipName = `${skip?.size} yard skip` || "No size specified";
  const skipPrice = skip?.price_before_vat || 0;
  const skipSize = skip?.size || 0;
  const hirePeriod = skip?.hire_period_days || 14;
  const roadAllowed = skip?.allowed_on_road ?? true;

  const image = skip?.image || "/trash.svg";

  const handleSelect = () => {
    if (skip?.id) {
      onSelect(skip.id);
      setIsDrawerOpen(false);
    }
  };

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
          <div className="relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={skipName}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />

            <Badge
              variant="secondary"
              className="absolute top-3 right-3 bg-blue-600 text-white hover:bg-blue-700"
            >
              {skipSize} Yards
            </Badge>

            {!roadAllowed && (
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-2 rounded-md text-xs font-medium">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Not Allowed On The Road</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {skipName}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-700 p-0"
              >
                <Info className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              {hirePeriod} day hire period
            </p>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-blue-600">
                £{skipPrice}
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent
          side="right"
          className="w-[400px] sm:w-[540px] overflow-y-auto"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="text-2xl">{skipName}</SheetTitle>
            <SheetDescription className="text-lg">
              £{skipPrice} for {hirePeriod} days
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            <Image
              src={image || "/placeholder.svg"}
              alt={skipName}
              width={400}
              height={250}
              className="w-full h-64 object-cover rounded-lg"
            />
            {!roadAllowed && (
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-amber-800 mb-1">
                      Road Placement Not Allowed
                    </h5>
                    <p className="text-sm text-amber-700">
                      This skip must be placed on private property such as a
                      driveway or private land. A permit cannot be obtained for
                      road placement.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col space-y-3">
              <Button
                onClick={handleSelect}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                {isSelected ? "Selected" : "Select This Skip"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsDrawerOpen(false)}
                size="lg"
              >
                Close
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
