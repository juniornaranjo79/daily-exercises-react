import React from "react";
import { useUserContext } from "./Hooks/UserContext/UserContext";

export default function UserList() {
  const { users, deleteUser, setUserToEdit } = useUserContext();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
          <button onClick={() => setUserToEdit(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
