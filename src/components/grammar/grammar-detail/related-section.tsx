import React, { ComponentPropsWithoutRef } from "react";
import { JlptRelatedGrammar } from "@/types/grammar";
import RelatedGrammarCard from "./related-grammar-card";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  relatedGrammars: JlptRelatedGrammar[];
}

const RelatedSection = ({ relatedGrammars }: SectionProps) => {
  return (
    <section className="space-y-4" id="related-grammars">
      <h3 className="text-2xl font-bold text-display">Related Grammar</h3>
      <div className="grid gap-6">
        {relatedGrammars?.map((relatedGrammar) => (
          <RelatedGrammarCard
            relatedGrammar={relatedGrammar}
            key={relatedGrammar?.related_grammar?.id}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedSection;
