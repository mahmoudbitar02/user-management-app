import { userReducer } from "./userReducer";
import type { ReactNode } from "react";
import { useEffect, useReducer, useState } from "react";
import { UserContext } from "./userContext";
import type { User } from "../types/Type";

export function UserProvider({ children }: { children: ReactNode }) {
  const [users, dispatch] = useReducer(userReducer, [], () => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return <UserContext.Provider value={{ users, dispatch, selectedUser, setSelectedUser }}> {children}</UserContext.Provider>;
}
