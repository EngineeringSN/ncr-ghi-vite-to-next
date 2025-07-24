"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
interface InsuranceCardProps {
  name: string;
  logo: any;
  description: string;
}

const InsuranceCard: React.FC<InsuranceCardProps> = ({
  name,
  logo,
  description,
}) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-24 w-full flex items-center justify-center mb-4 bg-white rounded-md p-2">
          <Image
            src={logo}
            alt={`${name} logo`}
            className="max-h-20 max-w-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://placehold.co/200x100/e2e8f0/64748b?text=" +
                encodeURIComponent(name);
            }}
          />
        </div>
        <h3 className="text-lg font-bold mb-2 text-securenow-darkgray">
          {name}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default InsuranceCard;
