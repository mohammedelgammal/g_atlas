import ApiClient from "./gameApiClient";
import { GameDetailsType } from "src/types/Services";

export default new ApiClient<GameDetailsType>("/games");
