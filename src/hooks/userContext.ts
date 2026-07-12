import { createContext, useContext } from "react";
import type { User, UserAction } from "../types/Type";

type UserContextType = {
  users: User[];
  dispatch: React.Dispatch<UserAction>;
  selectedUser: User | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType>({ users: [], dispatch: () => {}, selectedUser: null, setSelectedUser: () => {} });

export function useUserContext() {
  const context = useContext(UserContext);
  //   if (!context) return null;
  return context;
}
