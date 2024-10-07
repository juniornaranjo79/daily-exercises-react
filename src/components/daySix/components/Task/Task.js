import React from "react";
import { useKanbanContext } from "../../Hooks/KanbanContext";

export default function Task({ task }) {
  const { moveTask, deleteTask } = useKanbanContext();

  return (
    <div>
      <h3>{task.id}</h3>
      <p>{task.description}</p>
      <button onClick={() => moveTask(task.id, "in-progress")}>
        Mover a en progreso
      </button>
      <button onClick={() => moveTask(task.id, "done")}>Mover a hecho</button>
      <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}
