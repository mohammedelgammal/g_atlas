import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { useShallow } from "zustand/react/shallow";
import useStore from "src/store";
import { getMeService } from "src/services/authService";
import { GET_ME_QUERY_KEY } from "src/constants";
import { GetMeResponseType } from "src/types/Services";

export default () => {
  const token = localStorage.getItem("loginToken");
  if (!token) return;
  const { setUser } = useStore(
    useShallow((state) => ({
      setUser: state.setUser,
    }))
  );

  return useQuery<GetMeResponseType, Error>({
    queryKey: GET_ME_QUERY_KEY,
    queryFn: getMeService.getMe,
    staleTime: ms("30d"),
    retry: 1,
    onSuccess: (data) => {
      setUser(data);
    },
    onError: () => {
      localStorage.removeItem("loginToken");
    },
  });
};
