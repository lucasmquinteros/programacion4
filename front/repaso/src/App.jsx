import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [personaje, setPersonaje] = useState({
    name: "",
    ki: "",
    description: "",
  });

  const [id, setId] = useState(null);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setPersonaje(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const idToFind = data.get("idToFind");
    if (idToFind >= 1) {
      setId(idToFind);
    }
  };
  return (
    <>
      <h1>Id: {id}</h1>
      <h2>Nombre: {personaje.name}</h2>
      <span>Ki: {personaje.ki}</span>
      <p>Descripcion: {personaje.description}</p>
      <form onSubmit={handleSubmit}>
        <label>
          id:
          <input type="number" name="idToFind" />
        </label>
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}

export default App;

// Efecto = ejecutar código arbitrario (algo que no tiene mucho que ver con lo que estamos haciendo)
// useEffect recibe el callback donde se ejecuta el codigo arbitrario
// [] => se ejecuta 1 vez y cuando se crea el componente
// [variable] => pasamos las dependencias para que se ejecute cuando se actualice la variable de la dependencia (se ejecuta luego del renderizado (renace), useLayoutEffect se ejecuta antes del renderizado) (se ejecuta 1 vez, no 2 veces como cuando se crea el componenete porque react ya sabe cuando es un effect, si no tendria que hacer mucho trabajo) (usamos dependencias cuando en el codigo arbitrario usamos variables externas)
// cuando el componente muere el código arbitrario tiene que retornar una closure, se ejecuta la closure cuando se elimina el componente

// function App() {
//   console.log("Componente creado");
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const font = document.getElementById("font");
//     font.style.fontSize = `${14 + count}px`;
//     return ()=>{console.log("componente eliminado?")}
//   }, [count]);

//   return (
//     <>
//       <h1>Hello World</h1>
//       <p id="font">{count}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   );
// }
