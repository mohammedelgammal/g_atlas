import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { loginService } from "src/services/authService";
import { LOGIN_QUERY_KEY } from "src/constants";
import { AuthResponseType, LoginUserData } from "src/types/Services";
import { LoginFormFields } from "src/types/FormFields";

export default (
  reset: UseFormReset<LoginFormFields>,
  setError: UseFormSetError<LoginFormFields>
) => {
  const navigate = useNavigate();

  return useMutation<AuthResponseType, AxiosError<AxiosError>, LoginUserData>({
    mutationKey: LOGIN_QUERY_KEY,
    mutationFn: loginService.login,
    onMutate: () => {
      localStorage.removeItem("loginToken");
    },
    onSuccess: (res) => {
      localStorage.setItem("loginToken", res.token);
      reset();
      navigate("/redirecting");
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
