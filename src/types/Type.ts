export type InputFieldProps = {
  inputId: string;
  label: string;
  inputType: string;
  inputName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  value: string;
  placeholder?: string;
};

export type Gender = "male" | "female" | "";

export type User = {
  id: string;
  username: string;
  email: string;
  birthday: string;
  gender: Gender;
  postAddress: string;
  phone: string;
  website: string;
};

export type UserAction =
  | { type: "ADD_USER"; payload: User }
  | { type: "UPDATE_USER"; payload: User }
  | { type: "DELETE_USER"; payload: string }
  | { type: "SET_USER"; payload: User[] };

export const initialValue: User = {
  id: "",
  username: "",
  email: "",
  birthday: "",
  gender: "",
  postAddress: "",
  phone: "",
  website: "",
};
