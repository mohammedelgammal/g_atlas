import ApiClient from "./gameApiClient";

interface General {
  id: number;
  name: string;
}

interface Platform {
  platform: General;
}

export interface GameDetails {
  id: number;
  name: string;
  description_raw: string;
  platforms: Platform[];
  metacritic: number;
  genres: General[];
  publishers: General[];
}

export default new ApiClient<GameDetails>("/games");
