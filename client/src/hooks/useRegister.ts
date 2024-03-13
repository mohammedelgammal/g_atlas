import { useMutation } from "@tanstack/react-query";
import authService from "../services/authService";
import { REGISTER_QUERY_KEY } from "../constants";

export default () =>
  useMutation({
    mutationKey: REGISTER_QUERY_KEY,
    mutationFn: authService.register,
  });
