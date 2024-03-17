import { jlptGrammar } from "@/lib/services/grammar";
import { notFound } from "next/navigation";
import React from "react";
import BackButton from "../../core/back-button";
import ParseKanji from "../../core/parse-kanji";
import OverviewSection from "./overview-section";
import FormationSection from "./formation-section";
import ExamplesSection from "./examples-section";
import RelatedSection from "./related-section";
import NextPrevSection from "./next-prev-section";
import GrammarAppendix from "./appendix";

const GrammarDetail = async ({ slug }: { slug: string }) => {
  const grammar = await jlptGrammar.getGrammarDetails({ slug });

  if (!grammar) {
    return notFound();
  }

  return (
    <div className="flex w-full items-start justify-center lg:justify-between">
      <div className="max-w-auto grid w-full gap-8 lg:max-w-[800px]">
        <div className="grid w-full gap-12 lg:gap-16">
          <div className="flex">
            <BackButton
              href={`/grammar/${grammar?.level?.name}`}
              text={`${grammar?.level?.name?.toUpperCase()} Grammars`}
            />
          </div>
          <h1 className="font-jp text-clamp-lg font-bold leading-none">
            {grammar?.has_kanji ? (
              <ParseKanji text={grammar?.parse_string} el="span" />
            ) : (
              <span>{grammar?.name}</span>
            )}
          </h1>
          {grammar?.forms || grammar?.usage || grammar?.meaning ? (
            <OverviewSection grammar={grammar} />
          ) : null}
          {grammar?.formation ? (
            <FormationSection formation={grammar?.formation} />
          ) : null}
          {grammar?.examples?.length > 0 ? (
            <ExamplesSection examples={grammar?.examples} />
          ) : null}
          {grammar?.related_grammars?.length > 0 ? (
            <RelatedSection relatedGrammars={grammar?.related_grammars} />
          ) : null}
        </div>
        <div className="bg-secondary h-[1px] w-full" />
        <NextPrevSection level={grammar?.level?.name} currentId={grammar?.id} />
      </div>
      <aside className="sticky top-36 hidden flex-grow pl-12 lg:flex">
        <GrammarAppendix grammar={grammar} />
      </aside>
    </div>
  );
};

export default GrammarDetail;
