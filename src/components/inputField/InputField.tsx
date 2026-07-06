import type { InputFieldProps } from "../../types/Type";

function InputField({ inputId, label, inputType, inputName, handleChange, value, placeholder }: InputFieldProps) {
  return (
    <div className="items">
      <label className="items__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        required
        className="items__input"
        id={inputId}
        type={inputType}
        name={inputName}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
