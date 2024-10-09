import React from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import Kanban from "./components/Kanban/Kanban";
import styles from "./TheKanban.module.css";

export default function TheKanban() {
  return (
    <div className={styles.containerKanban}>
      <h1>Tablero kanban</h1>
      <TaskForm />
      <Kanban />
    </div>
  );
}
