import { ParserResult, parser } from "@/lib/parser";
import { cn } from "@/lib/utils";
import React from "react";

interface ParseKanjiProps {
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  text: string;
}

const ParseKanji = ({
  el: Wrapper = "p",
  className,
  text,
}: ParseKanjiProps) => {
  const parsedResult = parser(text) as ParserResult;

  if (parsedResult?._tag === "Error") {
    return <Wrapper className={className}>{text}</Wrapper>;
  }

  return (
    <Wrapper className={cn("text-body-jp", className)}>
      {parsedResult?.value?.map((section, index) => (
        <span key={(section?.value as string) + index}>
          {section._tag === "kanji" ? (
            <ruby className="">
              {section?.value?.symbol}
              <rt>{section?.value?.furigana}</rt>
            </ruby>
          ) : (
            <span>{section.value}</span>
          )}
        </span>
      ))}
    </Wrapper>
  );
};

export default ParseKanji;
