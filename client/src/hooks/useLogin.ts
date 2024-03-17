import { useMutation } from "@tanstack/react-query";
import { AuthResponse, loginService } from "../services/authService";
import { LOGIN_QUERY_KEY } from "../constants";
import { LoginUserData } from "./useRegister";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { LoginFormFields } from "../components/Auth/Login";
import { AxiosError } from "axios";
import useGetMe from "./useGetMe";

export default (
  reset: UseFormReset<LoginFormFields>,
  setError: UseFormSetError<LoginFormFields>
) => {
  return useMutation<AuthResponse, AxiosError<AxiosError>, LoginUserData>({
    mutationKey: LOGIN_QUERY_KEY,
    mutationFn: loginService.login,
    onMutate: () => {
      localStorage.removeItem("loginToken");
    },
    onSuccess: (res) => {
      localStorage.setItem("loginToken", res.token);
      reset();
      useGetMe();
    },
    onError: (err) => {
      if (err.request.status === 400)
        setError("root", {
          type: "value",
          message: err.response?.data.message,
        });
    },
  });
};
