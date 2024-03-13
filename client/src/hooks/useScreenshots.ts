import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { SCREENSHOTS_QUERY_KEY } from "../constants";
import { Response } from "../services/gameApiClient";
import screenshotsServices, {
  Screenshot,
} from "../services/screenshotsServices";

export default (id: number) =>
  useQuery<Response<Screenshot>, Error>({
    queryKey: SCREENSHOTS_QUERY_KEY(id),
    queryFn: () => screenshotsServices.get(`${id}/screenshots`),
    staleTime: ms("2d"),
  });
