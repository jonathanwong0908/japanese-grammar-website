"use client";

import React from "react";
import { motion } from "framer-motion";
import { ResourcesConfig } from "@/config/resources";
import LevelCard from "./level-card";

const LevelList = () => {
  return (
    <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {ResourcesConfig?.jlptLevels
        ?.filter((level) => level.status === "active")
        .map((level, index) => (
          <motion.div
            key={level.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 1 }}
            className="h-full"
          >
            <LevelCard level={level} />
          </motion.div>
        ))}
    </section>
  );
};

export default LevelList;
