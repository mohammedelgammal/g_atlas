import ApiClient from "./gameApiClient";

export interface Game {
  id: number;
  name: string;
  rating: number;
  rating_top: number;
  added: number;
  background_image: string;
  released: string;
  tba: boolean;
  udpated: string;
}

export default new ApiClient<Game>("/games");
