import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthResponse, registerService } from "../services/authService";
import { REGISTER_QUERY_KEY } from "../constants";

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
}

interface ResponseError extends Error {
  response: {
    data: {
      message: string;
    };
  };
}

export default () => {
  const navigate = useNavigate();

  return useMutation<AuthResponse, ResponseError, CreateUserData>({
    mutationKey: REGISTER_QUERY_KEY,
    mutationFn: registerService.register,
    onSuccess: () => navigate("/login"),
  });
};
