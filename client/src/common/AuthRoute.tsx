import { JwtPayload, jwtDecode } from "jwt-decode";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface DecodedUserData extends JwtPayload {
  id: string;
  exp: number;
}

export default ({ children }: AuthProviderProps): ReactNode => {
  const isAuthenticated = (): boolean => {
    const token = localStorage.getItem("loginToken");
    if (!token) return false;
    const { id, exp }: DecodedUserData = jwtDecode(token);
    return !!id && exp * 1000 > Date.now();
  };

  return isAuthenticated() ? <Navigate to="/" /> : children;
};
