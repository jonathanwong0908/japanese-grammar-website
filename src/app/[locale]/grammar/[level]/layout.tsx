import { LocaleString } from "@/config/intl";
import { ResourcesConfig } from "@/config/resources";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

interface LayoutProps {
  params: {
    level: string;
    locale: LocaleString;
  };
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return ResourcesConfig.jlptLevels.map((jlptLevel) => ({
    level: jlptLevel.name,
  }));
}

const Layout = ({ children, params: { locale } }: LayoutProps) => {
  unstable_setRequestLocale(locale);

  return <div>{children}</div>;
};

export default Layout;
