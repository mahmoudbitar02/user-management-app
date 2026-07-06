import type { InputFieldProps } from "../../types/Type";
function SelectField({ inputId, label, inputName, handleChange, value }: InputFieldProps) {
  return (
    <div className="items">
      <label className="items__label" htmlFor={inputId}>
        {label}
      </label>
      <select className="items__input" id={inputId} name={inputName} onChange={handleChange} value={value}>
        <option value="">Select an option</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
}

export default SelectField;
