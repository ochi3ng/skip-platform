import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WasteProps } from "@/types";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { AlertTriangle, ArrowRight, Info } from "lucide-react";
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
  return (
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
            width={100}
            height={50}
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
            <h3 className="text-lg font-semibold text-gray-900">{skipName}</h3>
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
            <div className="text-2xl font-bold text-blue-600">£{skipPrice}</div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
