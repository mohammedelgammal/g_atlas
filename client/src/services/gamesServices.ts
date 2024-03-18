import ApiClient from "./gameApiClient";
import { GameType } from "src/types/Services";

export default new ApiClient<GameType>("/games");
