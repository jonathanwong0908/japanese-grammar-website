import { aggregate, readItems } from "@directus/sdk";
import directus from "./directus";
import { DirectusResponseWithAggregation } from "@/types/directus";
import { JlptGrammar, JlptLevelString } from "@/types/grammar";

export const jlptGrammar = {
  getGrammars: async ({
    level,
    page = 1,
  }: {
    level: JlptLevelString;
    page?: number;
  }) => {
    const metadata = await jlptGrammar.getGrammarMetadata();
    const count = Number(metadata[0]?.count);
    const limit = 24;
    const results = await directus?.request(
      readItems("jlpt_grammars", {
        filter: {
          level: { name: { _eq: level } },
        },
        sort: ["pronunciation"],
        fields: [
          "name",
          "pronunciation",
          "slug",
          "level",
          "has_kanji",
          "abstract",
          "id",
          "parse_string",
          {
            level: ["name"],
          },
        ],
        page,
        limit,
      }),
    );

    return {
      data: results,
      meta: {
        pagination: {
          page,
          pageCount: Math.ceil(count / limit),
          pageSize: limit,
          total: count,
        },
      },
    } as DirectusResponseWithAggregation<JlptGrammar[]>;
  },
  getGrammarMetadata: async () => {
    const results = await directus?.request(
      aggregate("jlpt_grammars", {
        aggregate: {
          count: "*",
        },
      }),
    );

    return results as { count: number }[];
  },
  getGrammarSlugs: async ({ level }: { level: JlptLevelString }) => {
    const results = await directus?.request(
      readItems("jlpt_grammars", {
        fields: ["slug"],
        filter: {
          level: { name: { _eq: level } },
        },
      }),
    );

    return results;
  },
  getNextGrammar: async ({
    currentId,
    level,
  }: {
    currentId: string;
    level: string;
  }) => {
    const results = await directus?.request(
      readItems("jlpt_grammars", {
        fields: ["slug", "id", "name", "has_kanji", "parse_string"],
        filter: {
          level: { name: { _eq: level } },
        },
        sort: ["pronunciation"],
        limit: 150,
      }),
    );

    const current = results.findIndex((grammar) => grammar.id === currentId);
    const next = results[current + 1] ? results[current + 1] : null;
    const prev = results[current - 1] ? results[current - 1] : null;
    return {
      next,
      prev,
    } as {
      next: JlptGrammar | null;
      prev: JlptGrammar | null;
    };
  },
  getGrammarDetails: async ({ slug }: { slug: string }) => {
    const results = await directus?.request(
      readItems("jlpt_grammars", {
        filter: {
          slug: { _eq: slug },
        },
        fields: [
          "*",
          {
            level: ["name"],
            examples: ["sentence", "meaning"],
            related_grammars: [
              "related_grammar",
              "explanation",
              {
                related_grammar: [
                  "name",
                  "slug",
                  "level",
                  "id",
                  "parse_string",
                  "has_kanji",
                  {
                    level: ["name"],
                  },
                ],
              },
            ],
          },
        ],
      }),
    );

    return results[0] as JlptGrammar;
  },
};
