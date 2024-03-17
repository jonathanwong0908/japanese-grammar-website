import { jlptGrammar } from "@/lib/services/grammar";
import { JlptLevelString } from "@/types/grammar";
import React from "react";
import MotionGrammarList from "./motion-grammar-list";
import GrammarListClient from "./grammar-list-client";

const GrammarList = async ({ level }: { level: JlptLevelString }) => {
  const grammars = await jlptGrammar.getGrammars({ level, page: 1 });

  return (
    <section className="w-full">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <MotionGrammarList data={grammars?.data || []} />
        <GrammarListClient level={level} />
      </div>
    </section>
  );
};

export default GrammarList;
