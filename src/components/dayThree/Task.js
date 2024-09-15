import React from "react";
import "./StyleTask.css";

export default function Task({ task, deleteTask, toggleComplete }) {
  return (
    <li className="card-task">
      <div className="card-title">
        <h1 style={{ textDecoration: task.complete ? "line-through" : "none" }}>
          {task.text}
        </h1>
        <p style={{ color: task.complete ? "green" : "red" }}>
          {task.complete ? "Completada" : "No completada"}{" "}
        </p>
      </div>
      <div className="card-actions">
        <button onClick={() => toggleComplete(task.id)}>Completada</button>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </li>
  );
}
