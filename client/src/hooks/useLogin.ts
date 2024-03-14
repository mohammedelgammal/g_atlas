import { useMutation } from "@tanstack/react-query";
import authService from "../services/loginService";
import { LOGIN_QUERY_KEY } from "../constants";
import { useNavigate } from "react-router-dom";
import useStore from "../store";
import { useShallow } from "zustand/react/shallow";
import { jwtDecode } from "jwt-decode";

export default () => {
  const navigate = useNavigate();
  const { setUser } = useStore(
    useShallow((state) => ({
      setUser: state.setUser,
    }))
  );
  return useMutation({
    mutationKey: LOGIN_QUERY_KEY,
    mutationFn: authService.login,
    onSuccess: (res) => {
      if (res.status === 401) return;
      const usere = jwtDecode(res.token);
      navigate("/");
      localStorage.setItem("loginToken", res.token);
      setUser({ username: usere.username, email: usere.email });
    },
    onError: () => {
      localStorage.removeItem("loginToken");
    },
  });
};

// express mongoose colors dotenv
