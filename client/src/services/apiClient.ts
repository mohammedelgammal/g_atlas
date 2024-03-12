import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
  count: number;
  results: T[];
  next: string;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default class ApiClient<T> {
  constructor(private endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (reqConfig: AxiosRequestConfig): Promise<Response<T>> =>
    axiosInstance
      .get<Response<T>>(this.endPoint, {
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
