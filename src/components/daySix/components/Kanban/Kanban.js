import React from "react";
import { useKanbanContext } from "../../Hooks/KanbanContext";
import Task from "../Task/Task";
import styles from "./Kanban.module.css";
import TaskForm from "../TaskForm/TaskForm";

export default function Kanban() {
  const { tasks, columns } = useKanbanContext();

  return (
    <div className={styles.tableroKanban}>
      {columns.map((column) => (
        <div key={column.id} className={styles.columnKanba}>
          <h2> {column.name} </h2>
          <div className={styles.contentTask}>
            {tasks
              .filter((task) => task.column === column.id)
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </div>
          {column.id === "todo" && (
            <div>
              <TaskForm />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
