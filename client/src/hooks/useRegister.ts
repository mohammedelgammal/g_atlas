import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { registerService } from "src/services/authService";
import { REGISTER_QUERY_KEY } from "src/constants";
import {
  AuthResponseType,
  RegisterFormData,
  CreateUserData,
} from "src/types/Services";

export default (
  reset: UseFormReset<RegisterFormData>,
  setError: UseFormSetError<RegisterFormData>
) => {
  const navigate = useNavigate();

  return useMutation<AuthResponseType, AxiosError<AxiosError>, CreateUserData>({
    mutationKey: REGISTER_QUERY_KEY,
    mutationFn: registerService.register,
    onMutate: () => {
      localStorage.removeItem("loginToken");
    },
    onSuccess: () => {
      reset();
      navigate("/login");
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
