import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { GAME_DETAILS_KEY } from "../constants";
import gameDetailsServices, {
  GameDetails,
} from "../services/gameDetailsServices";

export default (id: number) =>
  useQuery<GameDetails, Error>({
    queryKey: GAME_DETAILS_KEY(id),
    queryFn: () => gameDetailsServices.get(id.toString()),
    staleTime: ms("2d"),
  });
