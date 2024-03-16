import React from "react";
import Logo from "../logo";
import { NavbarConfig } from "@/config/navigation";
import { Link } from "@/navigation";
import FadeIn from "@/components/animation/fade-in";
import ThemeSwitcher from "../theme-switcher";

const Navbar = () => {
  return (
    <FadeIn className="fixed top-4 w-screen px-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-lg border px-4 py-3">
        <Logo />
        <div className="flex items-center gap-8">
          <div className="flex">
            {NavbarConfig?.links?.map((link) => (
              <Link
                href={link?.href}
                key={link?.name}
                className="text-base md:text-lg"
              >
                {link?.title}
              </Link>
            ))}
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
    </FadeIn>
  );
};

export default Navbar;
