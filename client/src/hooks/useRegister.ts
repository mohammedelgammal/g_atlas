import { useQuery } from "@tanstack/react-query";
import authService from "../services/authService";
import ms from "ms";
import { AUTH_QUERY_KEY } from "../constants";

export default () =>
  useQuery({
    queryKey: AUTH_QUERY_KEY,
    queryFn: authService.register,
    staleTime: ms("1d"),
  });
