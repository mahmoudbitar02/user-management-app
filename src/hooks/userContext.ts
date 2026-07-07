import { createContext, useContext } from "react";
import type { User, UserAction } from "../types/Type";

type UserContextType = {
  users: User[];
  dispatch: React.Dispatch<UserAction>;
};

export const UserContext = createContext<UserContextType>({ users: [], dispatch: () => {} });

export function useUserContext() {
  const context = useContext(UserContext);
  //   if (!context) return null;
  return context;
}
