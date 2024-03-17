import Navbar from "@/components/core/navbar";
import ReactQueryProvider from "@/components/core/query-provider";
import { ThemeProvider } from "@/components/core/theme-provider";
import { locales } from "@/config/intl";
import { notoSansJap, onest } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await getTranslations("rootLayout");

  return {
    title: t("title"),
  };
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={cn(onest.variable, notoSansJap.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            storageKey="theme"
            attribute="class"
            defaultTheme="dark"
            themes={["dark", "light"]}
          >
            <ReactQueryProvider>
              <div className="min-h-screen bg-background font-body">
                <Navbar />
                {children}
              </div>
            </ReactQueryProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
