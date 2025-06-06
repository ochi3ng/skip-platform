"use client";

import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { WasteProps } from "@/types";

interface SkipDrawerProps {
  skip: WasteProps;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (skipId: string) => void;
  isSelected: boolean;
}

export function SkipDrawer({
  skip,
  isOpen,
  onClose,
  onSelect,
  isSelected,
}: SkipDrawerProps) {
  if (!skip) return null;

  const skipName = `${skip?.size} yard skip` || "No size specified";
  const skipPrice = skip?.price_before_vat || 0;
  const hirePeriod = skip?.hire_period_days || 14;
  const roadAllowed = skip?.allowed_on_road ?? true;
  const image = skip?.image || "/trash.svg";

  const handleSelect = () => {
    if (skip?.id) {
      onSelect(skip.id);
      onClose();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
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

        <div className="mt-6 space-y-6 px-3">
          <Image
            src={image}
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              size="lg"
            >
              {isSelected ? "Selected" : "Select this Skip"}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              size="lg"
              className="cursor-pointer"
            >
              Close
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
