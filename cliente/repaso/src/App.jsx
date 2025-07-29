import { useEffect, useState } from "react";
import "./App.css";

/**
 * UseEfect es un Hook que nos permite realizar efectos secundarios en componentes funcionales.
 * Decide que hacer cuando algo se crea, vive y muere
 * Ejecuta Código Arbitrario
 *
 *
 * UseEffect recibe dos parámetros:
 * Un callback que se ejecuta cuando el componente se monta, actualiza o desmonta.
 * Un array de dependencias que indica cuándo debe ejecutarse el callback.
 * El array de dependencias vacio, se ejecuta 1 vez al montar el componente.
 *
 *
 * Cuando el componente se desmonta dentro del closure, se ejecuta la funcion retornada.
 * * El callback se ejecuta después de que el componente se haya renderizado.
 */

function App() {
  const [pj, setPj] = useState({
    name: "",
    ki: "",
    description: "",
  }); // pj -> Personaje

  const [id, setId] = useState(1); // id del personaje

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((res) => res.json())
      .then(setPj);
  }, [id]);

  const handlerSubmit = (e) => {
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
      <h2>Dragon ball</h2>
      <h2>Nombre: {pj.name}</h2>
      <span>Ki: {pj.ki}</span>
      <p>Descripcion: {pj.description}</p>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="">
          id:
          <input type="number" name="idToFind" />
        </label>
        <button type="submit">Buscar</button>
      </form>
    </>
  );
}

export default App;
