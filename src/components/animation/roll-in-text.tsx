"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface RollInTextProps {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  staggerChildren?: number;
  blockageClassName?: string;
}

const RollInText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  staggerChildren,
  blockageClassName,
}: RollInTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 1, once });

  useEffect(() => {
    if (isInView) {
      animate([
        [
          ".letter",
          { y: 0, opacity: 1 },
          {
            duration: 0.4,
            delay: staggerChildren ? stagger(staggerChildren ?? 0.02) : 0,
          },
        ],
        [
          ".blockage",
          {
            height: 0,
          },
          {
            duration: 0.4,
            at: "<",
            delay: staggerChildren ? stagger(staggerChildren ?? 0.02) : 0,
          },
        ],
        [".blockage", { opacity: 0 }, { duration: 0.0001 }],
      ]);
    }
  }, [isInView]);

  return (
    <Wrapper className={className} aria-hidden>
      <motion.span ref={scope}>
        {textArray?.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`} className="line block">
            {line?.split(" ")?.map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`} className="word inline-block">
                {word.split("")?.map((char, charIndex) => (
                  <span key={`${char}-${charIndex}`} className="relative">
                    <span className={cn("letter inline-block opacity-0")}>
                      {char}
                    </span>
                    <span
                      className={cn(
                        "blockage absolute bottom-0 left-0 h-full w-full bg-background",
                        // bottom 0 so that the height of the blockage animates from the top
                        blockageClassName,
                      )}
                    />
                  </span>
                ))}
                {line?.length !== wordIndex + 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default RollInText;
