import { userReducer } from "./userReducer";
import type { ReactNode } from "react";
import { useReducer } from "react";
import { UserContext } from "./userContext";

export function UserProvider({ children }: { children: ReactNode }) {
  const [users, dispatch] = useReducer(userReducer, []);

  return <UserContext.Provider value={{ users, dispatch }}> {children}</UserContext.Provider>;
}
