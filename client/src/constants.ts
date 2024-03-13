import { Filters } from "./hooks/useGames";

export const GENRES_QUERY_KEY = ["genres"];
export const GAMES_QUERY_KEY = (filters: Filters) => ["games", { filters }];
export const GAME_DETAILS_KEY = (id: number) => ["game", id];
export const SCREENSHOTS_QUERY_KEY = (id: number) => ["screenshots", id];
export const TRAILERS_QUERY_KEY = (id: number) => ["trailers", id];
export const REGISTER_QUERY_KEY = ["register"];
