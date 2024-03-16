"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  if (!mounted) {
    return (
      <div className="p-1">
        <div className="h-8 w-8 rounded-full border-2 border-transparent" />
      </div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={handleClick}
      className=""
      whileHover={{ scale: 0.9 }}
    >
      <div
        className={cn(
          "border-focus h-8 w-8 rounded-full border-2 bg-background transition-colors duration-300",
        )}
      />
    </motion.button>
  );
};

export default ThemeSwitcher;
