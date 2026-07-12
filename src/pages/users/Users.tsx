import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../hooks/userContext";
import type { User } from "../../types/Type";
import "./user.scss";

function Users() {
  const navigate = useNavigate();
  const { users, dispatch, selectedUser, setSelectedUser } = useUserContext();

  console.log(users);

  function handleDeleteUser(e: React.MouseEvent<HTMLButtonElement>, id: string) {
    e.stopPropagation();
    dispatch({ type: "DELETE_USER", payload: id });
  }

  function handleClick(user: User) {
    setSelectedUser(user);

    console.log(" User =", user);
    console.log("selected User =", selectedUser);

    navigate(`/edit/${user.id}`);
  }
  return (
    <div>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="users">
          {users.map((user) => (
            <div className="user-card" key={user.id} onClick={() => handleClick(user)}>
              <button onClick={(e) => handleDeleteUser(e, user.id)} className="user-card__close">
                ✕
              </button>
              <div className="user-card__left">
                <img
                  className="user-card__avatar"
                  src={user.gender === "male" ? "/images/male.png" : "/images/female.png"}
                  alt={`${user.username}'s image`}
                />
              </div>
              <div className="user-card__right">
                <h3 className="user-card__name">{user.username}</h3>

                <div className="user-card__grid">
                  <div className="user-card__item">📅 {user.birthday}</div>
                  <div className="user-card__item">📍 {user.postAddress}</div>
                  <div className="user-card__item">⚧ {user.gender}</div>
                  <div className="user-card__item">📞 {user.phone}</div>
                  <div className="user-card__item">✉️ {user.email}</div>
                  <div className="user-card__item">🌐 {user.website}</div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
