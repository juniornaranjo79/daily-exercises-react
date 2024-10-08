import React from "react";
import { useKanbanContext } from "../../Hooks/KanbanContext";
import Task from "../Task/Task";
import "./StyleKanban.css";

export default function Kanban() {
  const { tasks, columns } = useKanbanContext();

  return (
    <div className="tablero-kanban">
      {columns.map((column) => (
        <div key={column.id} className="column-kanba">
          <h2> {column.name} </h2>
          <div>
            {tasks
              .filter((task) => task.column === column.id)
              .map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
