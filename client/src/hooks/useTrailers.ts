import { useQuery } from "@tanstack/react-query";
import { TRAILERS_QUERY_KEY } from "../constants";
import trailersServices, { Trailer } from "../services/trailersServices";
import ms from "ms";
import { Response } from "../services/gameApiClient";

export default (id: number) =>
  useQuery<Response<Trailer>, Error>({
    queryKey: TRAILERS_QUERY_KEY(id),
    queryFn: () => trailersServices.get(`${id}/movies`),
    staleTime: ms("2d"),
  });
