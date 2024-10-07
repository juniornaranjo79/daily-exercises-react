import React, { useEffect, useState } from "react";
import { useUserContext } from "./Hooks/UserContext/UserContext";
import "./StyleUsers.css";

export default function UserForm() {
  // esto provee la configuracion del contexto
  const { addUser, updateUser, editUser, setUserToEdit } = useUserContext();

  // este setea los valores de los input del form que inician un string en vacio
  const [user, setUser] = useState({ name: "", email: "" });

  // Validación
  const [errorMessagesName, setErrorMessagesName] = useState("");
  const [errorMessagesEmail, setErrorMessagesEmail] = useState("");

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    }
  }, [editUser]);

  const validateInput = () => {
    if (user.name === "" || user.name === null) {
      setErrorMessagesName("El campo name no puede estar vacio");
      return true;
    } else if (user.name.length < 3) {
      setErrorMessagesName("El campo name no es válido");
      return true;
    } else {
      setErrorMessagesName("");
      return false;
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (user.email === "" || user.email === null) {
      setErrorMessagesEmail("El campo de email no puede estar vacio");
      return true;
    } else if (!emailRegex.test(user.email)) {
      setErrorMessagesEmail("El formato del email no es válido");
      return true;
    } else {
      setErrorMessagesEmail("");
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length < 3) {
      setErrorMessagesName("Nombre no valido");
    } else {
      setErrorMessagesName("");
    }
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameHasError = validateInput();
    const emailHasError = validateEmail();

    if (nameHasError || emailHasError) {
      return;
    }

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
      <div>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
          className="input-user"
        />
        <div>
          {errorMessagesName && (
            <p className="error-messages ">{errorMessagesName}</p>
          )}
        </div>
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="input-user"
        />
        <div>
          {errorMessagesEmail && (
            <p className="error-messages ">{errorMessagesEmail}</p>
          )}
        </div>
      </div>
      <div className="actions">
        <button type="submit">{editUser ? "Update" : "Add"} User </button>
      </div>
    </form>
  );
}
