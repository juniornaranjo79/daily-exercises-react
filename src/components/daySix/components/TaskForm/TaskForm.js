import React, { useState } from "react";
import { useKanbanContext } from "../../Hooks/KanbanContext";
import styles from "./TaskForm.module.css";

export default function TaskForm() {
  const { addTask } = useKanbanContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Validación
  const [errorMessagesTitle, setErrorMessagesTitle] = useState("");

  const validateInput = () => {
    if (title === "" || title === null) {
      setErrorMessagesTitle("El campo titulo no puede estar vacio");
      return true;
    } else if (title.length < 3) {
      setErrorMessagesTitle("El campo titulo no es válodo");
      return true;
    } else {
      setErrorMessagesTitle("");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleHasError = validateInput();
    if (titleHasError) {
      return;
    }
    addTask({ title, description });
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  const openForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={openForm}>Nueva tarea</button>
      {showForm && (
        <div>
          <div className={styles.closeForm}>
            <button onClick={closeForm}>X</button>
          </div>
          <div className={styles.containerForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                value={title}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título"
                className={styles.input}
              />
              <div>
                {errorMessagesTitle && (
                  <p className={styles.errorMessagesRed}>
                    {errorMessagesTitle}
                  </p>
                )}
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción"
                className={styles.input}
              />
              <button type="submit">Agregar tarea</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
