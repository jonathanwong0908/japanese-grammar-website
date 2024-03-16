import { Noto_Sans_JP, Onest } from "next/font/google";

const notoSansJap = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
  variable: "--font-japanese",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
  variable: "--font-main",
});

export { notoSansJap, onest };
