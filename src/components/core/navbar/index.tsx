import React from "react";
import Logo from "../logo";
import FadeIn from "@/components/animation/fade-in";
import DesktopMenu from "./desktop-menu";

const Navbar = () => {
  return (
    <FadeIn className="fixed top-4 z-50 w-screen px-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-lg border bg-background/90 px-4 py-3 shadow-sm backdrop-blur-lg">
        <Logo />
        <DesktopMenu />
      </nav>
    </FadeIn>
  );
};

export default Navbar;
