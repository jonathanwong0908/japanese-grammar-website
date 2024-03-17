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
        <motion.div
          key={grammar?.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/grammar/${grammar?.level?.name}/${grammar?.slug}`}>
            <GrammarCard grammar={grammar} />
          </Link>
        </motion.div>
      ))}
    </Fragment>
  );
};

export default MotionGrammarList;
