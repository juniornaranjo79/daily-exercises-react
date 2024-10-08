import React, { useState } from "react";
import { useKanbanContext } from "../../Hooks/KanbanContext";

export default function TaskForm() {
  const { addTask } = useKanbanContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  const seeForm = () => {
    setShowForm(true);
  };

  return (
    <div>
      <button onClick={seeForm}>Nueva tarea</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción"
          />
          <button type="submit">Agregar tarea</button>
        </form>
      )}
    </div>
  );
}
