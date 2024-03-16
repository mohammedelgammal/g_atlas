import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthResponse, registerService } from "../services/authService";
import { REGISTER_QUERY_KEY } from "../constants";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { FormFields } from "../components/Auth/Register";

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
}

export interface ResponseError extends Error {
  response: {
    data: {
      message: string;
    };
  };
}

export default (
  reset: UseFormReset<FormFields>,
  setError: UseFormSetError<FormFields>
) => {
  const navigate = useNavigate();

  return useMutation<AuthResponse, ResponseError, CreateUserData>({
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
  });
};
