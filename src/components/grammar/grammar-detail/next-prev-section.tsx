import ParseKanji from "@/components/core/parse-kanji";
import { Card } from "@/components/ui/card";
import { jlptGrammar } from "@/lib/services/grammar";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { JlptGrammar } from "@/types/grammar";
import React, { ComponentPropsWithoutRef } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  level: string;
  currentId: string;
}

const NextPrevSection = async ({ level, currentId }: SectionProps) => {
  const data = await jlptGrammar.getNextGrammar({ level, currentId });

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-6 md:flex-row md:justify-between",
        !data?.prev && "md:justify-end",
      )}
    >
      {data?.prev ? (
        <NextPrevCard level={level} grammar={data?.prev} justify="start" />
      ) : null}
      {data?.next ? (
        <NextPrevCard level={level} grammar={data?.next} justify="end" />
      ) : null}
    </div>
  );
};

export default NextPrevSection;

const NextPrevCard = ({
  grammar,
  justify,
  level,
}: {
  grammar: JlptGrammar;
  justify: "end" | "start";
  level: string;
}) => {
  return (
    <Link
      href={`/grammar/${level}/${grammar?.slug}`}
      className="flex h-full w-full md:w-1/2"
    >
      <Card
        className={cn(
          "hover:border-brand group flex w-full px-5 py-4 transition duration-300",
          `justify-${justify}`,
        )}
      >
        <div
          className={cn(
            "grid gap-1",
            justify === "end" ? "place-items-end" : "place-items-start",
          )}
        >
          <span className="text-subdued">
            {justify === "start" ? "Previous" : "Next"}
          </span>
          <div className="">
            {grammar?.has_kanji ? (
              <ParseKanji
                text={grammar?.parse_string}
                el="span"
                className="group-hover:text-brand font-jp font-semibold transition-colors duration-300"
              />
            ) : (
              <span className="group-hover:text-brand font-jp font-semibold transition-colors duration-300">
                {grammar?.name}
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};
