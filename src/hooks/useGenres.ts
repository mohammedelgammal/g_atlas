import { useQuery } from "@tanstack/react-query";
import genresService, { Genre } from "../services/genresService";
import ms from "ms";
import { Response } from "../services/apiClient";
import { GENRES_QUERY_KEY } from "../constants";

export default () =>
  useQuery<Response<Genre>, Error>({
    queryKey: GENRES_QUERY_KEY,
    queryFn: genresService.getAll,
    staleTime: ms("1d"),
  });
