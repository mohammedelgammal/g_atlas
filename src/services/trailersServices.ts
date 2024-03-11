import ApiClient, { Response } from "./apiClient";

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: number[];
}

export default new ApiClient<Response<Trailer>>("/games");
