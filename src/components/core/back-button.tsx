import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { ArrowLeft } from "lucide-react";
import React, { ComponentPropsWithoutRef } from "react";

interface BackButtonProps extends ComponentPropsWithoutRef<"div"> {
  href: string;
  text: string;
}

const BackButton = ({ href, text, className }: BackButtonProps) => {
  return (
    <div
      className={cn(
        "text-subdued hover:text-body group flex transition-all duration-300",
        className,
      )}
    >
      <Link href={href} className="flex items-center gap-2">
        <span className="transition-all duration-300 group-hover:-translate-x-2">
          <ArrowLeft size={16} />
        </span>
        <span className="text-sm">{text}</span>
      </Link>
    </div>
  );
};

export default BackButton;
