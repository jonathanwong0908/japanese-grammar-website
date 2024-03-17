import { NavbarConfig } from "@/config/navigation";
import { Link } from "@/navigation";
import React from "react";
import ThemeSwitcher from "../theme-switcher";

const DesktopMenu = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex">
        {NavbarConfig?.links?.map((link) => (
          <Link href={link?.href} key={link?.name} className="text-body">
            {link?.title}
          </Link>
        ))}
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default DesktopMenu;
