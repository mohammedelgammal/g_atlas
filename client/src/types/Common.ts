import { JwtPayload } from "jwt-decode";

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
