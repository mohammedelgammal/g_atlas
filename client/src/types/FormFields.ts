import { AxiosError } from "axios";
import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";

export interface LoginFormFields {
  username: string;
  email: string;
  password: string;
}

export interface RegisterFormFields {
  username: RegisterOptions;
  email: RegisterOptions;
  loginPassword: RegisterOptions;
  registerPassword: (emailValue: string) => RegisterOptions;
}

export interface AuthFormUIProps {
  children: React.ReactNode;
}

export interface InputFieldProps {
  error: string | undefined;
  children?: React.ReactNode;
}

export interface SubmitButtonProps {
  isValid: boolean;
  isLoading: boolean;
  submitText: string;
}

export interface CallToActionProps {
  to: string;
  content: string;
}

export interface ErrorAlertProps {
  isError: boolean;
  error: AxiosError<AxiosError> | null;
}

export interface PasswordInputProps {
  isLoading: boolean;
  registeration: UseFormRegisterReturn<"password">;
}
