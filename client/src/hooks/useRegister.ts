import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerService } from "../services/authService";
import { REGISTER_QUERY_KEY } from "../constants";

export default () => {
  const navigate = useNavigate();

  return useMutation({
    mutationKey: REGISTER_QUERY_KEY,
    mutationFn: registerService.register,
    onSuccess: () => navigate("/login"),
  });
};
