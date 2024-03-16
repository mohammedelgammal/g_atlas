import { useMutation } from "@tanstack/react-query";
import { AuthResponse, loginService } from "../services/authService";
import { LOGIN_QUERY_KEY } from "../constants";
import { useNavigate } from "react-router-dom";
// import useStore from "../store";
// import { useShallow } from "zustand/react/shallow";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { LoginUserData } from "./useRegister";
import { UseFormReset, UseFormSetError } from "react-hook-form";
import { LoginFormFields } from "../components/Auth/Login";
import { AxiosError } from "axios";

interface DecodedUser extends JwtPayload {
  id: string;
}

export default (
  reset: UseFormReset<LoginFormFields>,
  setError: UseFormSetError<LoginFormFields>
) => {
  const navigate = useNavigate();
  // const { setUser } = useStore(
  //   useShallow((state) => ({
  //     setUser: state.setUser,
  //   }))
  // );
  return useMutation<AuthResponse, AxiosError<AxiosError>, LoginUserData>({
    mutationKey: LOGIN_QUERY_KEY,
    mutationFn: loginService.login,
    onSuccess: (res) => {
      const user: DecodedUser = jwtDecode(res.token);
      console.log(user.id);
      localStorage.setItem("loginToken", res.token);
      reset();
      navigate("/");
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
