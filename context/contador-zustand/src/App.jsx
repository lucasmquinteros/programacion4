import { useStore, useUserStore } from "./store/useContadorStore";
import ContadorDisplay from "./components/display-contador";
import Botones from "./components/botones";
import { useEffect } from "react";

export default function App() {
  const usuarios = useUserStore((state) => state.usuarios);
  const cargarUsuarios = useUserStore((state) => state.cargarUsuarios);

  useEffect(() => {
    cargarUsuarios();
  }, [cargarUsuarios]);
  return (
    <main>
      <div>
        <h2 style={{ color: "purple" }}>Contador con ZUSTAND</h2>
        <ContadorDisplay />
        <Botones />
      </div>
      <div>
        <h2 style={{ color: "purple" }}>Usuarios con ZUSTAND</h2>
        <ul></ul>
        {usuarios.length === 0 ? (
          <li>Cargando usuarios...</li>
        ) : (
          usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.id} - <strong>{usuario.name}</strong> - {usuario.email}
            </li>
          ))
        )}
      </div>
    </main>
  );
}
