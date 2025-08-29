import { useState } from "react";
import { isNullOrEmpty } from "../utils/string-validation";

export default function FormTask() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const text = data.get("task");

    if (isNullOrEmpty(text)) return;
    const taskFound = tasks.find(
      (t) => t.text === text.trim() && t.completed == false
    );

    if (taskFound) return;

    if (!isNullOrEmpty(text)) {
      const task = {
        id: new Date(),
        text,
        completed: false,
      };
      setTasks([...tasks, task]);
      form.reset();
    }
  };

  const handleComplete = (id) => {
    const taskFound = tasks.find((t) => t.id === id);
    taskFound.completed = true;
    const updatedTasks = tasks.filter((t) => t.id != id);
    setTasks([...updatedTasks, taskFound]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Tarea:</label>
          <input type="text" id="task" name="task" />
        </div>
        <button>Agregar</button>
      </form>
      <div>
        <h3>Lista de tareas</h3>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${task.completed && "text-green-500"}`}
            >
              {task.text}
              {!task.completed && (
                <input
                  type="checkbox"
                  id={task.id}
                  onClick={() => handleComplete(task.id)}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
