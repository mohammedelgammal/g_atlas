import ApiClient from "./gameApiClient";
import { ResponseType, ScreenshotType } from "src/types/Services";

export default new ApiClient<ResponseType<ScreenshotType>>("/games");
