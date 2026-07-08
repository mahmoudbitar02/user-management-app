import { useUserContext } from "../../hooks/userContext";
import "./user.scss";

function Users() {
  const { users, dispatch } = useUserContext();
  console.log(users);

  function handleDeleteUser(id: string) {
    dispatch({ type: "DELETE_USER", payload: id });
  }
  return (
    <div>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="users">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <button onClick={() => handleDeleteUser(user.id)} className="user-card__close">
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
