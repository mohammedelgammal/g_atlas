import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthResponse, registerService } from "../services/authService";
import { REGISTER_QUERY_KEY } from "../constants";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { RegisterFormData } from "../components/Auth/Register";

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export default (
  reset: UseFormReset<RegisterFormData>,
  setError: UseFormSetError<RegisterFormData>
) => {
  const navigate = useNavigate();

  return useMutation<AuthResponse, AxiosError<AxiosError>, CreateUserData>({
    mutationKey: REGISTER_QUERY_KEY,
    mutationFn: registerService.register,
    onSuccess: (res) => {
      if (res.message)
        return setError("root", {
          type: "value",
          message: res.message,
        });
      reset();
      navigate("/login");
    },
    onError: (err) => {
      if (err.request.status === 400)
        setError("root", {
          type: "value",
          message: err.response?.data.message,
        });
      localStorage.removeItem("loginToken");
    },
  });
};
