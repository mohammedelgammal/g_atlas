import axios, { AxiosRequestConfig } from "axios";
import { ResponseType } from "src/types/Services";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_GAME_API_BASE_URL,
});

export default class ApiClient<T> {
  constructor(private endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (reqConfig: AxiosRequestConfig): Promise<ResponseType<T>> =>
    axiosInstance
      .get<ResponseType<T>>(this.endPoint, {
        ...reqConfig,
        params: {
          ...reqConfig.params,
          key: import.meta.env.VITE_SECRET_KEY,
        },
      })
      .then((res) => res.data);
  get = (url: string = "", reqConfig?: AxiosRequestConfig): Promise<T> =>
    axiosInstance
      .get(`${this.endPoint}/${url}`, {
        ...reqConfig,
        params: {
          ...reqConfig?.params,
          key: import.meta.env.VITE_SECRET_KEY,
        },
      })
      .then((res) => res.data);
}
