import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import trailersServices from "src/services/trailersServices";
import { TRAILERS_QUERY_KEY } from "src/constants";
import { ResponseType, TrailerType } from "src/types/Services";

export default (id: number) =>
  useQuery<ResponseType<TrailerType>, Error>({
    queryKey: TRAILERS_QUERY_KEY(id),
    queryFn: () => trailersServices.get(`${id}/movies`),
    staleTime: ms("2d"),
  });
