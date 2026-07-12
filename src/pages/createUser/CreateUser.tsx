import { useEffect } from "react";
import UserForm from "../../components/userForm/UserForm";
import { useUserContext } from "../../hooks/userContext";

function CreateUser() {
  const { setSelectedUser } = useUserContext();
  useEffect(() => {
    setSelectedUser(null);
  }, []);
  return (
    <div>
      <UserForm />
    </div>
  );
}

export default CreateUser;
