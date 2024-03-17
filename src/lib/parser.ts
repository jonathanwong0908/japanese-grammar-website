import { isKana, isKanji as isKanjiWanakana } from "wanakana";

const isKanji = (str: string) =>
  str.split("").every((char) => isKanjiWanakana(char) || char === "々");

enum KanjiToken {
  KANJI_START = "{",
  KANJI_END = "}",
  KANJI_SEPARATOR = "|",
}

interface Kanji {
  symbol: string;
  furigana: string;
}

type KanjiWord =
  | { _tag: "kanji"; value: Kanji }
  | { _tag: "kana"; value: string };

interface ParserError {
  _tag: "Error";
  value: string;
}

type ParserResultTemp =
  | ParserError
  | {
      _tag: "Success";
      value: KanjiWord;
      nextSource: string;
    };
export type ParserResult =
  | ParserError
  | {
      _tag: "Success";
      value: { 0: KanjiWord } & KanjiWord[];
    };

const parserKanji = (source: string): ParserResultTemp => {
  if (source.length === 0) {
    return { _tag: "Error", value: `Kanji is empty` };
  } else if (source[0] !== KanjiToken.KANJI_START) {
    return { _tag: "Error", value: `Missing kanji start token in "${source}"` };
  }

  let index = 1;
  let char = source[index];

  let symbol = "";
  while (char !== KanjiToken.KANJI_SEPARATOR) {
    // while char !== |
    if (index === source.length) {
      return {
        _tag: "Error",
        value: `Missing kanji separator token ("${KanjiToken.KANJI_SEPARATOR}") in "${source}"`,
      };
    }

    symbol += char;

    index += 1;
    char = source[index];
  }

  if (symbol.length === 0) {
    return {
      _tag: "Error",
      value: `Kanji symbol is empty in "${source}"`,
    };
  } else if (!isKanji(symbol)) {
    return {
      _tag: "Error",
      value: `Invalid kanji symbol in "${symbol}" for "${source}"`,
    };
  }

  // Skip separator
  index += 1;
  char = source[index];

  let furigana = "";
  while (char !== KanjiToken.KANJI_END) {
    if (index === source.length) {
      return {
        _tag: "Error",
        value: `Missing kanji end token ("${KanjiToken.KANJI_END}") in "${source}"`,
      };
    }

    furigana += char;

    index += 1;
    char = source[index];
  }

  if (furigana.length === 0) {
    return {
      _tag: "Error",
      value: `Kanji furigana is empty in "${source}" for symbol "${symbol}"`,
    };
  } else if (!isKana(furigana)) {
    return {
      _tag: "Error",
      value: `Invalid furigana characters in "${furigana}" for "${source}"`,
    };
  }

  return {
    _tag: "Success",
    value: { _tag: "kanji", value: { symbol, furigana } },
    nextSource: source.slice(symbol.length + furigana.length + 3),
  };
};

const parserKana = (source: string): ParserResultTemp => {
  const takeWhileKana = (str: string): string => {
    const char = str[0];
    // this is 、
    if (str.length > 0 && isKana(char)) {
      // here if the char is 、 the it is not kana, so need to add is punctuation
      return `${char}${takeWhileKana(str.slice(1))}`;
    } else {
      return ``;
    }
  };

  const kana = takeWhileKana(source);
  if (kana.length === 0) {
    return { _tag: "Error", value: `Kana characters missing in "${source}"` };
  } else if (!isKana(kana)) {
    return {
      _tag: "Error",
      value: `Invalid kana characters in "${kana}" for "${source}"`,
    };
  }

  return {
    _tag: "Success",
    value: { _tag: "kana", value: kana },
    nextSource: source.slice(kana.length),
  };
};

export const parser = (source: string): ParserResult => {
  if (source.length === 0) {
    return { _tag: "Error", value: `Source is empty` };
  }

  const kanjiWordList: KanjiWord[] = [];

  let index = 0;
  let parseSource = source;
  while (parseSource.length > 0) {
    // get current char
    let char = parseSource[index];

    // if the char is {
    if (char === KanjiToken.KANJI_START) {
      const kanji = parserKanji(parseSource);
      if (kanji._tag === "Error") {
        return kanji;
      }

      parseSource = kanji.nextSource;
      kanjiWordList.push(kanji.value);
    } else {
      const kana = parserKana(parseSource);
      if (kana._tag === "Error") {
        return kana;
      }

      parseSource = kana.nextSource;
      kanjiWordList.push(kana.value);
    }
  }

  if (kanjiWordList.length === 0) {
    return { _tag: "Error", value: `Kanji is empty in "${source}"` };
  }

  return {
    _tag: "Success",
    value: [kanjiWordList[0], ...kanjiWordList.slice(1)],
  };
};
