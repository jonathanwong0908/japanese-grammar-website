import { jlptGrammar } from "@/lib/services/grammar";
import { JlptLevelString } from "@/types/grammar";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGrammars = ({
  initialPageParam,
  level,
}: {
  initialPageParam?: number;
  level: JlptLevelString;
}) => {
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
  } = useInfiniteQuery({
    queryKey: ["grammars"],
    queryFn: ({ pageParam }) =>
      jlptGrammar.getGrammars({ page: pageParam, level }),
    initialPageParam: initialPageParam ?? 1,
    getNextPageParam: (lastPage) => {
      if (
        lastPage?.meta?.pagination?.page < lastPage?.meta?.pagination?.pageCount
      ) {
        return lastPage.meta.pagination.page + 1;
      } else {
        return undefined;
      }
    },
  });

  return {
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
  };
};
