import React from "react";
import { Card, CardTitle } from "../ui/card";
import ParseKanji from "../core/parse-kanji";
import { JlptGrammar } from "@/types/grammar";
import { ArrowRight } from "lucide-react";
import { Link } from "@/navigation";

const GrammarCard = ({ grammar }: { grammar: JlptGrammar }) => {
  return (
    <Link
      href={`/grammar/${grammar?.level?.name}/${grammar?.slug}`}
      className="flex h-full"
    >
      <Card className="group flex min-h-[160px] w-full flex-col justify-between gap-4 p-6 md:min-h-[180px]">
        <div className="grid">
          <CardTitle className="group-hover:text-brand min-h-9 font-jp font-bold">
            {grammar?.has_kanji ? (
              <ParseKanji text={grammar?.parse_string} el="span" />
            ) : (
              <span>{grammar?.name}</span>
            )}
          </CardTitle>
          <p className="text-subdued">{grammar?.abstract}</p>
        </div>
        <div className="flex justify-end">
          <span className="text-subdued transition-all duration-300 group-hover:translate-x-2 group-hover:text-display">
            <ArrowRight size={16} />
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default GrammarCard;
