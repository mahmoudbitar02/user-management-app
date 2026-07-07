import type { User, UserAction } from "../types/Type";

export function userReducer(state: User[], action: UserAction) {
  switch (action.type) {
    case "ADD_USER":
      console.log("Adding user:", action.payload);
      return [...state, action.payload];
    case "SET_USER":
      return action.payload;
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "UPDATE_USER":
      return state.map((user) => (user.id === action.payload.id ? action.payload : user));
    default:
      return state;
  }
}
