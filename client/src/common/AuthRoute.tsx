import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AuthProviderProps, DecodedUserData } from "src/types/Common";

const getIsAuthenticated = (): boolean => {
  const token = localStorage.getItem("loginToken");
  if (!token) return false;
  const { id, exp }: DecodedUserData = jwtDecode(token);
  return !!id && exp * 1000 > Date.now();
};

export default ({ children }: AuthProviderProps): React.ReactNode => {
  return getIsAuthenticated() ? <Navigate to="/" /> : children;
};
