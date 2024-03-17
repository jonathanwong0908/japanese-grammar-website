import FadeIn from "@/components/animation/fade-in";
import RollInText from "@/components/animation/roll-in-text";
import BackButton from "@/components/core/back-button";
import LevelList from "@/components/grammar/level-list";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const GrammarPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);

  return (
    <div className="grid max-w-5xl place-items-start gap-8 px-4 py-28 font-body md:mx-auto md:gap-12 md:py-36 lg:px-0">
      <FadeIn>
        <BackButton href="/" text="Home" />
      </FadeIn>
      <div className="grid gap-4 md:gap-8">
        <h1 className="sr-only">Grammar</h1>
        <RollInText
          el="h1"
          text={["Grammar"]}
          className="text-clamp-xl font-bold leading-none tracking-tighter text-display"
          staggerChildren={0.01}
        />
        <FadeIn delay={0.75}>
          <p className="text-body">
            Study grammar based on the level that you are on.
          </p>
        </FadeIn>
      </div>
      <FadeIn className="w-full" delay={1}>
        <LevelList />
      </FadeIn>
    </div>
  );
};

export default GrammarPage;
