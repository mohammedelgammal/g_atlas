import ApiClient from "./authApiClient";
import { AuthResponseType, GetMeResponseType } from "src/types/Services";

const registerService = new ApiClient<AuthResponseType>("/register"),
  loginService = new ApiClient<AuthResponseType>("/login"),
  getMeService = new ApiClient<GetMeResponseType>("/me");

export { loginService, registerService, getMeService };
