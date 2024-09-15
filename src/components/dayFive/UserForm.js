import React, { useEffect, useState } from "react";
import { useUserContext } from "./Hooks/UserContext/UserContext";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">{editUser ? "Update" : "Add"} User </button>
    </form>
  );
}
