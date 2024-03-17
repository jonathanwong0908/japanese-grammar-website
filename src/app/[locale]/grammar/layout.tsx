import { LocaleString } from "@/config/intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React, { ReactNode } from "react";

interface LayoutProps {
  params: {
    level: string;
    locale: LocaleString;
  };
  children: ReactNode;
}

export async function generateMetadata() {
  return {
    title: "Pick Level - Manabo",
  };
}

const Layout = ({ children, params: { locale } }: LayoutProps) => {
  unstable_setRequestLocale(locale);

  return <div>{children}</div>;
};

export default Layout;
