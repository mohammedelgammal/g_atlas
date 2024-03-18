export interface GameType {
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

interface General {
  id: number;
  name: string;
}

interface Platform {
  platform: General;
}

export interface GameDetailsType {
  id: number;
  name: string;
  description_raw: string;
  platforms: Platform[];
  metacritic: number;
  genres: General[];
  publishers: General[];
}

export interface FiltersType {
  genres: string;
  platforms: string;
  ordering: string;
  search: string;
}

export interface ResponseType<T> {
  count: number;
  results: T[];
  next: string;
}

export interface GenreType {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
}

export interface GetMeResponseType {
  _id: string;
  username: string;
  email: string;
}

export interface AuthResponseType extends GetMeResponseType {
  token: string;
  message?: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
}

export interface ScreenshotType {
  id: number;
  image: string;
  width: number;
  height: number;
}

export interface TrailerType {
  id: number;
  name: string;
  preview: string;
  data: number[];
}
