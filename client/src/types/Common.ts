import { AxiosError } from "axios";
import { JwtPayload } from "jwt-decode";
import { UseFormRegisterReturn } from "react-hook-form";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface DecodedUserData extends JwtPayload {
  id: string;
  exp: number;
}

export interface ChildrenProps {
  children: string;
}

export interface PasswordInputProps {
  isLoading: boolean;
  registeration: UseFormRegisterReturn<"password">;
}

export interface ErrorAlertProps {
  isError: boolean;
  error: AxiosError<AxiosError> | null;
}
