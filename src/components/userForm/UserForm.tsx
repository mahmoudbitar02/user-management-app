import { useEffect, useState } from "react";
import InputField from "../inputField/InputField";
import SelectField from "../selectField/SelectField";
import "./userForm.scss";
import Button from "../button/Button";
import { initialValue, type User } from "../../types/Type";
import { useUserContext } from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const navigate = useNavigate();

  const [value, setValue] = useState<User>(initialValue);
  const { selectedUser, setSelectedUser, dispatch } = useUserContext();

  useEffect(() => {
    if (selectedUser) {
      setValue(selectedUser);
    } else {
      setValue(initialValue);
    }
  }, [selectedUser]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedUser) {
      setValue(initialValue);
      dispatch({ type: "ADD_USER", payload: { ...value, id: crypto.randomUUID() } });
    } else if (selectedUser) {
      dispatch({ type: "UPDATE_USER", payload: value });
      setValue(initialValue);
      setSelectedUser(null);
    }
    navigate("/overview");
  }

  return (
    <form className="inputs" onSubmit={handleSubmit}>
      <InputField
        placeholder="Enter your username"
        inputId="username"
        label="Username"
        inputType="text"
        inputName="username"
        handleChange={handleInputChange}
        value={value.username}
      />
      <InputField
        placeholder="Enter your email"
        inputId="email"
        label="Email"
        inputType="email"
        inputName="email"
        handleChange={handleInputChange}
        value={value.email}
      />
      <InputField
        placeholder="Enter your birthday"
        inputId="birthday"
        label="Birthday"
        inputType="date"
        inputName="birthday"
        handleChange={handleInputChange}
        value={value.birthday}
      />
      <SelectField inputId="gender" label="Gender" inputType="text" inputName="gender" handleChange={handleInputChange} value={value.gender} />
      <InputField
        placeholder="Enter your post address"
        inputId="postAddress"
        label="Post Address"
        inputType="text"
        inputName="postAddress"
        handleChange={handleInputChange}
        value={value.postAddress}
      />
      <InputField
        placeholder="Enter your phone number"
        inputId="phone"
        label="Phone"
        inputType="tel"
        inputName="phone"
        handleChange={handleInputChange}
        value={value.phone}
      />
      <InputField
        placeholder="Enter your website URL"
        inputId="website"
        label="Website"
        inputType="url"
        inputName="website"
        handleChange={handleInputChange}
        value={value.website}
      />
      <Button text={selectedUser ? "Update User" : "Create User"} />
    </form>
  );
}

export default UserForm;
