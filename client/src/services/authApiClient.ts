import axios, { AxiosRequestConfig } from "axios";
import { CreateUserData, LoginUserData } from "../hooks/useRegister";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_BASE_URL,
});

export default class ApiClient<T> {
  constructor(private endPoint: string) {
    this.endPoint = endPoint;
  }
  register = (createUserData: CreateUserData): Promise<T> =>
    axiosInstance
      .post<T>(this.endPoint, createUserData)
      .then((res) => res.data);
  login = (loginUserData: LoginUserData): Promise<T> =>
    axiosInstance.post<T>(this.endPoint, loginUserData).then((res) => res.data);
  getMe = (reqConfig: AxiosRequestConfig): Promise<T> =>
    axiosInstance.get<T>(this.endPoint, reqConfig).then((res) => res.data);
}
