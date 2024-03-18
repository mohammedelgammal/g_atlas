import ApiClient from "./gameApiClient";
import { ResponseType, TrailerType } from "src/types/Services";

export default new ApiClient<ResponseType<TrailerType>>("/games");
