import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_BASE_URL,
});

export default class ApiClient<T> {
  constructor(private endPoint: string) {
    this.endPoint = endPoint;
  }
  register = (reqConfig: AxiosRequestConfig): Promise<T> =>
    axiosInstance.post<T>(this.endPoint, reqConfig).then((res) => res.data);
  login = (reqConfig: AxiosRequestConfig): Promise<T> =>
    axiosInstance.post<T>(this.endPoint, reqConfig).then((res) => res.data);
  getMe = (reqConfig: AxiosRequestConfig): Promise<T> =>
    axiosInstance.get<T>(this.endPoint, reqConfig).then((res) => res.data);
}
