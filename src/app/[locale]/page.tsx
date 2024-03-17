import { LocaleString } from "@/config/intl";
import { unstable_setRequestLocale } from "next-intl/server";

type HomePageProps = {
  params: {
    locale: LocaleString;
  };
};

export default function Home({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24"></main>
  );
}
