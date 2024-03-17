"use client";

import { useGrammars } from "@/hooks/grammar";
import { JlptLevelString } from "@/types/grammar";
import { useInView } from "framer-motion";
import React, { Fragment, useEffect, useRef } from "react";
import GrammarCard from "./grammar-card";

const GrammarListClient = ({ level }: { level: JlptLevelString }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const {
    data,
    error,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useGrammars({ initialPageParam: 2, level: level });

  useEffect(() => {
    if (isInView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isInView]);

  return (
    <Fragment>
      {data?.pages?.map((page, i) => (
        <Fragment key={i}>
          {page?.data?.map((grammar) => (
            <GrammarCard grammar={grammar} key={grammar?.id} />
          ))}
        </Fragment>
      ))}
      {isLoading || isFetching ? (
        <div className="col-span-full">Loading Client...</div>
      ) : null}
      <div ref={ref} className="col-span-full">
        {isFetchingNextPage ? <div>Loading next page</div> : null}
      </div>
    </Fragment>
  );
};

export default GrammarListClient;
