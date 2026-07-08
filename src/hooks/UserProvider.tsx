import { userReducer } from "./userReducer";
import type { ReactNode } from "react";
import { useEffect, useReducer } from "react";
import { UserContext } from "./userContext";

export function UserProvider({ children }: { children: ReactNode }) {
  const [users, dispatch] = useReducer(userReducer, [], () => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return <UserContext.Provider value={{ users, dispatch }}> {children}</UserContext.Provider>;
}
