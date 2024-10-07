import React, { createContext, useContext, useState } from "react";

const KanbanContext = createContext();

export function useKanbanContext() {
  return useContext(KanbanContext);
}

export function KanbanProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(0);
  const [columns] = useState([
    { id: "todo", name: "Por hacer" },
    { id: "in-progress", name: "En progreso" },
    { id: "done", name: "Hecho" },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { id: nextId, ...task, column: "todo" }]);
    setNextId(nextId + 1);
  };

  const moveTask = (tasksId, targetColumns) => {
    setTasks(
      tasks.map((task) =>
        task.id === tasksId ? { ...task, column: targetColumns } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <KanbanContext.Provider
      value={{ tasks, columns, addTask, moveTask, deleteTask }}
    >
      {children}
    </KanbanContext.Provider>
  );
}
