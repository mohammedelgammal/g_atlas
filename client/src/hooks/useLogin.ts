import { useMutation } from "@tanstack/react-query";
import authService from "../services/loginService";
import { LOGIN_QUERY_KEY } from "../constants";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: LOGIN_QUERY_KEY,
    mutationFn: authService.login,
    onSuccess: (res) => {
      if (res.status === 401) return;
      navigate("/");
      localStorage.setItem("loginToken", res.token);
    },
    onError: () => {
      localStorage.removeItem("loginToken");
    },
  });
};
