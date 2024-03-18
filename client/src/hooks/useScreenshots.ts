import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import screenshotsServices from "src/services/screenshotsServices";
import { SCREENSHOTS_QUERY_KEY } from "src/constants";
import { ResponseType, ScreenshotType } from "src/types/Services";

export default (id: number) =>
  useQuery<ResponseType<ScreenshotType>, Error>({
    queryKey: SCREENSHOTS_QUERY_KEY(id),
    queryFn: () => screenshotsServices.get(`${id}/screenshots`),
    staleTime: ms("2d"),
  });
