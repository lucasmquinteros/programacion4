import { useState } from "react";
import * as z from "zod";

const validation = z.object({
  nombre: z
    .string("Este campo debe ser texto")
    .nonempty("este campo no debe ser null")
    .max(30, "el nombre es muy largo"),
  apellido: z
    .string("Este campo debe ser texto")
    .nonempty("este campo no debe ser null")
    .max(30, "el nombre es muy largo"),
});
function App() {
  const init = {
    nombre: "",
    apellido: "",
  };
  const [error, setError] = useState(init);
  return (
    <>
      <h1>Hola Validame</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);
          const result = validation.safeParse(data);
          if (!result.success) {
            const err = JSON.parse(result.error.message);

            let errObj = {};
            err.forEach((e) => {
              const { path, message } = e;
              errObj[path[0]] = message;
            });
            setError(errObj);
          } else {
            setError(init);
            form.reset();
          }
        }}
      >
        <div className="control">
          <label htmlFor="nombre">Nombre: </label>
          <div className="input-container">
            <input
              className="input"
              id="nombre"
              nombre="nombre"
              type="text"
              placeholder="Search the internet..."
            />
            {error.nombre && <p className="error">{error.nombre}</p>}
          </div>
        </div>
        <div className="control">
          <label htmlFor="apellido">apellido: </label>
          <div className="input-container">
            <input
              className="input"
              id="apellido"
              nombre="apellido"
              type="text"
              placeholder="Search the internet..."
            />
            {error.apellido && <p className="error">{error.apellido}</p>}
          </div>
        </div>
        <button className="button-19" role="button">
          Button 19
        </button>
      </form>
    </>
  );
}

export default App;
