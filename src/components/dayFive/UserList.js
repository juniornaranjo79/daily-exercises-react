import React from "react";
import { useUserContext } from "./Hooks/UserContext/UserContext";
import "./StyleUsers.css";

export default function UserList() {
  const { users, deleteUser, setUserToEdit } = useUserContext();

  return (
    <div className="container">
      <ul className="users-list">
        {users.length === 0 ? (
          <p>No hay usuarios disponibles.</p>
        ) : (
          users.map((user) => (
            <li key={user.id} className="user-card">
              <div className="user-title-card">
                <h2>{user.name}</h2>
                <p>
                  <span className="font-bold">Email:</span> {user.email}
                </p>
              </div>
              <div className="actions-card">
                <button
                  onClick={() => setUserToEdit(user)}
                  aria-label={`Editar ${user.name}`}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  aria-label={`Eliminar ${user.name}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
