import ApiClient, { Response } from "./gameApiClient";

export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

export default new ApiClient<Response<Screenshot>>("/games");
