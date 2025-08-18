import { useState } from "react";
import { isValidString } from "../utils/string-validator";

export default function FormTask() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const text = data.get("task");

    if (!isValidString(text)) {
      console.error("Tarea no válida");
      alert("Por favor, ingrese una tarea válida.");
    }
    // Verificar si la tarea ya existe o está completada
    const taskFound = tasks.find(
      (task) => task.text === text.trim() && task.completed === false
    );

    if (taskFound)
      return console.error("Tarea ya existe o no fue completada todavia");

    const task = {
      id: new Date().getTime(), // Generar un ID único basado en la fecha actual
      text,
      completed: false,
    };

    setTasks(() => [...tasks, task]);
    event.target.reset(); // Limpiar el formulario
  };

  const handlerComplete = (taskId) => {
    const taskFound = tasks.find((task) => task.id === taskId);
    taskFound.completed = true; // Cambiar el estado de completado

    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks([...updatedTasks, taskFound]); // Actualizar la lista de tareas
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
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`${task.completed && "text-green-400"}`}>
            {task.text}
            {!t.completed && (
              <input
                type="checkbox"
                id={task.id}
                onClick={() => handlerComplete(task.id)}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
