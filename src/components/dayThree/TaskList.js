import React, { useState } from "react";
import Task from "./Task";
import "./StyleTask.css";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const createTask = (e) => {
    e.preventDefault();

    if (text === "") return;

    setTasks([...tasks, { id: Date.now(), text, complete: false }]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  };

  const searchTask = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form onSubmit={createTask}>
        <input
          value={text}
          placeholder="Nueva tarea"
          type="text"
          onChange={(e) => setText(e.target.value)}
        ></input>
      </form>
      <input
        value={search}
        placeholder="Buscar tarea"
        type="text"
        onChange={searchTask}
      ></input>
      <ul className="ul-list">
        {tasks
          .filter((task) =>
            task.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          ))}
      </ul>
    </>
  );
}
