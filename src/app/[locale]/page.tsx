import Hero from "@/components/home/hero";
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
    <main className="container mx-auto flex flex-col gap-4 px-4 md:px-0">
      <Hero />
    </main>
  );
}
