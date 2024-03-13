import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_BASE_URL,
});

export default class ApiClient<T> {
  constructor(private endPoint: string) {
    this.endPoint = endPoint;
  }
  register = (requestPayload: T): Promise<T> =>
    axiosInstance.post(this.endPoint, requestPayload).then((res) => res.data);
}
