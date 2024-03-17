import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface DecodedUserData extends JwtPayload {
  id: string;
  exp: number;
}

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("loginToken");
  if (!token) return false;
  const { id, exp }: DecodedUserData = jwtDecode(token);
  return !!id && exp * 1000 > Date.now();
};

export default ({ children }: AuthProviderProps): ReactNode => {
  return isAuthenticated() ? <Navigate to="/" /> : children;
};
