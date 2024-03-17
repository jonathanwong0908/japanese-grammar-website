import FadeIn from "@/components/animation/fade-in";
import RollInText from "@/components/animation/roll-in-text";
import BackButton from "@/components/core/back-button";
import GrammarList from "@/components/grammar/grammar-list";
import { ResourcesConfig, jlptLevels } from "@/config/resources";
import { JlptLevelString } from "@/types/grammar";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface JlptLevelPageProps {
  params: { level: JlptLevelString; locale: string };
}

const JlptLevelPage = ({ params: { level, locale } }: JlptLevelPageProps) => {
  if (!jlptLevels.includes(level)) {
    return notFound();
  }

  unstable_setRequestLocale(locale);

  const levelData = ResourcesConfig.jlptLevels.find(
    (jlptLevel) => jlptLevel.name === level,
  );

  return (
    <div className="grid max-w-5xl place-items-start gap-8 px-4 py-28 font-body md:mx-auto md:gap-12 md:py-36 lg:px-0">
      <FadeIn>
        <BackButton href="/grammar" text="Level" />
      </FadeIn>
      <div className="grid gap-4 md:gap-8">
        <FadeIn>
          <p className="text-brand text-sm md:text-base">
            {levelData?.description}
          </p>
        </FadeIn>
        <h1 className="sr-only">{level} materials</h1>
        <RollInText
          el="h1"
          text={[`${level.toUpperCase()} grammar`]}
          className="text-clamp-xl font-bold leading-none tracking-tighter text-display"
        />
      </div>
      <Suspense fallback={<div>Loading Async...</div>}>
        <GrammarList level={level} />
      </Suspense>
    </div>
  );
};

export default JlptLevelPage;
