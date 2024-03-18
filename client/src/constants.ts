import { FiltersType } from "./types/Services";

const token = localStorage.getItem("loginToken");

export const GENRES_QUERY_KEY = ["genres"];
export const GAMES_QUERY_KEY = (filters: FiltersType) => ["games", { filters }];
export const GAME_DETAILS_KEY = (id: number) => ["game", id];
export const SCREENSHOTS_QUERY_KEY = (id: number) => ["screenshots", id];
export const TRAILERS_QUERY_KEY = (id: number) => ["trailers", id];
export const REGISTER_QUERY_KEY = ["register"];
export const LOGIN_QUERY_KEY = ["login"];
export const GET_ME_QUERY_KEY = ["me", token];
export const PRIMARY_COlOR = "#f0ac75";
export const CHARACTERS_LIMIT = 300;
