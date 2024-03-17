"use client";

import { Link } from "@/navigation";
import { JlptGrammar } from "@/types/grammar";
import React from "react";

interface AppendixProps {
  grammar: JlptGrammar;
}

const GrammarAppendix = ({ grammar }: AppendixProps) => {
  const baseLink = `/resources/jlpt/${grammar?.level?.name}/grammar/${grammar?.slug}`;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    const offset = 100; // replace with your desired offset
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY;
      window.scrollTo({
        top: rect.top + scrollTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="grid w-full gap-6">
      <h4 className="font-semibold text-display">On this page</h4>
      <div className="flex w-full flex-col gap-4 text-sm text-body">
        {grammar?.forms || grammar?.usage || grammar?.meaning ? (
          <Link
            className="text-subdued w-full transition duration-300 hover:text-body"
            href={`${baseLink}#overview`}
            onClick={(e) => handleClick(e, "overview")}
          >
            Overview
          </Link>
        ) : null}
        {grammar?.formation ? (
          <Link
            className="text-subdued w-full transition duration-300 hover:text-body"
            href={`${baseLink}#formation`}
            onClick={(e) => handleClick(e, "formation")}
          >
            Formation
          </Link>
        ) : null}
        {grammar?.examples?.length > 0 ? (
          <Link
            className="text-subdued w-full transition duration-300 hover:text-body"
            href={`${baseLink}#examples`}
            onClick={(e) => handleClick(e, "examples")}
          >
            Examples
          </Link>
        ) : null}
        {grammar?.related_grammars?.length > 0 ? (
          <Link
            className="text-subdued w-full transition duration-300 hover:text-body"
            href={`${baseLink}#related-grammars`}
            onClick={(e) => handleClick(e, "related-grammars")}
          >
            Related Grammar
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default GrammarAppendix;
