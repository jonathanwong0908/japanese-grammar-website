"use client";

import { Link } from "@/navigation";
import { JlptGrammar } from "@/types/grammar";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
import GrammarCard from "./grammar-card";

const MotionGrammarList = ({ data }: { data: JlptGrammar[] }) => {
  return (
    <Fragment>
      {data?.map((grammar, index) => (
        <GrammarCard grammar={grammar} key={grammar?.id} />
      ))}
    </Fragment>
  );
};

export default MotionGrammarList;
