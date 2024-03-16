import { LocaleString } from "@/config/intl";

type HomePageProps = {
  params: {
    locale: LocaleString;
  };
};

export default function Home({ params: { locale } }: HomePageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24"></main>
  );
}
