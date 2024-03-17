import GrammarDetail from "@/components/grammar/grammar-detail";
import { jlptGrammar } from "@/lib/services/grammar";
import { JlptLevelString } from "@/types/grammar";
import { unstable_setRequestLocale } from "next-intl/server";
import React, { Suspense } from "react";

interface PageProps {
  params: {
    locale: string;
    level: string;
    slug: string;
  };
}

export async function generateStaticParams({
  params: { level },
}: {
  params: { level: JlptLevelString };
}) {
  const slugs = await jlptGrammar.getGrammarSlugs({ level });

  return slugs.map((slug) => ({
    slug: slug?.slug,
  }));
}

const GrammarSlugPage = ({ params: { locale, level, slug } }: PageProps) => {
  unstable_setRequestLocale(locale);

  return (
    <main className="relative grid max-w-5xl place-items-start gap-8 px-4 py-28 font-body md:mx-auto md:gap-12 md:py-36 lg:px-0">
      <Suspense>
        <GrammarDetail slug={slug} />
      </Suspense>
    </main>
  );
};

export default GrammarSlugPage;
