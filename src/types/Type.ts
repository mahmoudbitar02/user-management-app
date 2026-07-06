export type InputFieldProps = {
  inputId: string;
  label: string;
  inputType: string;
  inputName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  value: string;
  placeholder?: string;
};
