import { useQuery } from "@tanstack/react-query";
import genresService from "src/services/genresService";
import ms from "ms";
import { GenreType, ResponseType } from "src/types/Services";
import { GENRES_QUERY_KEY } from "src/constants";

export default () =>
  useQuery<ResponseType<GenreType>, Error>({
    queryKey: GENRES_QUERY_KEY,
    queryFn: genresService.getAll,
    staleTime: ms("1d"),
  });
