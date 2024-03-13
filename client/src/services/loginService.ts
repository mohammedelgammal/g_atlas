import ApiClient from "./authApiClient";

export interface LoginData {
  email: string;
  password: string;
}

export default new ApiClient("/login");
