import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { loginService } from "src/services/authService";
import useStore from "src/store";
import { useShallow } from "zustand/react/shallow";
import { LOGIN_QUERY_KEY } from "src/constants";
import { AuthResponseType, LoginUserData } from "src/types/Services";
import { LoginFormFields } from "src/types/FormFields";

export default (
  reset: UseFormReset<LoginFormFields>,
  setError: UseFormSetError<LoginFormFields>
) => {
  const navigate = useNavigate();
  const { setUser } = useStore(
    useShallow((state) => ({
      setUser: state.setUser,
    }))
  );

  return useMutation<AuthResponseType, AxiosError<AxiosError>, LoginUserData>({
    mutationKey: LOGIN_QUERY_KEY,
    mutationFn: loginService.login,
    onMutate: () => {
      localStorage.removeItem("loginToken");
    },
    onSuccess: ({ _id, username, email, token }) => {
      localStorage.setItem("loginToken", token);
      setUser({ _id, username, email });
      reset();
      navigate("/");
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
