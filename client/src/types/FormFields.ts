import { RegisterOptions } from "react-hook-form";

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
