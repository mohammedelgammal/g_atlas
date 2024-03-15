import ApiClient from "./authApiClient";

export interface GetMeResponse {
  _id: string;
  username: string;
  email: string;
}
export interface AuthResponse extends GetMeResponse {
  token: string;
}

const registerService = new ApiClient<AuthResponse>("/register"),
  loginService = new ApiClient<AuthResponse>("/login"),
  getMeService = new ApiClient<GetMeResponse>("/me");

export { loginService, registerService, getMeService };
