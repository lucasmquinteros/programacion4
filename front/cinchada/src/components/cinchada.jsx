import { useState } from "react";
import Equipo from "./equipo";

const TOTAL_CUERDA = 10;
let numeroAleatorio;

export default function Cinchada() {
  const [cuerda, setCuerda] = useState({ rojo: 5, verde: 5 });
  const [count, setCount] = useState(0);

  const handleTirar = (equipo) => {
    if (cuerda.rojo >= TOTAL_CUERDA || cuerda.verde >= TOTAL_CUERDA) return;

    numeroAleatorio = Math.floor(Math.random() * (3 - 0 + 1) + 0);
    setCount(count + 1);

    setCuerda(
      equipo === "rojo"
        ? {
            rojo: cuerda.rojo + numeroAleatorio,
            verde: cuerda.verde - numeroAleatorio,
          }
        : {
            rojo: cuerda.rojo - numeroAleatorio,
            verde: cuerda.verde + numeroAleatorio,
          }
    );
  };

  const handleReset = () => {
    setCuerda({ rojo: 5, verde: 5 });
    setCount(0);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Equipo color="verde" cuerda={cuerda.verde} onTirar={handleTirar} />
        <div>
          <div>Longitud: {TOTAL_CUERDA}m</div>
          --------------------------------------------------------------
        </div>
        <Equipo color="rojo" cuerda={cuerda.rojo} onTirar={handleTirar} />
      </div>
      <div>
        {cuerda.rojo >= TOTAL_CUERDA ? (
          <h3 style={{ position: "absolute", left: "46%", top: "5%" }}>
            El equipo Rojo gana
          </h3>
        ) : cuerda.verde >= TOTAL_CUERDA ? (
          <h3 style={{ position: "absolute", left: "46%", top: "5%" }}>
            El equipo Verde gana
          </h3>
        ) : (
          <></>
        )}
        <p>Fuerza aplicada: {numeroAleatorio}</p>
        <p>Tiradas totales: {count}</p>
        <button onClick={handleReset}>Resetear</button>
      </div>

      {/* <h1>Cinchada</h1>
      <p>Longitud de cuerda total: {TOTAL_CUERDA}</p>
      <Equipo color={"rojo"} cuerda={cuerda.rojo} onTirar={handleTirar} />
      <p>Fuerza aplicada: {numeroAleatorio}</p>
      <Equipo color={"verde"} cuerda={cuerda.verde} onTirar={handleTirar} />
      {cuerda.rojo >= TOTAL_CUERDA ? (
        <h3>El equipo Rojo gana</h3>
      ) : cuerda.verde >= TOTAL_CUERDA ? (
        <h3>El equipo Rojo gana</h3>
      ) : (
        <></>
      )}
      <p>Tiradas totales: {count}</p>
      <button
        style={{ display: "flex", marginTop: "10px" }}
        onClick={() => setCuerda({ rojo: 5, verde: 5 })}
      >
        Resetear
      </button> */}
    </main>
  );
}
