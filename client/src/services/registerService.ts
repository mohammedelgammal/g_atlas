import ApiClient from "./authApiClient";

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export default new ApiClient("/register");
