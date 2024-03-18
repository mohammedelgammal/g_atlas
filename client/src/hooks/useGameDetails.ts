import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import gameDetailsServices from "src/services/gameDetailsServices";
import { GAME_DETAILS_KEY } from "src/constants";
import { GameDetailsType } from "src/types/Services";

export default (id: number) =>
  useQuery<GameDetailsType, Error>({
    queryKey: GAME_DETAILS_KEY(id),
    queryFn: () => gameDetailsServices.get(id.toString()),
    staleTime: ms("2d"),
  });
