"use client";

import RollInText from "@/components/animation/roll-in-text";
import React from "react";

const NotFound = () => {
  return (
    <div className="grid max-w-5xl place-items-start gap-8 px-4 py-28 font-body md:mx-auto md:gap-16 md:py-36 lg:px-0">
      <h1 className="sr-only">Not Found</h1>
      <RollInText
        el="h1"
        text={["404"]}
        className="leading-tighter text-clamp-xl font-bold text-display"
        staggerChildren={0.02}
      />
    </div>
  );
};

export default NotFound;
