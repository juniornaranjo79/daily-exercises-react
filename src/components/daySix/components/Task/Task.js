import React from "react";
import { useKanbanContext } from "../../Hooks/KanbanContext";
import styles from "./Task.module.css";

export default function Task({ task }) {
  const { moveTask, deleteTask } = useKanbanContext();

  return (
    <div className={styles.cardTask}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className={styles.actions}>
        {task.column === "todo" && (
          <>
            <button onClick={() => moveTask(task.id, "in-progress")}>
              Mover a en progreso
            </button>
            <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
          </>
        )}

        {task.column === "in-progress" && (
          <>
            <button onClick={() => moveTask(task.id, "todo")}>
              Mover a por hacer
            </button>
            <button onClick={() => moveTask(task.id, "done")}>
              Mover a hecho
            </button>
            <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
          </>
        )}

        {task.column === "done" && (
          <>
            <button onClick={() => moveTask(task.id, "in-progress")}>
              Mover a en progreso
            </button>
            <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
          </>
        )}
      </div>
    </div>
  );
}
