import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { JlptLevel } from "@/types/resources";
import { ArrowRight } from "lucide-react";
import React, { ComponentPropsWithoutRef } from "react";

interface LevelCardProps extends ComponentPropsWithoutRef<"div"> {
  level: JlptLevel;
}

const LevelCard = ({ level }: LevelCardProps) => {
  return (
    <Link href={level?.href}>
      <Card className="group flex h-full flex-col gap-6 p-4 md:gap-8 md:p-6">
        <div>
          <CardTitle className="font-semibold uppercase text-display">
            {level?.name}
          </CardTitle>
          <p className="text-subdued">{level?.description}</p>
        </div>
        <div className="flex justify-end">
          <span className="text-subdued transition-all duration-300 group-hover:translate-x-2 group-hover:text-body">
            <ArrowRight size={16} />
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default LevelCard;
