import React, { useEffect, useState } from "react";
import { useUserContext } from "./Hooks/UserContext/UserContext";
import "./StyleUsers.css";

export default function UserForm() {
  // esto provee la configuracion del contexto
  const { addUser, updateUser, editUser, setUserToEdit } = useUserContext();

  // este setea los valores de los input del form que inician un string en vacio
  const [user, setUser] = useState({ name: "", email: "" });

  console.log("editUser", editUser);
  useEffect(() => {
    if (editUser) {
      console.log("editUserEffect", editUser);
      setUser(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser({ name: "", email: "" });
    setUserToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit} className="user-from">
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        className="input-user"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        className="input-user"
        required
      />
      <button type="submit">{editUser ? "Update" : "Add"} User </button>
    </form>
  );
}
