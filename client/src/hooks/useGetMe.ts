import { useQuery } from "@tanstack/react-query";
import { GetMeResponse, getMeService } from "../services/authService";
import { GET_ME_QUERY_KEY } from "../constants";
import useStore from "../store";
import { useShallow } from "zustand/react/shallow";
import { useNavigate } from "react-router-dom";
import ms from "ms";

export default () => {
  const navigate = useNavigate();
  const { setUser } = useStore(
    useShallow((state) => ({
      setUser: state.setUser,
    }))
  );

  return useQuery<GetMeResponse, Error>({
    queryKey: GET_ME_QUERY_KEY,
    queryFn: getMeService.getMe,
    staleTime: ms("30d"),
    retry: 1,
    onSuccess: (data) => {
      setUser(data);
      navigate("/");
    },
    onError: () => {
      localStorage.removeItem("loginToken");
    },
  });
};