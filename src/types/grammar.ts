export type JlptGrammar = {
  name: string;
  pronunciation: string;
  parse_string: string;
  slug: string;
  level: {
    name: JlptLevelString;
  };
  has_kanji: boolean;
  meaning: string;
  forms: string;
  usage: string;
  formation: string;
  remarks: string;
  related_grammars: JlptRelatedGrammar[];
  examples: JlptExample[];
  abstract: string;
  id: string;
};

export type JlptLevelString = "n1" | "n2" | "n3" | "n4" | "n5";

export type JlptRelatedGrammar = {
  explanation: string;
  related_grammar: {
    id: string;
    name: string;
    slug: string;
    parse_string: string;
    has_kanji: boolean;
    level: {
      name: JlptLevelString;
    };
  };
};

export type JlptExample = {
  sentence: string;
  meaning: string;
};
