import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import gamesServices from "src/services/gamesServices";
import { cleanUpFilters } from "src/utils/helpers";
import { GAMES_QUERY_KEY } from "src/constants";
import { FiltersType, GameType, ResponseType } from "src/types/Services";

export default (filters: FiltersType) =>
  useInfiniteQuery<ResponseType<GameType>, Error>({
    queryKey: GAMES_QUERY_KEY(filters),
    queryFn: ({ pageParam, signal }) =>
      gamesServices.getAll({
        params: {
          page: pageParam,
          page_size: 10,
          ...cleanUpFilters(filters),
        },
        signal,
      }),
    staleTime: ms("2h"),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
