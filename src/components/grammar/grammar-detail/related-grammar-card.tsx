import React, { ComponentPropsWithoutRef } from "react";
import ParseKanji from "@/components/core/parse-kanji";
import { Card } from "@/components/ui/card";
import { Link } from "@/navigation";
import { ArrowRight } from "lucide-react";
import Markdown from "react-markdown";
import { JlptRelatedGrammar } from "@/types/grammar";

interface RelatedGrammarCardProps extends ComponentPropsWithoutRef<"div"> {
  relatedGrammar: JlptRelatedGrammar;
}

const RelatedGrammarCard = ({ relatedGrammar }: RelatedGrammarCardProps) => {
  const level = relatedGrammar?.related_grammar?.level?.name;

  return (
    <Link
      href={`/resources/jlpt/${level}/grammar/${relatedGrammar?.related_grammar?.slug}`}
      key={relatedGrammar?.related_grammar?.id}
    >
      <Card className="group grid gap-12 p-6">
        <div className="grid gap-2">
          <div className="flex items-start justify-between gap-2">
            {relatedGrammar?.related_grammar?.has_kanji ? (
              <ParseKanji
                text={relatedGrammar?.related_grammar?.parse_string}
                className="group-hover:text-brand text-lg font-bold transition-colors duration-300"
              />
            ) : (
              <span className="group-hover:text-brand text-lg font-bold transition-colors duration-300">
                {relatedGrammar?.related_grammar?.name}
              </span>
            )}
            <span className="border-xs border-secondary text-muted rounded-full px-3 py-0.5 text-xs uppercase">
              {level}
            </span>
          </div>
          <Markdown
            className="text-body"
            components={{
              em: ({ node, ...props }) => {
                return (
                  <ParseKanji
                    // @ts-ignore
                    text={node?.children?.[0]?.value! as string}
                    el="span"
                    className="font-normal"
                  />
                );
              },
              strong: ({ node, ...props }) => (
                <strong
                  className="font-semibold underline underline-offset-2"
                  {...props}
                />
              ),
            }}
          >
            {relatedGrammar?.explanation}
          </Markdown>
        </div>
        <div className="flex items-center justify-end">
          <span className="text-subdued transition-all duration-300 group-hover:translate-x-2 group-hover:text-body">
            <ArrowRight size={16} />
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default RelatedGrammarCard;
