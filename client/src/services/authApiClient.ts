import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_BASE_URL,
});

export default class ApiClient {
  constructor(private endPoint: string) {
    this.endPoint = endPoint;
  }
  register = (reqConfig: AxiosRequestConfig) =>
    axiosInstance.post(this.endPoint, reqConfig);
}
