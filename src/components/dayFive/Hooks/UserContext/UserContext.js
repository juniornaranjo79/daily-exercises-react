import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  const updateUser = (updateUser) => {
    setUsers(
      users.map((user) => (user.id === updateUser.id ? updateUser : user))
    );
    setEditUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const setUserToEdit = (user) => {
    setEditUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
        editUser,
        setUserToEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
